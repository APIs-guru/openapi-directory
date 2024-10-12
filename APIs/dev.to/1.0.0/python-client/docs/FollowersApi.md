# openapi_client.FollowersApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_followers**](FollowersApi.md#get_followers) | **GET** /api/followers/users | Followers


# **get_followers**
> List[GetFollowers200ResponseInner] get_followers(page=page, per_page=per_page, sort=sort)

Followers

This endpoint allows the client to retrieve a list of the followers they have.         \"Followers\" are users that are following other users on the website.         It supports pagination, each page will contain 80 followers by default.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.get_followers200_response_inner import GetFollowers200ResponseInner
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
    api_instance = openapi_client.FollowersApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)
    sort = 'created_at' # str | Default is 'created_at'. Specifies the sort order for the created_at param of the follow                                 relationship. To sort by newest followers first (descending order) specify                                 ?sort=-created_at. (optional)

    try:
        # Followers
        api_response = api_instance.get_followers(page=page, per_page=per_page, sort=sort)
        print("The response of FollowersApi->get_followers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowersApi->get_followers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]
 **sort** | **str**| Default is &#39;created_at&#39;. Specifies the sort order for the created_at param of the follow                                 relationship. To sort by newest followers first (descending order) specify                                 ?sort&#x3D;-created_at. | [optional] 

### Return type

[**List[GetFollowers200ResponseInner]**](GetFollowers200ResponseInner.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of followers |  -  |
**401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

