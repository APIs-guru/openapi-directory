# openapi_client.ForecastApi

All URIs are relative to *https://api.stormglass.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_forecast**](ForecastApi.md#get_forecast) | **GET** /forecast | Get hourly forecasts by coordinates


# **get_forecast**
> Forecast get_forecast(lat, lng)

Get hourly forecasts by coordinates

Get forecast info for the given coordinates. For every hour and property, you will get a list of weather sources and their values.

### Example

* Api Key Authentication (authenticationToken):

```python
import openapi_client
from openapi_client.models.forecast import Forecast
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stormglass.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.stormglass.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: authenticationToken
configuration.api_key['authenticationToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['authenticationToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ForecastApi(api_client)
    lat = 3.4 # float | The latitude for a location. Valid input is a number between -90 and 90.
    lng = 3.4 # float | The longitude for a location. Valid input is a number between -180 and 180.

    try:
        # Get hourly forecasts by coordinates
        api_response = api_instance.get_forecast(lat, lng)
        print("The response of ForecastApi->get_forecast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ForecastApi->get_forecast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| The latitude for a location. Valid input is a number between -90 and 90. | 
 **lng** | **float**| The longitude for a location. Valid input is a number between -180 and 180. | 

### Return type

[**Forecast**](Forecast.md)

### Authorization

[authenticationToken](../README.md#authenticationToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**403** | Unauthorized or API key is invalid |  -  |
**422** | Invalid or missing coordinates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

