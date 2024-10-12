# openapi_client.BookmarksApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_users_id_bookmarks**](BookmarksApi.md#get_users_id_bookmarks) | **GET** /2/users/{id}/bookmarks | Bookmarks by User
[**post_users_id_bookmarks**](BookmarksApi.md#post_users_id_bookmarks) | **POST** /2/users/{id}/bookmarks | Add Tweet to Bookmarks
[**users_id_bookmarks_delete**](BookmarksApi.md#users_id_bookmarks_delete) | **DELETE** /2/users/{id}/bookmarks/{tweet_id} | Remove a bookmarked Tweet


# **get_users_id_bookmarks**
> Get2UsersIdBookmarksResponse get_users_id_bookmarks(id, max_results=max_results, pagination_token=pagination_token, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Bookmarks by User

Returns Tweet objects that have been bookmarked by the requesting User

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_bookmarks_response import Get2UsersIdBookmarksResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookmarksApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User for whom to return results.
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Bookmarks by User
        api_response = api_instance.get_users_id_bookmarks(id, max_results=max_results, pagination_token=pagination_token, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of BookmarksApi->get_users_id_bookmarks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookmarksApi->get_users_id_bookmarks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User for whom to return results. | 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2UsersIdBookmarksResponse**](Get2UsersIdBookmarksResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_users_id_bookmarks**
> BookmarkMutationResponse post_users_id_bookmarks(id, bookmark_add_request)

Add Tweet to Bookmarks

Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.bookmark_add_request import BookmarkAddRequest
from openapi_client.models.bookmark_mutation_response import BookmarkMutationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookmarksApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User for whom to add bookmarks.
    bookmark_add_request = openapi_client.BookmarkAddRequest() # BookmarkAddRequest | 

    try:
        # Add Tweet to Bookmarks
        api_response = api_instance.post_users_id_bookmarks(id, bookmark_add_request)
        print("The response of BookmarksApi->post_users_id_bookmarks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookmarksApi->post_users_id_bookmarks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User for whom to add bookmarks. | 
 **bookmark_add_request** | [**BookmarkAddRequest**](BookmarkAddRequest.md)|  | 

### Return type

[**BookmarkMutationResponse**](BookmarkMutationResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_bookmarks_delete**
> BookmarkMutationResponse users_id_bookmarks_delete(id, tweet_id)

Remove a bookmarked Tweet

Removes a Tweet from the requesting User's bookmarked Tweets.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.bookmark_mutation_response import BookmarkMutationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BookmarksApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User whose bookmark is to be removed.
    tweet_id = 'tweet_id_example' # str | The ID of the Tweet that the source User is removing from bookmarks.

    try:
        # Remove a bookmarked Tweet
        api_response = api_instance.users_id_bookmarks_delete(id, tweet_id)
        print("The response of BookmarksApi->users_id_bookmarks_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BookmarksApi->users_id_bookmarks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User whose bookmark is to be removed. | 
 **tweet_id** | **str**| The ID of the Tweet that the source User is removing from bookmarks. | 

### Return type

[**BookmarkMutationResponse**](BookmarkMutationResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

