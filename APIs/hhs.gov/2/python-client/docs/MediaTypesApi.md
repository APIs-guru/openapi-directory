# openapi_client.MediaTypesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_media_types_format_get**](MediaTypesApi.md#resources_media_types_format_get) | **GET** /resources/mediaTypes.{format} | Get MediaTypes


# **resources_media_types_format_get**
> List[MediaTypeHolderWrapped] resources_media_types_format_get(format)

Get MediaTypes

Information about media types

### Example


```python
import openapi_client
from openapi_client.models.media_type_holder_wrapped import MediaTypeHolderWrapped
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MediaTypesApi(api_client)
    format = 'format_example' # str | Automatically added

    try:
        # Get MediaTypes
        api_response = api_instance.resources_media_types_format_get(format)
        print("The response of MediaTypesApi->resources_media_types_format_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MediaTypesApi->resources_media_types_format_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Automatically added | 

### Return type

[**List[MediaTypeHolderWrapped]**](MediaTypeHolderWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of available MediaTypes. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

