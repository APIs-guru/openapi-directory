# openapi_client.TrafficCountAPIApi

All URIs are relative to *https://idealspot-geodata.p.rapidapi.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_nearest_road_segments**](TrafficCountAPIApi.md#fetch_nearest_road_segments) | **GET** /traffic/roads/nearest/{latitude}/{longitude} | Fetch Nearest Road Segments
[**vehicle_traffic_countsfor_road_segment**](TrafficCountAPIApi.md#vehicle_traffic_countsfor_road_segment) | **GET** /traffic/counts/{segment_id} | Vehicle Traffic Counts for Road Segment


# **fetch_nearest_road_segments**
> SearchRoadSegments fetch_nearest_road_segments(n, latitude, longitude, x_rapid_api_key, x_rapid_api_host)

Fetch Nearest Road Segments

For given latitude and longitude, find `n` nearest road segments

### Example


```python
import openapi_client
from openapi_client.models.search_road_segments import SearchRoadSegments
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrafficCountAPIApi(api_client)
    n = 56 # int | Number of road segments to return (between 1 and 20)
    latitude = 3.4 # float | (Required) Search coordinate latitude
    longitude = 3.4 # float | (Required) Search coordinate longitude
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Fetch Nearest Road Segments
        api_response = api_instance.fetch_nearest_road_segments(n, latitude, longitude, x_rapid_api_key, x_rapid_api_host)
        print("The response of TrafficCountAPIApi->fetch_nearest_road_segments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficCountAPIApi->fetch_nearest_road_segments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **n** | **int**| Number of road segments to return (between 1 and 20) | 
 **latitude** | **float**| (Required) Search coordinate latitude | 
 **longitude** | **float**| (Required) Search coordinate longitude | 
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**SearchRoadSegments**](SearchRoadSegments.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vehicle_traffic_countsfor_road_segment**
> VehicleTrafficCountsforRoadSegment vehicle_traffic_countsfor_road_segment(segment_id, x_rapid_api_key, x_rapid_api_host)

Vehicle Traffic Counts for Road Segment

Time of day, day of week, and side of street vehicle traffic counts.

### Example


```python
import openapi_client
from openapi_client.models.vehicle_traffic_countsfor_road_segment import VehicleTrafficCountsforRoadSegment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://idealspot-geodata.p.rapidapi.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://idealspot-geodata.p.rapidapi.com/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrafficCountAPIApi(api_client)
    segment_id = 56 # int | (Required) Road segment ID. Fetched from Search Road Segments
    x_rapid_api_key = 'x_rapid_api_key_example' # str | (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata
    x_rapid_api_host = 'x_rapid_api_host_example' # str | 

    try:
        # Vehicle Traffic Counts for Road Segment
        api_response = api_instance.vehicle_traffic_countsfor_road_segment(segment_id, x_rapid_api_key, x_rapid_api_host)
        print("The response of TrafficCountAPIApi->vehicle_traffic_countsfor_road_segment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrafficCountAPIApi->vehicle_traffic_countsfor_road_segment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment_id** | **int**| (Required) Road segment ID. Fetched from Search Road Segments | 
 **x_rapid_api_key** | **str**| (Required) Rapid API Key. See https://rapidapi.com/idealspot-inc-idealspot-inc-default/api/idealspot-geodata | 
 **x_rapid_api_host** | **str**|  | 

### Return type

[**VehicleTrafficCountsforRoadSegment**](VehicleTrafficCountsforRoadSegment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * Connection -  <br>  * Content-Encoding -  <br>  * Content-Length -  <br>  * Date -  <br>  * Server -  <br>  * Vary -  <br>  * Via -  <br>  * X-RapidAPI-Region -  <br>  * X-RapidAPI-Version -  <br>  * access-control-allow-credentials -  <br>  * access-control-allow-origin -  <br>  * access-control-expose-headers -  <br>  * cache-control -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

