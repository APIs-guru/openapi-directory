# openapi_client.WeatherByZipCodeApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getweatherzipcode**](WeatherByZipCodeApi.md#getweatherzipcode) | **GET** /getweatherzipcode | Gets current weather information for a US zip code


# **getweatherzipcode**
> Getweatherzipcode200Response getweatherzipcode(license, zip)

Gets current weather information for a US zip code

Use a US zip code to retrieve current weather information

### Example


```python
import openapi_client
from openapi_client.models.getweatherzipcode200_response import Getweatherzipcode200Response
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
    api_instance = openapi_client.WeatherByZipCodeApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    zip = 'zip_example' # str | Zip code for weather information

    try:
        # Gets current weather information for a US zip code
        api_response = api_instance.getweatherzipcode(license, zip)
        print("The response of WeatherByZipCodeApi->getweatherzipcode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WeatherByZipCodeApi->getweatherzipcode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **zip** | **str**| Zip code for weather information | 

### Return type

[**Getweatherzipcode200Response**](Getweatherzipcode200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current weather information for zip code |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | zip code not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

