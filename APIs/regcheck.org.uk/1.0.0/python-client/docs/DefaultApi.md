# openapi_client.DefaultApi

All URIs are relative to *https://regcheck.local/infiniteloopltd/CarRegistration/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check**](DefaultApi.md#check) | **GET** /Check | Gets details of a UK Vehicle


# **check**
> List[object] check(search_string)

Gets details of a UK Vehicle

Gets details of a UK Vehicle 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://regcheck.local/infiniteloopltd/CarRegistration/1.0.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://regcheck.local/infiniteloopltd/CarRegistration/1.0.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    search_string = 'search_string_example' # str | A registration number

    try:
        # Gets details of a UK Vehicle
        api_response = api_instance.check(search_string)
        print("The response of DefaultApi->check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_string** | **str**| A registration number | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | vehicle information |  -  |
**500** | bad input parameter |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

