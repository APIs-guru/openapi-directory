# openapi_client.CurrentGlobalTimeApi

All URIs are relative to *https://api.interzoid.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getglobaltime**](CurrentGlobalTimeApi.md#getglobaltime) | **GET** /getglobaltime | Gets the current time for a global locale


# **getglobaltime**
> Getglobaltime200Response getglobaltime(license, locale)

Gets the current time for a global locale

Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)

### Example


```python
import openapi_client
from openapi_client.models.getglobaltime200_response import Getglobaltime200Response
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
    api_instance = openapi_client.CurrentGlobalTimeApi(api_client)
    license = 'license_example' # str | Your Interzoid license API key. Register at www.interzoid.com/register
    locale = 'locale_example' # str | Geographic locale to get the current time for

    try:
        # Gets the current time for a global locale
        api_response = api_instance.getglobaltime(license, locale)
        print("The response of CurrentGlobalTimeApi->getglobaltime:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CurrentGlobalTimeApi->getglobaltime: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **str**| Your Interzoid license API key. Register at www.interzoid.com/register | 
 **locale** | **str**| Geographic locale to get the current time for | 

### Return type

[**Getglobaltime200Response**](Getglobaltime200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current global time in many forms and related information |  -  |
**400** | bad request - insufficient parameters |  -  |
**402** | credits exhausted |  -  |
**403** | invalid license API key |  -  |
**404** | locale not found |  -  |
**405** | method not allowed |  -  |
**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

