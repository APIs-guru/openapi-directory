# openapi_client.HeatMapsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**heat_map_get**](HeatMapsApi.md#heat_map_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficmanagerprofiles/{profileName}/heatMaps/{heatMapType} | 


# **heat_map_get**
> HeatMapModel heat_map_get(subscription_id, resource_group_name, profile_name, heat_map_type, api_version, top_left=top_left, bot_right=bot_right)



Gets latest heatmap for Traffic Manager profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.heat_map_model import HeatMapModel
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
    api_instance = openapi_client.HeatMapsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing the Traffic Manager endpoint.
    profile_name = 'profile_name_example' # str | The name of the Traffic Manager profile.
    heat_map_type = 'heat_map_type_example' # str | The type of HeatMap for the Traffic Manager profile.
    api_version = 'api_version_example' # str | Client Api Version.
    top_left = [3.4] # List[float] | The top left latitude,longitude pair of the rectangular viewport to query for. (optional)
    bot_right = [3.4] # List[float] | The bottom right latitude,longitude pair of the rectangular viewport to query for. (optional)

    try:
        api_response = api_instance.heat_map_get(subscription_id, resource_group_name, profile_name, heat_map_type, api_version, top_left=top_left, bot_right=bot_right)
        print("The response of HeatMapsApi->heat_map_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HeatMapsApi->heat_map_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group containing the Traffic Manager endpoint. | 
 **profile_name** | **str**| The name of the Traffic Manager profile. | 
 **heat_map_type** | **str**| The type of HeatMap for the Traffic Manager profile. | 
 **api_version** | **str**| Client Api Version. | 
 **top_left** | [**List[float]**](float.md)| The top left latitude,longitude pair of the rectangular viewport to query for. | [optional] 
 **bot_right** | [**List[float]**](float.md)| The bottom right latitude,longitude pair of the rectangular viewport to query for. | [optional] 

### Return type

[**HeatMapModel**](HeatMapModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Traffic Manager heatmap. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

