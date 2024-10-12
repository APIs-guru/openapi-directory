# openapi_client.SoftwareUpdateConfigurationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**software_update_configurations_create**](SoftwareUpdateConfigurationApi.md#software_update_configurations_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName} | 
[**software_update_configurations_delete**](SoftwareUpdateConfigurationApi.md#software_update_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName} | 
[**software_update_configurations_get_by_name**](SoftwareUpdateConfigurationApi.md#software_update_configurations_get_by_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName} | 
[**software_update_configurations_list**](SoftwareUpdateConfigurationApi.md#software_update_configurations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations | 


# **software_update_configurations_create**
> SoftwareUpdateConfiguration software_update_configurations_create(subscription_id, resource_group_name, automation_account_name, software_update_configuration_name, api_version, parameters, client_request_id=client_request_id)



Create a new software update configuration with the name given in the URI.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.software_update_configuration import SoftwareUpdateConfiguration
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
    api_instance = openapi_client.SoftwareUpdateConfigurationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    software_update_configuration_name = 'software_update_configuration_name_example' # str | The name of the software update configuration to be created.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.SoftwareUpdateConfiguration() # SoftwareUpdateConfiguration | Request body.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)

    try:
        api_response = api_instance.software_update_configurations_create(subscription_id, resource_group_name, automation_account_name, software_update_configuration_name, api_version, parameters, client_request_id=client_request_id)
        print("The response of SoftwareUpdateConfigurationApi->software_update_configurations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SoftwareUpdateConfigurationApi->software_update_configurations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **software_update_configuration_name** | **str**| The name of the software update configuration to be created. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**SoftwareUpdateConfiguration**](SoftwareUpdateConfiguration.md)| Request body. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 

### Return type

[**SoftwareUpdateConfiguration**](SoftwareUpdateConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Software update configuration with the same name and properties already exists. |  -  |
**201** | Software update configuration is created. |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_update_configurations_delete**
> software_update_configurations_delete(subscription_id, resource_group_name, automation_account_name, software_update_configuration_name, api_version, client_request_id=client_request_id)



delete a specific software update configuration.

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
    api_instance = openapi_client.SoftwareUpdateConfigurationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    software_update_configuration_name = 'software_update_configuration_name_example' # str | The name of the software update configuration to be created.
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)

    try:
        api_instance.software_update_configurations_delete(subscription_id, resource_group_name, automation_account_name, software_update_configuration_name, api_version, client_request_id=client_request_id)
    except Exception as e:
        print("Exception when calling SoftwareUpdateConfigurationApi->software_update_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **software_update_configuration_name** | **str**| The name of the software update configuration to be created. | 
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 

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
**200** | The software update configuration has been deleted. |  -  |
**204** | The software update configuration does not exist. |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_update_configurations_get_by_name**
> SoftwareUpdateConfiguration software_update_configurations_get_by_name(subscription_id, resource_group_name, automation_account_name, software_update_configuration_name, api_version, client_request_id=client_request_id)



Get a single software update configuration by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.software_update_configuration import SoftwareUpdateConfiguration
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
    api_instance = openapi_client.SoftwareUpdateConfigurationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    software_update_configuration_name = 'software_update_configuration_name_example' # str | The name of the software update configuration to be created.
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)

    try:
        api_response = api_instance.software_update_configurations_get_by_name(subscription_id, resource_group_name, automation_account_name, software_update_configuration_name, api_version, client_request_id=client_request_id)
        print("The response of SoftwareUpdateConfigurationApi->software_update_configurations_get_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SoftwareUpdateConfigurationApi->software_update_configurations_get_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **software_update_configuration_name** | **str**| The name of the software update configuration to be created. | 
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 

### Return type

[**SoftwareUpdateConfiguration**](SoftwareUpdateConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single software update configuration. |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_update_configurations_list**
> SoftwareUpdateConfigurationListResult software_update_configurations_list(subscription_id, resource_group_name, automation_account_name, api_version, client_request_id=client_request_id, filter=filter)



Get all software update configurations for the account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.software_update_configuration_list_result import SoftwareUpdateConfigurationListResult
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
    api_instance = openapi_client.SoftwareUpdateConfigurationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    api_version = 'api_version_example' # str | Client Api Version.
    client_request_id = 'client_request_id_example' # str | Identifies this specific client request. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.software_update_configurations_list(subscription_id, resource_group_name, automation_account_name, api_version, client_request_id=client_request_id, filter=filter)
        print("The response of SoftwareUpdateConfigurationApi->software_update_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SoftwareUpdateConfigurationApi->software_update_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **api_version** | **str**| Client Api Version. | 
 **client_request_id** | **str**| Identifies this specific client request. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**SoftwareUpdateConfigurationListResult**](SoftwareUpdateConfigurationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return list of software update configurations. |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

