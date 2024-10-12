# openapi_client.RunbookDraftApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runbook_draft_get**](RunbookDraftApi.md#runbook_draft_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft | 
[**runbook_draft_get_content**](RunbookDraftApi.md#runbook_draft_get_content) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content | 
[**runbook_draft_publish**](RunbookDraftApi.md#runbook_draft_publish) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/publish | 
[**runbook_draft_replace_content**](RunbookDraftApi.md#runbook_draft_replace_content) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/content | 
[**runbook_draft_undo_edit**](RunbookDraftApi.md#runbook_draft_undo_edit) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/runbooks/{runbookName}/draft/undoEdit | 


# **runbook_draft_get**
> RunbookDraft runbook_draft_get(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)



Retrieve the runbook draft identified by runbook name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.runbook_draft import RunbookDraft
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunbookDraftApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The runbook name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.runbook_draft_get(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)
        print("The response of RunbookDraftApi->runbook_draft_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunbookDraftApi->runbook_draft_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The runbook name. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**RunbookDraft**](RunbookDraft.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runbook_draft_get_content**
> bytearray runbook_draft_get_content(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)



Retrieve the content of runbook draft identified by runbook name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunbookDraftApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The runbook name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.runbook_draft_get_content(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)
        print("The response of RunbookDraftApi->runbook_draft_get_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunbookDraftApi->runbook_draft_get_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The runbook name. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/powershell

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runbook_draft_publish**
> runbook_draft_publish(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)



Publish runbook draft.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunbookDraftApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The parameters supplied to the publish runbook operation.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.runbook_draft_publish(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)
    except Exception as e:
        print("Exception when calling RunbookDraftApi->runbook_draft_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The parameters supplied to the publish runbook operation. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted and  the operation will complete asynchronously. |  * location - URL to query for status of the operation. <br>  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runbook_draft_replace_content**
> bytearray runbook_draft_replace_content(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version, runbook_content)



Replaces the runbook draft content.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunbookDraftApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The runbook name.
    api_version = 'api_version_example' # str | Client Api Version.
    runbook_content = None # object | The runbook draft content.

    try:
        api_response = api_instance.runbook_draft_replace_content(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version, runbook_content)
        print("The response of RunbookDraftApi->runbook_draft_replace_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunbookDraftApi->runbook_draft_replace_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The runbook name. | 
 **api_version** | **str**| Client Api Version. | 
 **runbook_content** | **object**| The runbook draft content. | 

### Return type

**bytearray**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: text/powershell
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted and  the operation will complete asynchronously. |  * location - URL to query for status of the operation. <br>  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runbook_draft_undo_edit**
> RunbookDraftUndoEditResult runbook_draft_undo_edit(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)



Undo draft edit to last known published state identified by runbook name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.runbook_draft_undo_edit_result import RunbookDraftUndoEditResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RunbookDraftApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    runbook_name = 'runbook_name_example' # str | The runbook name.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.runbook_draft_undo_edit(subscription_id, resource_group_name, automation_account_name, runbook_name, api_version)
        print("The response of RunbookDraftApi->runbook_draft_undo_edit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RunbookDraftApi->runbook_draft_undo_edit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **runbook_name** | **str**| The runbook name. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**RunbookDraftUndoEditResult**](RunbookDraftUndoEditResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

