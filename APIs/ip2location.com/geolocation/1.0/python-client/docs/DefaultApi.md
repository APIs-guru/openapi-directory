# openapi_client.DefaultApi

All URIs are relative to *https://api.ip2location.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**root_get**](DefaultApi.md#root_get) | **GET** / | 


# **root_get**
> str root_get(ip, key, package=package, addon=addon, format=format, lang=lang)



Get geolocation information via IP address

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ip2location.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ip2location.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    ip = '8.8.8.8' # str | IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.
    key = 'key_example' # str | API Key. Please sign up free trial license key at ip2location.com
    package = 'package_example' # str | Web service package of different granularity of return information. (optional)
    addon = ['continent,country'] # List[str] | Extra information in addition to the above selected package. (optional)
    format = 'format_example' # str | Format of the response message. (optional)
    lang = 'lang_example' # str | Translation information. The translation only applicable for continent, country, region and city name for the addon package. (optional)

    try:
        api_response = api_instance.root_get(ip, key, package=package, addon=addon, format=format, lang=lang)
        print("The response of DefaultApi->root_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->root_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup. | 
 **key** | **str**| API Key. Please sign up free trial license key at ip2location.com | 
 **package** | **str**| Web service package of different granularity of return information. | [optional] 
 **addon** | [**List[str]**](str.md)| Extra information in addition to the above selected package. | [optional] 
 **format** | **str**| Format of the response message. | [optional] 
 **lang** | **str**| Translation information. The translation only applicable for continent, country, region and city name for the addon package. | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get response from IP lookup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

