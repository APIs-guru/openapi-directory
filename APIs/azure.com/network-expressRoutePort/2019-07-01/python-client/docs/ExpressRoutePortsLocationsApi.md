# openapi_client.ExpressRoutePortsLocationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_ports_locations_get**](ExpressRoutePortsLocationsApi.md#express_route_ports_locations_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePortsLocations/{locationName} | 
[**express_route_ports_locations_list**](ExpressRoutePortsLocationsApi.md#express_route_ports_locations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePortsLocations | 


# **express_route_ports_locations_get**
> ExpressRoutePortsLocation express_route_ports_locations_get(subscription_id, api_version, location_name)



Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths available at said peering location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_ports_location import ExpressRoutePortsLocation
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
    api_instance = openapi_client.ExpressRoutePortsLocationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    location_name = 'location_name_example' # str | Name of the requested ExpressRoutePort peering location.

    try:
        api_response = api_instance.express_route_ports_locations_get(subscription_id, api_version, location_name)
        print("The response of ExpressRoutePortsLocationsApi->express_route_ports_locations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsLocationsApi->express_route_ports_locations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **location_name** | **str**| Name of the requested ExpressRoutePort peering location. | 

### Return type

[**ExpressRoutePortsLocation**](ExpressRoutePortsLocation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the requested ExpressRoutePort peering location. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_ports_locations_list**
> ExpressRoutePortsLocationListResult express_route_ports_locations_list(subscription_id, api_version)



Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each location. Available bandwidths can only be obtained when retrieving a specific peering location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_ports_location_list_result import ExpressRoutePortsLocationListResult
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
    api_instance = openapi_client.ExpressRoutePortsLocationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.express_route_ports_locations_list(subscription_id, api_version)
        print("The response of ExpressRoutePortsLocationsApi->express_route_ports_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRoutePortsLocationsApi->express_route_ports_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**ExpressRoutePortsLocationListResult**](ExpressRoutePortsLocationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the list of all ExpressRoutePort peering locations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

