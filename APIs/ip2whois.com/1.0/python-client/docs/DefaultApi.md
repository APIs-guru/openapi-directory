# openapi_client.DefaultApi

All URIs are relative to *https://api.ip2whois.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**root_get**](DefaultApi.md#root_get) | **GET** / | 


# **root_get**
> str root_get(domain, key, format=format)



Lookup WHOIS information

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ip2whois.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ip2whois.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    domain = 'domain_example' # str | Domain name for lookup purpose.
    key = 'key_example' # str | API key.
    format = 'format_example' # str | Returns the API response in json (default) or xml format. (optional)

    try:
        api_response = api_instance.root_get(domain, key, format=format)
        print("The response of DefaultApi->root_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->root_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **str**| Domain name for lookup purpose. | 
 **key** | **str**| API key. | 
 **format** | **str**| Returns the API response in json (default) or xml format. | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/html; charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get response from IP2WHOIS |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

