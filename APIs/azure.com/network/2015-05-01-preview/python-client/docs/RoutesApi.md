# openapi_client.RoutesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**routes_create_or_update**](RoutesApi.md#routes_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName} | 
[**routes_delete**](RoutesApi.md#routes_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName} | 
[**routes_get**](RoutesApi.md#routes_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes/{routeName} | 
[**routes_list**](RoutesApi.md#routes_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeTables/{routeTableName}/routes | 


# **routes_create_or_update**
> Route routes_create_or_update(resource_group_name, route_table_name, route_name, api_version, subscription_id, route_parameters)



The Put route operation creates/updates a route in the specified route table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route import Route
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
    api_instance = openapi_client.RoutesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_table_name = 'route_table_name_example' # str | The name of the route table.
    route_name = 'route_name_example' # str | The name of the route.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    route_parameters = openapi_client.Route() # Route | Parameters supplied to the create/update route operation

    try:
        api_response = api_instance.routes_create_or_update(resource_group_name, route_table_name, route_name, api_version, subscription_id, route_parameters)
        print("The response of RoutesApi->routes_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutesApi->routes_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_table_name** | **str**| The name of the route table. | 
 **route_name** | **str**| The name of the route. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **route_parameters** | [**Route**](Route.md)| Parameters supplied to the create/update route operation | 

### Return type

[**Route**](Route.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routes_delete**
> routes_delete(resource_group_name, route_table_name, route_name, api_version, subscription_id)



The delete route operation deletes the specified route from a route table.

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
    api_instance = openapi_client.RoutesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_table_name = 'route_table_name_example' # str | The name of the route table.
    route_name = 'route_name_example' # str | The name of the route.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.routes_delete(resource_group_name, route_table_name, route_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RoutesApi->routes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_table_name** | **str**| The name of the route table. | 
 **route_name** | **str**| The name of the route. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routes_get**
> Route routes_get(resource_group_name, route_table_name, route_name, api_version, subscription_id)



The Get route operation retrieves information about the specified route from the route table.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route import Route
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
    api_instance = openapi_client.RoutesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_table_name = 'route_table_name_example' # str | The name of the route table.
    route_name = 'route_name_example' # str | The name of the route.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.routes_get(resource_group_name, route_table_name, route_name, api_version, subscription_id)
        print("The response of RoutesApi->routes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutesApi->routes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_table_name** | **str**| The name of the route table. | 
 **route_name** | **str**| The name of the route. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Route**](Route.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routes_list**
> RouteListResult routes_list(resource_group_name, route_table_name, api_version, subscription_id)



The List network security rule operation retrieves all the routes in a route table.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_list_result import RouteListResult
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
    api_instance = openapi_client.RoutesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_table_name = 'route_table_name_example' # str | The name of the route table.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.routes_list(resource_group_name, route_table_name, api_version, subscription_id)
        print("The response of RoutesApi->routes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RoutesApi->routes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_table_name** | **str**| The name of the route table. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RouteListResult**](RouteListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

