# openapi_client.WeatherForecastApi

All URIs are relative to *https://weather.visualcrossing.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**visual_crossing_web_services_rest_services_weatherdata_forecast_get**](WeatherForecastApi.md#visual_crossing_web_services_rest_services_weatherdata_forecast_get) | **GET** /VisualCrossingWebServices/rest/services/weatherdata/forecast | Weather Forecast API


# **visual_crossing_web_services_rest_services_weatherdata_forecast_get**
> visual_crossing_web_services_rest_services_weatherdata_forecast_get(send_as_datasource=send_as_datasource, allow_asynch=allow_asynch, short_column_names=short_column_names, locations=locations, aggregate_hours=aggregate_hours, content_type=content_type, unit_group=unit_group, key=key)

Weather Forecast API

Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.

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
    api_instance = openapi_client.WeatherForecastApi(api_client)
    send_as_datasource = false # bool |  (optional)
    allow_asynch = false # bool |  (optional)
    short_column_names = false # bool |  (optional)
    locations = 'Sterling%2C%20VA%2C%20US' # str |  (optional)
    aggregate_hours = '24' # str |  (optional)
    content_type = 'json' # str |  (optional)
    unit_group = 'us' # str |  (optional)
    key = 'INSERT_YOUR_KEY' # str |  (optional)

    try:
        # Weather Forecast API
        api_instance.visual_crossing_web_services_rest_services_weatherdata_forecast_get(send_as_datasource=send_as_datasource, allow_asynch=allow_asynch, short_column_names=short_column_names, locations=locations, aggregate_hours=aggregate_hours, content_type=content_type, unit_group=unit_group, key=key)
    except Exception as e:
        print("Exception when calling WeatherForecastApi->visual_crossing_web_services_rest_services_weatherdata_forecast_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send_as_datasource** | **bool**|  | [optional] 
 **allow_asynch** | **bool**|  | [optional] 
 **short_column_names** | **bool**|  | [optional] 
 **locations** | **str**|  | [optional] 
 **aggregate_hours** | **str**|  | [optional] 
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

