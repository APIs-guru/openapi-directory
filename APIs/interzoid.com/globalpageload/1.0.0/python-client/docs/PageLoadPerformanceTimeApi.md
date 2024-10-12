# openapi_client.PageLoadPerformanceTimeApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalpageload**](PageLoadPerformanceTimeApi.md#globalpageload) | **GET** /globalpageload | Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.


# **globalpageload**
> Globalpageload200Response globalpageload(license, origin, url)

Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.

Gets page load performance from a specified geography 

### Example


```python
import openapi_client
from openapi_client.models.globalpageload200_response import Globalpageload200Response
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
    api_instance = openapi_client.PageLoadPerformanceTimeApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    origin = 'origin_example' # str | Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)
    url = 'url_example' # str | specific URL to perform load test time

    try:
        # Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.
        api_response = api_instance.globalpageload(license, origin, url)
        print("The response of PageLoadPerformanceTimeApi->globalpageload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PageLoadPerformanceTimeApi->globalpageload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **origin** | **str**| Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list) | 
 **url** | **str**| specific URL to perform load test time | 

### Return type

[**Globalpageload200Response**](Globalpageload200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page load performance measurement response |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | origin or url note found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

