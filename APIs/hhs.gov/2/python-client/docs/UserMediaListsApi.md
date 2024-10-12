# openapi_client.UserMediaListsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources_user_media_lists_id_json_get**](UserMediaListsApi.md#resources_user_media_lists_id_json_get) | **GET** /resources/userMediaLists/{id}.json | Get UserMediaList by ID


# **resources_user_media_lists_id_json_get**
> List[MediaItemWrapped] resources_user_media_lists_id_json_get(id, display_method=display_method)

Get UserMediaList by ID

Get a specific user media list.

### Example


```python
import openapi_client
from openapi_client.models.media_item_wrapped import MediaItemWrapped
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
    api_instance = openapi_client.UserMediaListsApi(api_client)
    id = 56 # int | The id of the record to look up
    display_method = 'display_method_example' # str | Method used to render an html request. Accepts one: [mv, list, feed] (optional)

    try:
        # Get UserMediaList by ID
        api_response = api_instance.resources_user_media_lists_id_json_get(id, display_method=display_method)
        print("The response of UserMediaListsApi->resources_user_media_lists_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserMediaListsApi->resources_user_media_lists_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the record to look up | 
 **display_method** | **str**| Method used to render an html request. Accepts one: [mv, list, feed] | [optional] 

### Return type

[**List[MediaItemWrapped]**](MediaItemWrapped.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a specific user media list by &#39;id&#39;. |  -  |
**400** | Invalid ID |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

