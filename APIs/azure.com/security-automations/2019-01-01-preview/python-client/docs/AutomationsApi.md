# openapi_client.AutomationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**automations_create_or_update**](AutomationsApi.md#automations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName} | 
[**automations_delete**](AutomationsApi.md#automations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName} | 
[**automations_get**](AutomationsApi.md#automations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName} | 
[**automations_list**](AutomationsApi.md#automations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/automations | 
[**automations_list_by_resource_group**](AutomationsApi.md#automations_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations | 
[**automations_validate**](AutomationsApi.md#automations_validate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/automations/{automationName}/validate | 


# **automations_create_or_update**
> Automation automations_create_or_update(api_version, subscription_id, resource_group_name, automation_name, automation)



Creates or updates a security automation. If a security automation is already created and a subsequent request is issued for the same automation id, then it will be updated.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.automation import Automation
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
    api_instance = openapi_client.AutomationsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    automation_name = 'automation_name_example' # str | The security automation name.
    automation = openapi_client.Automation() # Automation | The security automation resource

    try:
        api_response = api_instance.automations_create_or_update(api_version, subscription_id, resource_group_name, automation_name, automation)
        print("The response of AutomationsApi->automations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsApi->automations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **automation_name** | **str**| The security automation name. | 
 **automation** | [**Automation**](Automation.md)| The security automation resource | 

### Return type

[**Automation**](Automation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response that describes why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **automations_delete**
> automations_delete(api_version, subscription_id, resource_group_name, automation_name)



Deletes a security automation.

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
    api_instance = openapi_client.AutomationsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    automation_name = 'automation_name_example' # str | The security automation name.

    try:
        api_instance.automations_delete(api_version, subscription_id, resource_group_name, automation_name)
    except Exception as e:
        print("Exception when calling AutomationsApi->automations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **automation_name** | **str**| The security automation name. | 

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
**204** | NoContent |  -  |
**0** | Error response that describes why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **automations_get**
> Automation automations_get(api_version, subscription_id, resource_group_name, automation_name)



Retrieves information about the model of a security automation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.automation import Automation
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
    api_instance = openapi_client.AutomationsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    automation_name = 'automation_name_example' # str | The security automation name.

    try:
        api_response = api_instance.automations_get(api_version, subscription_id, resource_group_name, automation_name)
        print("The response of AutomationsApi->automations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsApi->automations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **automation_name** | **str**| The security automation name. | 

### Return type

[**Automation**](Automation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response that describes why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **automations_list**
> AutomationList automations_list(api_version, subscription_id)



Lists all the security automations in the specified subscription. Use the 'nextLink' property in the response to get the next page of security automations for the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.automation_list import AutomationList
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
    api_instance = openapi_client.AutomationsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.automations_list(api_version, subscription_id)
        print("The response of AutomationsApi->automations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsApi->automations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**AutomationList**](AutomationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response that describes why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **automations_list_by_resource_group**
> AutomationList automations_list_by_resource_group(api_version, subscription_id, resource_group_name)



Lists all the security automations in the specified resource group. Use the 'nextLink' property in the response to get the next page of security automations for the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.automation_list import AutomationList
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
    api_instance = openapi_client.AutomationsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.

    try:
        api_response = api_instance.automations_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of AutomationsApi->automations_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsApi->automations_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 

### Return type

[**AutomationList**](AutomationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response that describes why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **automations_validate**
> AutomationValidationStatus automations_validate(api_version, subscription_id, resource_group_name, automation_name, automation)



Validates the security automation model before create or update. Any validation errors are returned to the client.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.automation import Automation
from openapi_client.models.automation_validation_status import AutomationValidationStatus
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
    api_instance = openapi_client.AutomationsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    automation_name = 'automation_name_example' # str | The security automation name.
    automation = openapi_client.Automation() # Automation | The security automation resource

    try:
        api_response = api_instance.automations_validate(api_version, subscription_id, resource_group_name, automation_name, automation)
        print("The response of AutomationsApi->automations_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutomationsApi->automations_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **automation_name** | **str**| The security automation name. | 
 **automation** | [**Automation**](Automation.md)| The security automation resource | 

### Return type

[**AutomationValidationStatus**](AutomationValidationStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response that describes why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

