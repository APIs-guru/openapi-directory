# openapi_client.GeneralApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_open_api_spec**](GeneralApi.md#get_open_api_spec) | **GET** /2/openapi.json | Returns the OpenAPI Specification document.


# **get_open_api_spec**
> object get_open_api_spec()

Returns the OpenAPI Specification document.

Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GeneralApi(api_client)

    try:
        # Returns the OpenAPI Specification document.
        api_response = api_instance.get_open_api_spec()
        print("The response of GeneralApi->get_open_api_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GeneralApi->get_open_api_spec: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

