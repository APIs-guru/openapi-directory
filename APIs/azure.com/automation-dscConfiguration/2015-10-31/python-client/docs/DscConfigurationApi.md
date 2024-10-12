# openapi_client.DscConfigurationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dsc_configuration_create_or_update**](DscConfigurationApi.md#dsc_configuration_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName} | 
[**dsc_configuration_delete**](DscConfigurationApi.md#dsc_configuration_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName} | 
[**dsc_configuration_get**](DscConfigurationApi.md#dsc_configuration_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName} | 
[**dsc_configuration_get_content**](DscConfigurationApi.md#dsc_configuration_get_content) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}/content | 
[**dsc_configuration_list_by_automation_account**](DscConfigurationApi.md#dsc_configuration_list_by_automation_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations | 
[**dsc_configuration_update**](DscConfigurationApi.md#dsc_configuration_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName} | 


# **dsc_configuration_create_or_update**
> DscConfiguration dsc_configuration_create_or_update(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version, parameters)



Create the configuration identified by configuration name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_configuration import DscConfiguration
from openapi_client.models.dsc_configuration_create_or_update_parameters import DscConfigurationCreateOrUpdateParameters
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
    api_instance = openapi_client.DscConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    configuration_name = 'configuration_name_example' # str | The create or update parameters for configuration.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DscConfigurationCreateOrUpdateParameters() # DscConfigurationCreateOrUpdateParameters | The create or update parameters for configuration.

    try:
        api_response = api_instance.dsc_configuration_create_or_update(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version, parameters)
        print("The response of DscConfigurationApi->dsc_configuration_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscConfigurationApi->dsc_configuration_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **configuration_name** | **str**| The create or update parameters for configuration. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DscConfigurationCreateOrUpdateParameters**](DscConfigurationCreateOrUpdateParameters.md)| The create or update parameters for configuration. | 

### Return type

[**DscConfiguration**](DscConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json, text/plain; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_configuration_delete**
> dsc_configuration_delete(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version)



Delete the dsc configuration identified by configuration name.

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
    api_instance = openapi_client.DscConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    configuration_name = 'configuration_name_example' # str | The configuration name.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.dsc_configuration_delete(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DscConfigurationApi->dsc_configuration_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **configuration_name** | **str**| The configuration name. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_configuration_get**
> DscConfiguration dsc_configuration_get(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version)



Retrieve the configuration identified by configuration name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_configuration import DscConfiguration
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
    api_instance = openapi_client.DscConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    configuration_name = 'configuration_name_example' # str | The configuration name.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_configuration_get(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version)
        print("The response of DscConfigurationApi->dsc_configuration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscConfigurationApi->dsc_configuration_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **configuration_name** | **str**| The configuration name. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DscConfiguration**](DscConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_configuration_get_content**
> bytearray dsc_configuration_get_content(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version)



Retrieve the configuration script identified by configuration name.

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
    api_instance = openapi_client.DscConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    configuration_name = 'configuration_name_example' # str | The configuration name.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.dsc_configuration_get_content(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version)
        print("The response of DscConfigurationApi->dsc_configuration_get_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscConfigurationApi->dsc_configuration_get_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **configuration_name** | **str**| The configuration name. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
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

# **dsc_configuration_list_by_automation_account**
> DscConfigurationListResult dsc_configuration_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter, skip=skip, top=top, inlinecount=inlinecount)



Retrieve a list of configurations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_configuration_list_result import DscConfigurationListResult
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
    api_instance = openapi_client.DscConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    skip = 56 # int | The number of rows to skip. (optional)
    top = 56 # int | The number of rows to take. (optional)
    inlinecount = 'inlinecount_example' # str | Return total rows. (optional)

    try:
        api_response = api_instance.dsc_configuration_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version, filter=filter, skip=skip, top=top, inlinecount=inlinecount)
        print("The response of DscConfigurationApi->dsc_configuration_list_by_automation_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscConfigurationApi->dsc_configuration_list_by_automation_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **skip** | **int**| The number of rows to skip. | [optional] 
 **top** | **int**| The number of rows to take. | [optional] 
 **inlinecount** | **str**| Return total rows. | [optional] 

### Return type

[**DscConfigurationListResult**](DscConfigurationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dsc_configuration_update**
> DscConfiguration dsc_configuration_update(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version, parameters=parameters)



Create the configuration identified by configuration name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dsc_configuration import DscConfiguration
from openapi_client.models.dsc_configuration_update_parameters import DscConfigurationUpdateParameters
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
    api_instance = openapi_client.DscConfigurationApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    configuration_name = 'configuration_name_example' # str | The create or update parameters for configuration.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.DscConfigurationUpdateParameters() # DscConfigurationUpdateParameters | The create or update parameters for configuration. (optional)

    try:
        api_response = api_instance.dsc_configuration_update(resource_group_name, automation_account_name, configuration_name, subscription_id, api_version, parameters=parameters)
        print("The response of DscConfigurationApi->dsc_configuration_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DscConfigurationApi->dsc_configuration_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **configuration_name** | **str**| The create or update parameters for configuration. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**DscConfigurationUpdateParameters**](DscConfigurationUpdateParameters.md)| The create or update parameters for configuration. | [optional] 

### Return type

[**DscConfiguration**](DscConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/plain; charset=utf-8
 - **Accept**: application/json, text/plain; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

