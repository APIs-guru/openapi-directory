# openapi_client.TagsApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_followed_tags_0**](TagsApi.md#get_followed_tags_0) | **GET** /api/follows/tags | Followed Tags
[**get_tags**](TagsApi.md#get_tags) | **GET** /api/tags | Tags


# **get_followed_tags_0**
> List[FollowedTag] get_followed_tags_0()

Followed Tags

This endpoint allows the client to retrieve a list of the tags they follow.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.followed_tag import FollowedTag
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)

    try:
        # Followed Tags
        api_response = api_instance.get_followed_tags_0()
        print("The response of TagsApi->get_followed_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->get_followed_tags_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[FollowedTag]**](FollowedTag.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of followed tags |  -  |
**401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tags**
> List[Tag] get_tags(page=page, per_page=per_page)

Tags

This endpoint allows the client to retrieve a list of tags that can be used to tag articles.  It will return tags ordered by popularity.  It supports pagination, each page will contain 10 tags by default.

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TagsApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 10 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 10)

    try:
        # Tags
        api_response = api_instance.get_tags(page=page, per_page=per_page)
        print("The response of TagsApi->get_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TagsApi->get_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 10]

### Return type

[**List[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of all tags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

