# openapi_client.IntegrationRuntimesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_runtimes_create_or_update**](IntegrationRuntimesApi.md#integration_runtimes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName} | 
[**integration_runtimes_delete**](IntegrationRuntimesApi.md#integration_runtimes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName} | 
[**integration_runtimes_get**](IntegrationRuntimesApi.md#integration_runtimes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName} | 
[**integration_runtimes_get_connection_info**](IntegrationRuntimesApi.md#integration_runtimes_get_connection_info) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getConnectionInfo | 
[**integration_runtimes_get_monitoring_data**](IntegrationRuntimesApi.md#integration_runtimes_get_monitoring_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/monitoringData | 
[**integration_runtimes_get_status**](IntegrationRuntimesApi.md#integration_runtimes_get_status) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getStatus | 
[**integration_runtimes_list_auth_keys**](IntegrationRuntimesApi.md#integration_runtimes_list_auth_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/listAuthKeys | 
[**integration_runtimes_list_by_factory**](IntegrationRuntimesApi.md#integration_runtimes_list_by_factory) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes | 
[**integration_runtimes_regenerate_auth_key**](IntegrationRuntimesApi.md#integration_runtimes_regenerate_auth_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/regenerateAuthKey | 
[**integration_runtimes_remove_node**](IntegrationRuntimesApi.md#integration_runtimes_remove_node) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/removeNode | 
[**integration_runtimes_start**](IntegrationRuntimesApi.md#integration_runtimes_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/start | 
[**integration_runtimes_stop**](IntegrationRuntimesApi.md#integration_runtimes_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/stop | 
[**integration_runtimes_sync_credentials**](IntegrationRuntimesApi.md#integration_runtimes_sync_credentials) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/syncCredentials | 
[**integration_runtimes_update**](IntegrationRuntimesApi.md#integration_runtimes_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName} | 
[**integration_runtimes_upgrade**](IntegrationRuntimesApi.md#integration_runtimes_upgrade) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/upgrade | 


# **integration_runtimes_create_or_update**
> IntegrationRuntimeResource integration_runtimes_create_or_update(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, integration_runtime, if_match=if_match)



Creates or updates an integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_resource import IntegrationRuntimeResource
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.
    integration_runtime = openapi_client.IntegrationRuntimeResource() # IntegrationRuntimeResource | Integration runtime resource definition.
    if_match = 'if_match_example' # str | ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. (optional)

    try:
        api_response = api_instance.integration_runtimes_create_or_update(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, integration_runtime, if_match=if_match)
        print("The response of IntegrationRuntimesApi->integration_runtimes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 
 **integration_runtime** | [**IntegrationRuntimeResource**](IntegrationRuntimeResource.md)| Integration runtime resource definition. | 
 **if_match** | **str**| ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. | [optional] 

### Return type

[**IntegrationRuntimeResource**](IntegrationRuntimeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from PUT integration runtime operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_delete**
> integration_runtimes_delete(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Deletes an integration runtime.

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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_runtimes_delete(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**204** | No Content. |  -  |
**0** | An error response received from DELETE integration runtime operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_get**
> IntegrationRuntimeResource integration_runtimes_get(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Gets an integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_resource import IntegrationRuntimeResource
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_get(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimeResource**](IntegrationRuntimeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from GET integration runtime operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_get_connection_info**
> IntegrationRuntimesGetConnectionInfo200Response integration_runtimes_get_connection_info(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtimes_get_connection_info200_response import IntegrationRuntimesGetConnectionInfo200Response
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_get_connection_info(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_get_connection_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_get_connection_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimesGetConnectionInfo200Response**](IntegrationRuntimesGetConnectionInfo200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_get_monitoring_data**
> IntegrationRuntimesGetMonitoringData200Response integration_runtimes_get_monitoring_data(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtimes_get_monitoring_data200_response import IntegrationRuntimesGetMonitoringData200Response
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_get_monitoring_data(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_get_monitoring_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_get_monitoring_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimesGetMonitoringData200Response**](IntegrationRuntimesGetMonitoringData200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_get_status**
> IntegrationRuntimeStatusResponse integration_runtimes_get_status(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Gets detailed status information for an integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_status_response import IntegrationRuntimeStatusResponse
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_get_status(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimeStatusResponse**](IntegrationRuntimeStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_list_auth_keys**
> IntegrationRuntimesListAuthKeys200Response integration_runtimes_list_auth_keys(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Retrieves the authentication keys for an integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtimes_list_auth_keys200_response import IntegrationRuntimesListAuthKeys200Response
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_list_auth_keys(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_list_auth_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_list_auth_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimesListAuthKeys200Response**](IntegrationRuntimesListAuthKeys200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_list_by_factory**
> IntegrationRuntimeListResponse integration_runtimes_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)



Lists integration runtimes.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_list_response import IntegrationRuntimeListResponse
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_list_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_list_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimeListResponse**](IntegrationRuntimeListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_regenerate_auth_key**
> IntegrationRuntimesListAuthKeys200Response integration_runtimes_regenerate_auth_key(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, regenerate_key_parameters)



Regenerates the authentication key for an integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtimes_list_auth_keys200_response import IntegrationRuntimesListAuthKeys200Response
from openapi_client.models.integration_runtimes_regenerate_auth_key_request import IntegrationRuntimesRegenerateAuthKeyRequest
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.
    regenerate_key_parameters = openapi_client.IntegrationRuntimesRegenerateAuthKeyRequest() # IntegrationRuntimesRegenerateAuthKeyRequest | The parameters for regenerating integration runtime authentication key.

    try:
        api_response = api_instance.integration_runtimes_regenerate_auth_key(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, regenerate_key_parameters)
        print("The response of IntegrationRuntimesApi->integration_runtimes_regenerate_auth_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_regenerate_auth_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 
 **regenerate_key_parameters** | [**IntegrationRuntimesRegenerateAuthKeyRequest**](IntegrationRuntimesRegenerateAuthKeyRequest.md)| The parameters for regenerating integration runtime authentication key. | 

### Return type

[**IntegrationRuntimesListAuthKeys200Response**](IntegrationRuntimesListAuthKeys200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_remove_node**
> integration_runtimes_remove_node(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, remove_node_parameters)



Remove a node from integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtimes_remove_node_request import IntegrationRuntimesRemoveNodeRequest
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.
    remove_node_parameters = openapi_client.IntegrationRuntimesRemoveNodeRequest() # IntegrationRuntimesRemoveNodeRequest | The name of the node to be removed from an integration runtime.

    try:
        api_instance.integration_runtimes_remove_node(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, remove_node_parameters)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_remove_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 
 **remove_node_parameters** | [**IntegrationRuntimesRemoveNodeRequest**](IntegrationRuntimesRemoveNodeRequest.md)| The name of the node to be removed from an integration runtime. | 

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
**200** | OK. |  -  |
**204** | No Content. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_start**
> IntegrationRuntimeStatusResponse integration_runtimes_start(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Starts a ManagedReserved type integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_status_response import IntegrationRuntimeStatusResponse
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtimes_start(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimesApi->integration_runtimes_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimeStatusResponse**](IntegrationRuntimeStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_stop**
> integration_runtimes_stop(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Stops a ManagedReserved type integration runtime.

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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_runtimes_stop(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_sync_credentials**
> integration_runtimes_sync_credentials(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly.

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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_runtimes_sync_credentials(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_sync_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_update**
> IntegrationRuntimeStatusResponse integration_runtimes_update(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, update_integration_runtime_request)



Updates an integration runtime.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_status_response import IntegrationRuntimeStatusResponse
from openapi_client.models.update_integration_runtime_request import UpdateIntegrationRuntimeRequest
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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.
    update_integration_runtime_request = openapi_client.UpdateIntegrationRuntimeRequest() # UpdateIntegrationRuntimeRequest | The parameters for updating an integration runtime.

    try:
        api_response = api_instance.integration_runtimes_update(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, update_integration_runtime_request)
        print("The response of IntegrationRuntimesApi->integration_runtimes_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 
 **update_integration_runtime_request** | [**UpdateIntegrationRuntimeRequest**](UpdateIntegrationRuntimeRequest.md)| The parameters for updating an integration runtime. | 

### Return type

[**IntegrationRuntimeStatusResponse**](IntegrationRuntimeStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtimes_upgrade**
> integration_runtimes_upgrade(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Upgrade self-hosted integration runtime to latest version if availability.

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
    api_instance = openapi_client.IntegrationRuntimesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_runtimes_upgrade(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationRuntimesApi->integration_runtimes_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

