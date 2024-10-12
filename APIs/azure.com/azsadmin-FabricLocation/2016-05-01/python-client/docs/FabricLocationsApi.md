# openapi_client.FabricLocationsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fabric_locations_get**](FabricLocationsApi.md#fabric_locations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{fabricLocation} | 
[**fabric_locations_list**](FabricLocationsApi.md#fabric_locations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations | 


# **fabric_locations_get**
> FabricLocation fabric_locations_get(subscription_id, resource_group_name, fabric_location, api_version)



Returns the requested fabric location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric_location import FabricLocation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FabricLocationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    fabric_location = 'fabric_location_example' # str | Fabric location.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.fabric_locations_get(subscription_id, resource_group_name, fabric_location, api_version)
        print("The response of FabricLocationsApi->fabric_locations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FabricLocationsApi->fabric_locations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **fabric_location** | **str**| Fabric location. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**FabricLocation**](FabricLocation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fabric_locations_list**
> FabricLocationList fabric_locations_list(subscription_id, resource_group_name, api_version, filter=filter)



Returns a list of all fabric locations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.fabric_location_list import FabricLocationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FabricLocationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.fabric_locations_list(subscription_id, resource_group_name, api_version, filter=filter)
        print("The response of FabricLocationsApi->fabric_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FabricLocationsApi->fabric_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**FabricLocationList**](FabricLocationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

