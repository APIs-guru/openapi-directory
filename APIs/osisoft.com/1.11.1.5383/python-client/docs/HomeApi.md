# openapi_client.HomeApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**home_get**](HomeApi.md#home_get) | **GET** / | Get top level links for this PI System Web API instance.


# **home_get**
> Landing home_get()

Get top level links for this PI System Web API instance.

### Example


```python
import openapi_client
from openapi_client.models.landing import Landing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HomeApi(api_client)

    try:
        # Get top level links for this PI System Web API instance.
        api_response = api_instance.home_get()
        print("The response of HomeApi->home_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HomeApi->home_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Landing**](Landing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Links to top level collections and system information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

