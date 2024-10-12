# openapi_client.TimelineWeatherAPI15DayForecastRequestApi

All URIs are relative to *https://weather.visualcrossing.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**visual_crossing_web_services_rest_services_timeline_location_get**](TimelineWeatherAPI15DayForecastRequestApi.md#visual_crossing_web_services_rest_services_timeline_location_get) | **GET** /VisualCrossingWebServices/rest/services/timeline/{location} | Historical and Forecast Weather API


# **visual_crossing_web_services_rest_services_timeline_location_get**
> visual_crossing_web_services_rest_services_timeline_location_get(location, key, content_type=content_type, unit_group=unit_group, include=include, lang=lang)

Historical and Forecast Weather API

Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.

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
    api_instance = openapi_client.TimelineWeatherAPI15DayForecastRequestApi(api_client)
    location = 'London,UK' # str | Locaton of interest as an address, partial address or decimal latitude,longtude value
    key = 'INSERT_YOUR_KEY' # str | 
    content_type = 'json' # str | data format of the output either json or CSV (optional)
    unit_group = 'us' # str |  (optional)
    include = 'days' # str | data to include in the output (required for CSV format - days,hours,alerts,current,events ) (optional)
    lang = 'us' # str | Language to use for weather descriptions (optional)

    try:
        # Historical and Forecast Weather API
        api_instance.visual_crossing_web_services_rest_services_timeline_location_get(location, key, content_type=content_type, unit_group=unit_group, include=include, lang=lang)
    except Exception as e:
        print("Exception when calling TimelineWeatherAPI15DayForecastRequestApi->visual_crossing_web_services_rest_services_timeline_location_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Locaton of interest as an address, partial address or decimal latitude,longtude value | 
 **key** | **str**|  | 
 **content_type** | **str**| data format of the output either json or CSV | [optional] 
 **unit_group** | **str**|  | [optional] 
 **include** | **str**| data to include in the output (required for CSV format - days,hours,alerts,current,events ) | [optional] 
 **lang** | **str**| Language to use for weather descriptions | [optional] 

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

