# openapi_client.LocalNetworkGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**local_network_gateways_create_or_update**](LocalNetworkGatewaysApi.md#local_network_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName} | 
[**local_network_gateways_delete**](LocalNetworkGatewaysApi.md#local_network_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName} | 
[**local_network_gateways_get**](LocalNetworkGatewaysApi.md#local_network_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName} | 
[**local_network_gateways_list**](LocalNetworkGatewaysApi.md#local_network_gateways_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways | 


# **local_network_gateways_create_or_update**
> LocalNetworkGateway local_network_gateways_create_or_update(resource_group_name, local_network_gateway_name, api_version, subscription_id, parameters)



Creates or updates a local network gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.local_network_gateway import LocalNetworkGateway
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
    api_instance = openapi_client.LocalNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    local_network_gateway_name = 'local_network_gateway_name_example' # str | The name of the local network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.LocalNetworkGateway() # LocalNetworkGateway | Parameters supplied to the create or update local network gateway operation.

    try:
        api_response = api_instance.local_network_gateways_create_or_update(resource_group_name, local_network_gateway_name, api_version, subscription_id, parameters)
        print("The response of LocalNetworkGatewaysApi->local_network_gateways_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocalNetworkGatewaysApi->local_network_gateways_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **local_network_gateway_name** | **str**| The name of the local network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**LocalNetworkGateway**](LocalNetworkGateway.md)| Parameters supplied to the create or update local network gateway operation. | 

### Return type

[**LocalNetworkGateway**](LocalNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting LocalNetworkGateway resource. |  -  |
**201** | Create successful. The operation returns the resulting LocalNetworkGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **local_network_gateways_delete**
> local_network_gateways_delete(resource_group_name, local_network_gateway_name, api_version, subscription_id)



Deletes the specified local network gateway.

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
    api_instance = openapi_client.LocalNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    local_network_gateway_name = 'local_network_gateway_name_example' # str | The name of the local network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.local_network_gateways_delete(resource_group_name, local_network_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling LocalNetworkGatewaysApi->local_network_gateways_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **local_network_gateway_name** | **str**| The name of the local network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **local_network_gateways_get**
> LocalNetworkGateway local_network_gateways_get(resource_group_name, local_network_gateway_name, api_version, subscription_id)



Gets the specified local network gateway in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.local_network_gateway import LocalNetworkGateway
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
    api_instance = openapi_client.LocalNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    local_network_gateway_name = 'local_network_gateway_name_example' # str | The name of the local network gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.local_network_gateways_get(resource_group_name, local_network_gateway_name, api_version, subscription_id)
        print("The response of LocalNetworkGatewaysApi->local_network_gateways_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocalNetworkGatewaysApi->local_network_gateways_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **local_network_gateway_name** | **str**| The name of the local network gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**LocalNetworkGateway**](LocalNetworkGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting LocalNetworkGateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **local_network_gateways_list**
> LocalNetworkGatewayListResult local_network_gateways_list(resource_group_name, api_version, subscription_id)



Gets all the local network gateways in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.local_network_gateway_list_result import LocalNetworkGatewayListResult
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
    api_instance = openapi_client.LocalNetworkGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.local_network_gateways_list(resource_group_name, api_version, subscription_id)
        print("The response of LocalNetworkGatewaysApi->local_network_gateways_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocalNetworkGatewaysApi->local_network_gateways_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**LocalNetworkGatewayListResult**](LocalNetworkGatewayListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of LocalNetworkGateway resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

