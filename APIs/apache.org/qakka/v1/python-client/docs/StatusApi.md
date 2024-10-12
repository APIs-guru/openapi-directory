# openapi_client.StatusApi

All URIs are relative to *https://apache.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**status**](StatusApi.md#status) | **GET** /status | Status of webapp.


# **status**
> object status()

Status of webapp.



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://apache.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://apache.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatusApi(api_client)

    try:
        # Status of webapp.
        api_response = api_instance.status()
        print("The response of StatusApi->status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatusApi->status: %s\n" % e)
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
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

