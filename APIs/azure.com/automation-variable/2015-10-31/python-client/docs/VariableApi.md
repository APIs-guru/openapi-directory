# openapi_client.VariableApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**variable_create_or_update**](VariableApi.md#variable_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName} | 
[**variable_delete**](VariableApi.md#variable_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName} | 
[**variable_get**](VariableApi.md#variable_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName} | 
[**variable_list_by_automation_account**](VariableApi.md#variable_list_by_automation_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables | 
[**variable_update**](VariableApi.md#variable_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/variables/{variableName} | 


# **variable_create_or_update**
> Variable variable_create_or_update(resource_group_name, automation_account_name, variable_name, subscription_id, api_version, parameters)



Create a variable.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.variable import Variable
from openapi_client.models.variable_create_or_update_parameters import VariableCreateOrUpdateParameters
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
    api_instance = openapi_client.VariableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    variable_name = 'variable_name_example' # str | The variable name.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.VariableCreateOrUpdateParameters() # VariableCreateOrUpdateParameters | The parameters supplied to the create or update variable operation.

    try:
        api_response = api_instance.variable_create_or_update(resource_group_name, automation_account_name, variable_name, subscription_id, api_version, parameters)
        print("The response of VariableApi->variable_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->variable_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **variable_name** | **str**| The variable name. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**VariableCreateOrUpdateParameters**](VariableCreateOrUpdateParameters.md)| The parameters supplied to the create or update variable operation. | 

### Return type

[**Variable**](Variable.md)

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
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **variable_delete**
> variable_delete(resource_group_name, automation_account_name, variable_name, subscription_id, api_version)



Delete the variable.

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
    api_instance = openapi_client.VariableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    variable_name = 'variable_name_example' # str | The name of variable.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.variable_delete(resource_group_name, automation_account_name, variable_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling VariableApi->variable_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **variable_name** | **str**| The name of variable. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
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
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **variable_get**
> Variable variable_get(resource_group_name, automation_account_name, variable_name, subscription_id, api_version)



Retrieve the variable identified by variable name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.variable import Variable
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
    api_instance = openapi_client.VariableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    variable_name = 'variable_name_example' # str | The name of variable.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.variable_get(resource_group_name, automation_account_name, variable_name, subscription_id, api_version)
        print("The response of VariableApi->variable_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->variable_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **variable_name** | **str**| The name of variable. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Variable**](Variable.md)

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

# **variable_list_by_automation_account**
> VariableListResult variable_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version)



Retrieve a list of variables.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.variable_list_result import VariableListResult
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
    api_instance = openapi_client.VariableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.variable_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version)
        print("The response of VariableApi->variable_list_by_automation_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->variable_list_by_automation_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**VariableListResult**](VariableListResult.md)

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

# **variable_update**
> Variable variable_update(resource_group_name, automation_account_name, variable_name, subscription_id, api_version, parameters)



Update a variable.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.variable import Variable
from openapi_client.models.variable_update_parameters import VariableUpdateParameters
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
    api_instance = openapi_client.VariableApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    variable_name = 'variable_name_example' # str | The variable name.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.VariableUpdateParameters() # VariableUpdateParameters | The parameters supplied to the update variable operation.

    try:
        api_response = api_instance.variable_update(resource_group_name, automation_account_name, variable_name, subscription_id, api_version, parameters)
        print("The response of VariableApi->variable_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VariableApi->variable_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **variable_name** | **str**| The variable name. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**VariableUpdateParameters**](VariableUpdateParameters.md)| The parameters supplied to the update variable operation. | 

### Return type

[**Variable**](Variable.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

