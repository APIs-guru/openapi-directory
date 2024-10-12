# openapi_client.DefaultApi

All URIs are relative to *https://api.geodatasource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**city_get**](DefaultApi.md#city_get) | **GET** /city | 


# **city_get**
> str city_get(key, lng, lat, format=format)



Get City name by using latitude and longitude

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.geodatasource.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.geodatasource.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    key = 'key_example' # str | 
    lng = 3.4 # float | 
    lat = 3.4 # float | 
    format = 'format_example' # str |  (optional)

    try:
        api_response = api_instance.city_get(key, lng, lat, format=format)
        print("The response of DefaultApi->city_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->city_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **lng** | **float**|  | 
 **lat** | **float**|  | 
 **format** | **str**|  | [optional] 

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
**200** | Get response from longitude latitude lookup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

