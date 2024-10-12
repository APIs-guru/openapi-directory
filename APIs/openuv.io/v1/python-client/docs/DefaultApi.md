# openapi_client.DefaultApi

All URIs are relative to *https://api.openuv.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forecast_get**](DefaultApi.md#forecast_get) | **GET** /forecast | 
[**protection_get**](DefaultApi.md#protection_get) | **GET** /protection | 
[**uv_get**](DefaultApi.md#uv_get) | **GET** /uv | 


# **forecast_get**
> List[List[Forecast]] forecast_get(lat, lng, x_access_token, alt=alt, ozone=ozone, dt=dt)



Get hourly UV Index Forecast by location and date. Optional altitude, ozone level and datetime could be provided.

### Example


```python
import openapi_client
from openapi_client.models.forecast import Forecast
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openuv.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openuv.io/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 78.67 # float | latitude, from -90.00 to 90.00
    lng = 115.67 # float | longitude, from -180.00 to 180.00
    x_access_token = 'x_access_token_example' # str | This header is used to send data that contains your OpenUV API key
    alt = 1050 # float | Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value. (optional)
    ozone = 304.5 # float | Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default. (optional)
    dt = '2018-02-04T04:39:06.467Z' # datetime | UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time. (optional)

    try:
        api_response = api_instance.forecast_get(lat, lng, x_access_token, alt=alt, ozone=ozone, dt=dt)
        print("The response of DefaultApi->forecast_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->forecast_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| latitude, from -90.00 to 90.00 | 
 **lng** | **float**| longitude, from -180.00 to 180.00 | 
 **x_access_token** | **str**| This header is used to send data that contains your OpenUV API key | 
 **alt** | **float**| Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value. | [optional] 
 **ozone** | **float**| Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default. | [optional] 
 **dt** | **datetime**| UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time. | [optional] 

### Return type

**List[List[Forecast]]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **protection_get**
> ProtectionResult protection_get(lat, lng, var_from, to, x_access_token, alt=alt, ozone=ozone)



Get daily protection time by location, UV Index from and UV Index to with 10 minutes accuracy. Optional altitide and ozone level could be provided.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openuv.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openuv.io/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 78.67 # float | latitude, from -90.00 to 90.00
    lng = 115.67 # float | longitude, from -180.00 to 180.00
    var_from = 2.5 # float | UV Index from value for protection datetime lookup. From 0 to 40.
    to = 3.6 # float | UV Index to value for protection datetime lookup. From 0 to 40.
    x_access_token = 'x_access_token_example' # str | This header is used to send data that contains your OpenUV API key
    alt = 1050 # float | Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value. (optional)
    ozone = 304.5 # float | Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default. (optional)

    try:
        api_response = api_instance.protection_get(lat, lng, var_from, to, x_access_token, alt=alt, ozone=ozone)
        print("The response of DefaultApi->protection_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->protection_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| latitude, from -90.00 to 90.00 | 
 **lng** | **float**| longitude, from -180.00 to 180.00 | 
 **var_from** | **float**| UV Index from value for protection datetime lookup. From 0 to 40. | 
 **to** | **float**| UV Index to value for protection datetime lookup. From 0 to 40. | 
 **x_access_token** | **str**| This header is used to send data that contains your OpenUV API key | 
 **alt** | **float**| Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value. | [optional] 
 **ozone** | **float**| Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default. | [optional] 

### Return type

[**ProtectionResult**](ProtectionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uv_get**
> UvIndexResult uv_get(lat, lng, x_access_token, alt=alt, ozone=ozone, dt=dt)



Get real-time UV Index by location. Optional altitude, ozone level and datetime could be provided.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.openuv.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openuv.io/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    lat = 78.67 # float | latitude, from -90.00 to 90.00
    lng = 115.67 # float | longitude, from -180.00 to 180.00
    x_access_token = 'x_access_token_example' # str | This header is used to send data that contains your OpenUV API key
    alt = 1050 # float | Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value. (optional)
    ozone = 304.5 # float | Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default. (optional)
    dt = '2018-02-04T04:39:06.467Z' # datetime | UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time. (optional)

    try:
        api_response = api_instance.uv_get(lat, lng, x_access_token, alt=alt, ozone=ozone, dt=dt)
        print("The response of DefaultApi->uv_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->uv_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **float**| latitude, from -90.00 to 90.00 | 
 **lng** | **float**| longitude, from -180.00 to 180.00 | 
 **x_access_token** | **str**| This header is used to send data that contains your OpenUV API key | 
 **alt** | **float**| Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value. | [optional] 
 **ozone** | **float**| Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default. | [optional] 
 **dt** | **datetime**| UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time. | [optional] 

### Return type

[**UvIndexResult**](UvIndexResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

