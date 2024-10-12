# openapi_client.MetadataApi

All URIs are relative to *https://mermade.org.uk/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_status**](MetadataApi.md#get_status) | **GET** /status | Get the status of the API


# **get_status**
> object get_status()

Get the status of the API



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://mermade.org.uk/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://mermade.org.uk/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)

    try:
        # Get the status of the API
        api_response = api_instance.get_status()
        print("The response of MetadataApi->get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_status: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | default |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

