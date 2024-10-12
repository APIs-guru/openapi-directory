# openapi_client.AlertsApi

All URIs are relative to *https://api.weatherbit.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alertslatlatlonlon_get**](AlertsApi.md#alertslatlatlonlon_get) | **GET** /alerts?lat&#x3D;{lat}&amp;lon&#x3D;{lon} | Returns severe weather alerts issued by meteorological agencies - Given a lat/lon.


# **alertslatlatlonlon_get**
> WeatherAlert alertslatlatlonlon_get(lat, lon, key, param_callback=param_callback)

Returns severe weather alerts issued by meteorological agencies - Given a lat/lon.

Returns severe weather alerts issued by meteorological agencies - given a lat, and a lon.

### Example


```python
import openapi_client
from openapi_client.models.weather_alert import WeatherAlert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.weatherbit.io/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.weatherbit.io/v2.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    key = 'key_example' # str | Your registered API key.
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback - Example - callback=func (optional)

    try:
        # Returns severe weather alerts issued by meteorological agencies - Given a lat/lon.
        api_response = api_instance.alertslatlatlonlon_get(lat, lon, key, param_callback=param_callback)
        print("The response of AlertsApi->alertslatlatlonlon_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->alertslatlatlonlon_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **key** | **str**| Your registered API key. | 
 **param_callback** | **str**| Wraps return in jsonp callback - Example - callback&#x3D;func | [optional] 

### Return type

[**WeatherAlert**](WeatherAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Weather Alert Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

