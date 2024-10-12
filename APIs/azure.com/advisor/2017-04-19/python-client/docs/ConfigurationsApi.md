# openapi_client.ConfigurationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurations_create_in_resource_group**](ConfigurationsApi.md#configurations_create_in_resource_group) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations | Create/Overwrite Azure Advisor configuration.
[**configurations_create_in_subscription**](ConfigurationsApi.md#configurations_create_in_subscription) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations | Create/Overwrite Azure Advisor configuration.
[**configurations_list_by_resource_group**](ConfigurationsApi.md#configurations_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Advisor/configurations | Retrieve Azure Advisor configurations.
[**configurations_list_by_subscription**](ConfigurationsApi.md#configurations_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Advisor/configurations | Retrieve Azure Advisor configurations.


# **configurations_create_in_resource_group**
> configurations_create_in_resource_group(api_version, subscription_id, resource_group, config_contract)

Create/Overwrite Azure Advisor configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.config_data import ConfigData
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
    api_instance = openapi_client.ConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group = 'resource_group_example' # str | The name of the Azure resource group.
    config_contract = openapi_client.ConfigData() # ConfigData | The Azure Advisor configuration data structure.

    try:
        # Create/Overwrite Azure Advisor configuration.
        api_instance.configurations_create_in_resource_group(api_version, subscription_id, resource_group, config_contract)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->configurations_create_in_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group** | **str**| The name of the Azure resource group. | 
 **config_contract** | [**ConfigData**](ConfigData.md)| The Azure Advisor configuration data structure. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content. Successfully created/overwrote configuration. |  -  |
**400** | Bad Request. Client sent invalid configuration scope, properties or values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configurations_create_in_subscription**
> configurations_create_in_subscription(api_version, subscription_id, config_contract)

Create/Overwrite Azure Advisor configuration.

Create/Overwrite Azure Advisor configuration and also delete all configurations of contained resource groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.config_data import ConfigData
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
    api_instance = openapi_client.ConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    config_contract = openapi_client.ConfigData() # ConfigData | The Azure Advisor configuration data structure.

    try:
        # Create/Overwrite Azure Advisor configuration.
        api_instance.configurations_create_in_subscription(api_version, subscription_id, config_contract)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->configurations_create_in_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **config_contract** | [**ConfigData**](ConfigData.md)| The Azure Advisor configuration data structure. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content. Successfully created/overwrote configuration. |  -  |
**400** | Bad Request. Client sent invalid configuration scope, properties or values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configurations_list_by_resource_group**
> ConfigurationListResult configurations_list_by_resource_group(api_version, subscription_id, resource_group)

Retrieve Azure Advisor configurations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_list_result import ConfigurationListResult
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
    api_instance = openapi_client.ConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    resource_group = 'resource_group_example' # str | The name of the Azure resource group.

    try:
        # Retrieve Azure Advisor configurations.
        api_response = api_instance.configurations_list_by_resource_group(api_version, subscription_id, resource_group)
        print("The response of ConfigurationsApi->configurations_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->configurations_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **resource_group** | **str**| The name of the Azure resource group. | 

### Return type

[**ConfigurationListResult**](ConfigurationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully retrieved zero or more configurations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configurations_list_by_subscription**
> ConfigurationListResult configurations_list_by_subscription(api_version, subscription_id)

Retrieve Azure Advisor configurations.

Retrieve Azure Advisor configurations and also retrieve configurations of contained resource groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.configuration_list_result import ConfigurationListResult
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
    api_instance = openapi_client.ConfigurationsApi(api_client)
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.

    try:
        # Retrieve Azure Advisor configurations.
        api_response = api_instance.configurations_list_by_subscription(api_version, subscription_id)
        print("The response of ConfigurationsApi->configurations_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationsApi->configurations_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **subscription_id** | **str**| The Azure subscription ID. | 

### Return type

[**ConfigurationListResult**](ConfigurationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully retrieved zero or more configurations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

