# openapi_client.TimelineWeatherAPISingleDateRequestApi

All URIs are relative to *https://weather.visualcrossing.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**visual_crossing_web_services_rest_services_timeline_location_startdate_get**](TimelineWeatherAPISingleDateRequestApi.md#visual_crossing_web_services_rest_services_timeline_location_startdate_get) | **GET** /VisualCrossingWebServices/rest/services/timeline/{location}/{startdate} | Historical and Forecast Weather API


# **visual_crossing_web_services_rest_services_timeline_location_startdate_get**
> visual_crossing_web_services_rest_services_timeline_location_startdate_get(location, startdate, key, content_type=content_type, unit_group=unit_group, include=include, lang=lang)

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
    api_instance = openapi_client.TimelineWeatherAPISingleDateRequestApi(api_client)
    location = 'London,UK' # str | 
    startdate = '2022-02-01T00:00:00.000Z' # str | 
    key = 'INSERT_YOUR_KEY' # str | 
    content_type = 'json' # str | data format of the output either json or CSV (optional)
    unit_group = 'us' # str |  (optional)
    include = 'days' # str | data to include in the output (required for CSV format - days,hours,alerts,current,events ) (optional)
    lang = 'us' # str | Language to use for weather descriptions (optional)

    try:
        # Historical and Forecast Weather API
        api_instance.visual_crossing_web_services_rest_services_timeline_location_startdate_get(location, startdate, key, content_type=content_type, unit_group=unit_group, include=include, lang=lang)
    except Exception as e:
        print("Exception when calling TimelineWeatherAPISingleDateRequestApi->visual_crossing_web_services_rest_services_timeline_location_startdate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**|  | 
 **startdate** | **str**|  | 
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

