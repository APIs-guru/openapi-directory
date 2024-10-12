# openapi_client.WeatherByCityAndStateApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getweather**](WeatherByCityAndStateApi.md#getweather) | **GET** /getweather | Gets current weather information for a US city and state


# **getweather**
> Getweather200Response getweather(license, city, state)

Gets current weather information for a US city and state

Use city and state to retrieve current US weather information.

### Example


```python
import openapi_client
from openapi_client.models.getweather200_response import Getweather200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.interzoid.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.interzoid.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WeatherByCityAndStateApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    city = 'city_example' # str | City for weather information
    state = 'state_example' # str | State for weather information

    try:
        # Gets current weather information for a US city and state
        api_response = api_instance.getweather(license, city, state)
        print("The response of WeatherByCityAndStateApi->getweather:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WeatherByCityAndStateApi->getweather: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **city** | **str**| City for weather information | 
 **state** | **str**| State for weather information | 

### Return type

[**Getweather200Response**](Getweather200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current weather information for a US city |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | city/state not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

