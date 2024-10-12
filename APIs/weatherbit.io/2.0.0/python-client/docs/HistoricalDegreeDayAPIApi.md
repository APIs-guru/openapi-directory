# openapi_client.HistoricalDegreeDayAPIApi

All URIs are relative to *https://api.weatherbit.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**history_energylatlatlonlon_get**](HistoricalDegreeDayAPIApi.md#history_energylatlatlonlon_get) | **GET** /history/energy?lat&#x3D;{lat}&amp;lon&#x3D;{lon} | Returns Energy API response  - Given a single lat/lon. 


# **history_energylatlatlonlon_get**
> EnergyObsGroup history_energylatlatlonlon_get(lat, lon, start_date, end_date, key, tp=tp, threshold=threshold, units=units, param_callback=param_callback)

Returns Energy API response  - Given a single lat/lon. 

Returns aggregate energy specific historical weather fields, over a specified time period.

### Example


```python
import openapi_client
from openapi_client.models.energy_obs_group import EnergyObsGroup
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
    api_instance = openapi_client.HistoricalDegreeDayAPIApi(api_client)
    lat = 3.4 # float | Latitude component of location.
    lon = 3.4 # float | Longitude component of location.
    start_date = 'start_date_example' # str | Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    end_date = 'end_date_example' # str | End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
    key = 'key_example' # str | Your registered API key.
    tp = 'tp_example' # str | Time period to aggregate by (daily, monthly) (optional)
    threshold = 3.4 # float | Temperature threshold to use to calculate degree days (default 18 C)  (optional)
    units = 'units_example' # str | Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a> (optional)
    param_callback = 'param_callback_example' # str | Wraps return in jsonp callback. Example: callback=func (optional)

    try:
        # Returns Energy API response  - Given a single lat/lon. 
        api_response = api_instance.history_energylatlatlonlon_get(lat, lon, start_date, end_date, key, tp=tp, threshold=threshold, units=units, param_callback=param_callback)
        print("The response of HistoricalDegreeDayAPIApi->history_energylatlatlonlon_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HistoricalDegreeDayAPIApi->history_energylatlatlonlon_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| Latitude component of location. | 
 **lon** | **float**| Longitude component of location. | 
 **start_date** | **str**| Start Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **end_date** | **str**| End Date (YYYY-MM-DD or YYYY-MM-DD:HH). | 
 **key** | **str**| Your registered API key. | 
 **tp** | **str**| Time period to aggregate by (daily, monthly) | [optional] 
 **threshold** | **float**| Temperature threshold to use to calculate degree days (default 18 C)  | [optional] 
 **units** | **str**| Convert to units. Default Metric See &lt;a target&#x3D;&#39;blank&#39; href&#x3D;&#39;/api/requests&#39;&gt;units field description&lt;/a&gt; | [optional] 
 **param_callback** | **str**| Wraps return in jsonp callback. Example: callback&#x3D;func | [optional] 

### Return type

[**EnergyObsGroup**](EnergyObsGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Energy Data Object. |  -  |
**0** | No Data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

