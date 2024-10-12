# openapi_client.ExpressRouteGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_gateways_create_or_update**](ExpressRouteGatewaysApi.md#express_route_gateways_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName} | 
[**express_route_gateways_delete**](ExpressRouteGatewaysApi.md#express_route_gateways_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName} | 
[**express_route_gateways_get**](ExpressRouteGatewaysApi.md#express_route_gateways_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName} | 
[**express_route_gateways_list_by_resource_group**](ExpressRouteGatewaysApi.md#express_route_gateways_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways | 
[**express_route_gateways_list_by_subscription**](ExpressRouteGatewaysApi.md#express_route_gateways_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteGateways | 


# **express_route_gateways_create_or_update**
> ExpressRouteGateway express_route_gateways_create_or_update(resource_group_name, express_route_gateway_name, api_version, subscription_id, put_express_route_gateway_parameters)



Creates or updates a ExpressRoute gateway in a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_gateway import ExpressRouteGateway
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
    api_instance = openapi_client.ExpressRouteGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    put_express_route_gateway_parameters = openapi_client.ExpressRouteGateway() # ExpressRouteGateway | Parameters required in an ExpressRoute gateway PUT operation.

    try:
        api_response = api_instance.express_route_gateways_create_or_update(resource_group_name, express_route_gateway_name, api_version, subscription_id, put_express_route_gateway_parameters)
        print("The response of ExpressRouteGatewaysApi->express_route_gateways_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteGatewaysApi->express_route_gateways_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **put_express_route_gateway_parameters** | [**ExpressRouteGateway**](ExpressRouteGateway.md)| Parameters required in an ExpressRoute gateway PUT operation. | 

### Return type

[**ExpressRouteGateway**](ExpressRouteGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting ExpressRoute gateway resource. |  -  |
**201** | Create successful. The operation returns the resulting ExpressRoute gateway resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_gateways_delete**
> express_route_gateways_delete(resource_group_name, express_route_gateway_name, api_version, subscription_id)



Deletes the specified ExpressRoute gateway in a resource group. An ExpressRoute gateway resource can only be deleted when there are no connection subresources.

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
    api_instance = openapi_client.ExpressRouteGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.express_route_gateways_delete(resource_group_name, express_route_gateway_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ExpressRouteGatewaysApi->express_route_gateways_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
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

# **express_route_gateways_get**
> ExpressRouteGateway express_route_gateways_get(resource_group_name, express_route_gateway_name, api_version, subscription_id)



Fetches the details of a ExpressRoute gateway in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_gateway import ExpressRouteGateway
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
    api_instance = openapi_client.ExpressRouteGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_gateway_name = 'express_route_gateway_name_example' # str | The name of the ExpressRoute gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_gateways_get(resource_group_name, express_route_gateway_name, api_version, subscription_id)
        print("The response of ExpressRouteGatewaysApi->express_route_gateways_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteGatewaysApi->express_route_gateways_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_gateway_name** | **str**| The name of the ExpressRoute gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteGateway**](ExpressRouteGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation succeeded. The operation returns the ExpressRoute gateway. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_gateways_list_by_resource_group**
> ExpressRouteGatewayList express_route_gateways_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists ExpressRoute gateways in a given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_gateway_list import ExpressRouteGatewayList
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
    api_instance = openapi_client.ExpressRouteGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_gateways_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ExpressRouteGatewaysApi->express_route_gateways_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteGatewaysApi->express_route_gateways_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteGatewayList**](ExpressRouteGatewayList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_gateways_list_by_subscription**
> ExpressRouteGatewayList express_route_gateways_list_by_subscription(api_version, subscription_id)



Lists ExpressRoute gateways under a given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_gateway_list import ExpressRouteGatewayList
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
    api_instance = openapi_client.ExpressRouteGatewaysApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.express_route_gateways_list_by_subscription(api_version, subscription_id)
        print("The response of ExpressRouteGatewaysApi->express_route_gateways_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteGatewaysApi->express_route_gateways_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ExpressRouteGatewayList**](ExpressRouteGatewayList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

