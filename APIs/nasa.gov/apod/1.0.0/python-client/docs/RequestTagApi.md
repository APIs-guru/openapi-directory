# openapi_client.RequestTagApi

All URIs are relative to *https://api.nasa.gov/planetary*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apod_get**](RequestTagApi.md#apod_get) | **GET** /apod | Returns images


# **apod_get**
> List[object] apod_get(var_date=var_date, hd=hd)

Returns images

Returns the picture of the day

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nasa.gov/planetary
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nasa.gov/planetary"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequestTagApi(api_client)
    var_date = 'var_date_example' # str | The date of the APOD image to retrieve (optional)
    hd = True # bool | Retrieve the URL for the high resolution image (optional)

    try:
        # Returns images
        api_response = api_instance.apod_get(var_date=var_date, hd=hd)
        print("The response of RequestTagApi->apod_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestTagApi->apod_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_date** | **str**| The date of the APOD image to retrieve | [optional] 
 **hd** | **bool**| Retrieve the URL for the high resolution image | [optional] 

### Return type

**List[object]**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Date must be between Jun 16, 1995 and Mar 28, 2019. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

