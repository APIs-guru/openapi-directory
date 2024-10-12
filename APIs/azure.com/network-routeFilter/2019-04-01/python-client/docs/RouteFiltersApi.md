# openapi_client.RouteFiltersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**route_filters_create_or_update**](RouteFiltersApi.md#route_filters_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName} | 
[**route_filters_delete**](RouteFiltersApi.md#route_filters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName} | 
[**route_filters_get**](RouteFiltersApi.md#route_filters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName} | 
[**route_filters_list**](RouteFiltersApi.md#route_filters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/routeFilters | 
[**route_filters_list_by_resource_group**](RouteFiltersApi.md#route_filters_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters | 
[**route_filters_update**](RouteFiltersApi.md#route_filters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName} | 


# **route_filters_create_or_update**
> RouteFilter route_filters_create_or_update(resource_group_name, route_filter_name, api_version, subscription_id, route_filter_parameters)



Creates or updates a route filter in a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter import RouteFilter
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
    api_instance = openapi_client.RouteFiltersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    route_filter_parameters = openapi_client.RouteFilter() # RouteFilter | Parameters supplied to the create or update route filter operation.

    try:
        api_response = api_instance.route_filters_create_or_update(resource_group_name, route_filter_name, api_version, subscription_id, route_filter_parameters)
        print("The response of RouteFiltersApi->route_filters_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFiltersApi->route_filters_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **route_filter_parameters** | [**RouteFilter**](RouteFilter.md)| Parameters supplied to the create or update route filter operation. | 

### Return type

[**RouteFilter**](RouteFilter.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting Route Filter resource. |  -  |
**201** | Create successful. The operation returns the resulting Route Filter resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filters_delete**
> route_filters_delete(resource_group_name, route_filter_name, api_version, subscription_id)



Deletes the specified route filter.

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
    api_instance = openapi_client.RouteFiltersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.route_filters_delete(resource_group_name, route_filter_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RouteFiltersApi->route_filters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
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

# **route_filters_get**
> RouteFilter route_filters_get(resource_group_name, route_filter_name, api_version, subscription_id, expand=expand)



Gets the specified route filter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter import RouteFilter
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
    api_instance = openapi_client.RouteFiltersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced express route bgp peering resources. (optional)

    try:
        api_response = api_instance.route_filters_get(resource_group_name, route_filter_name, api_version, subscription_id, expand=expand)
        print("The response of RouteFiltersApi->route_filters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFiltersApi->route_filters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced express route bgp peering resources. | [optional] 

### Return type

[**RouteFilter**](RouteFilter.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting Route Filter resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filters_list**
> RouteFilterListResult route_filters_list(api_version, subscription_id)



Gets all route filters in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter_list_result import RouteFilterListResult
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
    api_instance = openapi_client.RouteFiltersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.route_filters_list(api_version, subscription_id)
        print("The response of RouteFiltersApi->route_filters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFiltersApi->route_filters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RouteFilterListResult**](RouteFilterListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of Route Filter resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filters_list_by_resource_group**
> RouteFilterListResult route_filters_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets all route filters in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.route_filter_list_result import RouteFilterListResult
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
    api_instance = openapi_client.RouteFiltersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.route_filters_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of RouteFiltersApi->route_filters_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFiltersApi->route_filters_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RouteFilterListResult**](RouteFilterListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of Route Filter resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **route_filters_update**
> RouteFilter route_filters_update(resource_group_name, route_filter_name, api_version, subscription_id, route_filter_parameters)



Updates a route filter in a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.patch_route_filter import PatchRouteFilter
from openapi_client.models.route_filter import RouteFilter
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
    api_instance = openapi_client.RouteFiltersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    route_filter_name = 'route_filter_name_example' # str | The name of the route filter.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    route_filter_parameters = openapi_client.PatchRouteFilter() # PatchRouteFilter | Parameters supplied to the update route filter operation.

    try:
        api_response = api_instance.route_filters_update(resource_group_name, route_filter_name, api_version, subscription_id, route_filter_parameters)
        print("The response of RouteFiltersApi->route_filters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RouteFiltersApi->route_filters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **route_filter_name** | **str**| The name of the route filter. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **route_filter_parameters** | [**PatchRouteFilter**](PatchRouteFilter.md)| Parameters supplied to the update route filter operation. | 

### Return type

[**RouteFilter**](RouteFilter.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting Route Filter resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

