# openapi_client.HistoricalWeatherApi

All URIs are relative to *https://weather.visualcrossing.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**visual_crossing_web_services_rest_services_weatherdata_history_get**](HistoricalWeatherApi.md#visual_crossing_web_services_rest_services_weatherdata_history_get) | **GET** /VisualCrossingWebServices/rest/services/weatherdata/history | Retrieves hourly or daily historical weather records.


# **visual_crossing_web_services_rest_services_weatherdata_history_get**
> visual_crossing_web_services_rest_services_weatherdata_history_get(max_distance=max_distance, short_column_names=short_column_names, end_date_time=end_date_time, aggregate_hours=aggregate_hours, collect_station_contributions=collect_station_contributions, start_date_time=start_date_time, max_stations=max_stations, allow_asynch=allow_asynch, locations=locations, include_normals=include_normals, content_type=content_type, unit_group=unit_group, key=key)

Retrieves hourly or daily historical weather records.

The weather history data is suitable for retrieving hourly or daily historical weather records.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://weather.visualcrossing.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://weather.visualcrossing.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HistoricalWeatherApi(api_client)
    max_distance = '-1' # str |  (optional)
    short_column_names = false # bool |  (optional)
    end_date_time = '2020-02-04T00%3A00%3A00' # str |  (optional)
    aggregate_hours = '24' # str |  (optional)
    collect_station_contributions = false # bool |  (optional)
    start_date_time = '2020-01-28T00%3A00%3A00' # str |  (optional)
    max_stations = '-1' # str |  (optional)
    allow_asynch = false # bool |  (optional)
    locations = 'Sterling%2C%20VA%2C%20US' # str |  (optional)
    include_normals = false # bool |  (optional)
    content_type = 'json' # str |  (optional)
    unit_group = 'us' # str |  (optional)
    key = 'INSERT_YOUR_KEY' # str |  (optional)

    try:
        # Retrieves hourly or daily historical weather records.
        api_instance.visual_crossing_web_services_rest_services_weatherdata_history_get(max_distance=max_distance, short_column_names=short_column_names, end_date_time=end_date_time, aggregate_hours=aggregate_hours, collect_station_contributions=collect_station_contributions, start_date_time=start_date_time, max_stations=max_stations, allow_asynch=allow_asynch, locations=locations, include_normals=include_normals, content_type=content_type, unit_group=unit_group, key=key)
    except Exception as e:
        print("Exception when calling HistoricalWeatherApi->visual_crossing_web_services_rest_services_weatherdata_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **max_distance** | **str**|  | [optional] 
 **short_column_names** | **bool**|  | [optional] 
 **end_date_time** | **str**|  | [optional] 
 **aggregate_hours** | **str**|  | [optional] 
 **collect_station_contributions** | **bool**|  | [optional] 
 **start_date_time** | **str**|  | [optional] 
 **max_stations** | **str**|  | [optional] 
 **allow_asynch** | **bool**|  | [optional] 
 **locations** | **str**|  | [optional] 
 **include_normals** | **bool**|  | [optional] 
 **content_type** | **str**|  | [optional] 
 **unit_group** | **str**|  | [optional] 
 **key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Auto generated using Swagger Inspector |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

