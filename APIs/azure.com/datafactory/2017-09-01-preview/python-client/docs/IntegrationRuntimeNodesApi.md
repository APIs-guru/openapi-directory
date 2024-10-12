# openapi_client.IntegrationRuntimeNodesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_runtime_nodes_delete**](IntegrationRuntimeNodesApi.md#integration_runtime_nodes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName} | 
[**integration_runtime_nodes_get_ip_address**](IntegrationRuntimeNodesApi.md#integration_runtime_nodes_get_ip_address) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}/ipAddress | 
[**integration_runtime_nodes_update**](IntegrationRuntimeNodesApi.md#integration_runtime_nodes_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName} | 


# **integration_runtime_nodes_delete**
> integration_runtime_nodes_delete(subscription_id, resource_group_name, factory_name, integration_runtime_name, node_name, api_version)



Deletes a self-hosted integration runtime node.

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
    api_instance = openapi_client.IntegrationRuntimeNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    node_name = 'node_name_example' # str | The integration runtime node name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_runtime_nodes_delete(subscription_id, resource_group_name, factory_name, integration_runtime_name, node_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationRuntimeNodesApi->integration_runtime_nodes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **node_name** | **str**| The integration runtime node name. | 
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
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtime_nodes_get_ip_address**
> IntegrationRuntimeNodesGetIpAddress200Response integration_runtime_nodes_get_ip_address(subscription_id, resource_group_name, factory_name, integration_runtime_name, node_name, api_version)



Get the IP address of self-hosted integration runtime node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_nodes_get_ip_address200_response import IntegrationRuntimeNodesGetIpAddress200Response
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
    api_instance = openapi_client.IntegrationRuntimeNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    node_name = 'node_name_example' # str | The integration runtime node name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtime_nodes_get_ip_address(subscription_id, resource_group_name, factory_name, integration_runtime_name, node_name, api_version)
        print("The response of IntegrationRuntimeNodesApi->integration_runtime_nodes_get_ip_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimeNodesApi->integration_runtime_nodes_get_ip_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **node_name** | **str**| The integration runtime node name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationRuntimeNodesGetIpAddress200Response**](IntegrationRuntimeNodesGetIpAddress200Response.md)

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

# **integration_runtime_nodes_update**
> IntegrationRuntimeNodesUpdate200Response integration_runtime_nodes_update(subscription_id, resource_group_name, factory_name, integration_runtime_name, node_name, api_version, update_integration_runtime_node_request)



Updates a self-hosted integration runtime node.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_runtime_nodes_update200_response import IntegrationRuntimeNodesUpdate200Response
from openapi_client.models.update_integration_runtime_node_request import UpdateIntegrationRuntimeNodeRequest
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
    api_instance = openapi_client.IntegrationRuntimeNodesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    node_name = 'node_name_example' # str | The integration runtime node name.
    api_version = 'api_version_example' # str | The API version.
    update_integration_runtime_node_request = openapi_client.UpdateIntegrationRuntimeNodeRequest() # UpdateIntegrationRuntimeNodeRequest | The parameters for updating an integration runtime node.

    try:
        api_response = api_instance.integration_runtime_nodes_update(subscription_id, resource_group_name, factory_name, integration_runtime_name, node_name, api_version, update_integration_runtime_node_request)
        print("The response of IntegrationRuntimeNodesApi->integration_runtime_nodes_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimeNodesApi->integration_runtime_nodes_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **node_name** | **str**| The integration runtime node name. | 
 **api_version** | **str**| The API version. | 
 **update_integration_runtime_node_request** | [**UpdateIntegrationRuntimeNodeRequest**](UpdateIntegrationRuntimeNodeRequest.md)| The parameters for updating an integration runtime node. | 

### Return type

[**IntegrationRuntimeNodesUpdate200Response**](IntegrationRuntimeNodesUpdate200Response.md)

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

