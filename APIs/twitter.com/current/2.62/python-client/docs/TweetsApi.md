# openapi_client.TweetsApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_or_delete_rules**](TweetsApi.md#add_or_delete_rules) | **POST** /2/tweets/search/stream/rules | Add/Delete rules
[**create_tweet**](TweetsApi.md#create_tweet) | **POST** /2/tweets | Creation of a Tweet
[**delete_tweet_by_id**](TweetsApi.md#delete_tweet_by_id) | **DELETE** /2/tweets/{id} | Tweet delete by Tweet ID
[**find_tweet_by_id**](TweetsApi.md#find_tweet_by_id) | **GET** /2/tweets/{id} | Tweet lookup by Tweet ID
[**find_tweets_by_id**](TweetsApi.md#find_tweets_by_id) | **GET** /2/tweets | Tweet lookup by Tweet IDs
[**find_tweets_that_quote_a_tweet**](TweetsApi.md#find_tweets_that_quote_a_tweet) | **GET** /2/tweets/{id}/quote_tweets | Retrieve Tweets that quote a Tweet.
[**get_rules**](TweetsApi.md#get_rules) | **GET** /2/tweets/search/stream/rules | Rules lookup
[**get_tweets_firehose_stream**](TweetsApi.md#get_tweets_firehose_stream) | **GET** /2/tweets/firehose/stream | Firehose stream
[**get_tweets_sample10_stream**](TweetsApi.md#get_tweets_sample10_stream) | **GET** /2/tweets/sample10/stream | Sample 10% stream
[**hide_reply_by_id**](TweetsApi.md#hide_reply_by_id) | **PUT** /2/tweets/{tweet_id}/hidden | Hide replies
[**lists_id_tweets**](TweetsApi.md#lists_id_tweets) | **GET** /2/lists/{id}/tweets | List Tweets timeline by List ID.
[**sample_stream**](TweetsApi.md#sample_stream) | **GET** /2/tweets/sample/stream | Sample stream
[**search_stream**](TweetsApi.md#search_stream) | **GET** /2/tweets/search/stream | Filtered stream
[**space_buyers_0**](TweetsApi.md#space_buyers_0) | **GET** /2/spaces/{id}/buyers | Retrieve the list of Users who purchased a ticket to the given space
[**space_tweets_0**](TweetsApi.md#space_tweets_0) | **GET** /2/spaces/{id}/tweets | Retrieve Tweets from a Space.
[**tweet_counts_full_archive_search**](TweetsApi.md#tweet_counts_full_archive_search) | **GET** /2/tweets/counts/all | Full archive search counts
[**tweet_counts_recent_search**](TweetsApi.md#tweet_counts_recent_search) | **GET** /2/tweets/counts/recent | Recent search counts
[**tweets_fullarchive_search**](TweetsApi.md#tweets_fullarchive_search) | **GET** /2/tweets/search/all | Full-archive search
[**tweets_recent_search**](TweetsApi.md#tweets_recent_search) | **GET** /2/tweets/search/recent | Recent search
[**users_id_like**](TweetsApi.md#users_id_like) | **POST** /2/users/{id}/likes | Causes the User (in the path) to like the specified Tweet
[**users_id_liked_tweets**](TweetsApi.md#users_id_liked_tweets) | **GET** /2/users/{id}/liked_tweets | Returns Tweet objects liked by the provided User ID
[**users_id_mentions**](TweetsApi.md#users_id_mentions) | **GET** /2/users/{id}/mentions | User mention timeline by User ID
[**users_id_retweets**](TweetsApi.md#users_id_retweets) | **POST** /2/users/{id}/retweets | Causes the User (in the path) to retweet the specified Tweet.
[**users_id_timeline**](TweetsApi.md#users_id_timeline) | **GET** /2/users/{id}/timelines/reverse_chronological | User home timeline by User ID
[**users_id_tweets**](TweetsApi.md#users_id_tweets) | **GET** /2/users/{id}/tweets | User Tweets timeline by User ID
[**users_id_unlike**](TweetsApi.md#users_id_unlike) | **DELETE** /2/users/{id}/likes/{tweet_id} | Causes the User (in the path) to unlike the specified Tweet
[**users_id_unretweets**](TweetsApi.md#users_id_unretweets) | **DELETE** /2/users/{id}/retweets/{source_tweet_id} | Causes the User (in the path) to unretweet the specified Tweet


# **add_or_delete_rules**
> AddOrDeleteRulesResponse add_or_delete_rules(add_or_delete_rules_request, dry_run=dry_run)

Add/Delete rules

Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.add_or_delete_rules_request import AddOrDeleteRulesRequest
from openapi_client.models.add_or_delete_rules_response import AddOrDeleteRulesResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    add_or_delete_rules_request = openapi_client.AddOrDeleteRulesRequest() # AddOrDeleteRulesRequest | 
    dry_run = True # bool | Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes. (optional)

    try:
        # Add/Delete rules
        api_response = api_instance.add_or_delete_rules(add_or_delete_rules_request, dry_run=dry_run)
        print("The response of TweetsApi->add_or_delete_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->add_or_delete_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_or_delete_rules_request** | [**AddOrDeleteRulesRequest**](AddOrDeleteRulesRequest.md)|  | 
 **dry_run** | **bool**| Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes. | [optional] 

### Return type

[**AddOrDeleteRulesResponse**](AddOrDeleteRulesResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tweet**
> TweetCreateResponse create_tweet(tweet_create_request)

Creation of a Tweet

Causes the User to create a Tweet under the authorized account.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.tweet_create_request import TweetCreateRequest
from openapi_client.models.tweet_create_response import TweetCreateResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    tweet_create_request = openapi_client.TweetCreateRequest() # TweetCreateRequest | 

    try:
        # Creation of a Tweet
        api_response = api_instance.create_tweet(tweet_create_request)
        print("The response of TweetsApi->create_tweet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->create_tweet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tweet_create_request** | [**TweetCreateRequest**](TweetCreateRequest.md)|  | 

### Return type

[**TweetCreateResponse**](TweetCreateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tweet_by_id**
> TweetDeleteResponse delete_tweet_by_id(id)

Tweet delete by Tweet ID

Delete specified Tweet (in the path) by ID.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.tweet_delete_response import TweetDeleteResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the Tweet to be deleted.

    try:
        # Tweet delete by Tweet ID
        api_response = api_instance.delete_tweet_by_id(id)
        print("The response of TweetsApi->delete_tweet_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->delete_tweet_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Tweet to be deleted. | 

### Return type

[**TweetDeleteResponse**](TweetDeleteResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_tweet_by_id**
> Get2TweetsIdResponse find_tweet_by_id(id, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Tweet lookup by Tweet ID

Returns a variety of information about the Tweet specified by the requested ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_id_response import Get2TweetsIdResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | A single Tweet ID.
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Tweet lookup by Tweet ID
        api_response = api_instance.find_tweet_by_id(id, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->find_tweet_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->find_tweet_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A single Tweet ID. | 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2TweetsIdResponse**](Get2TweetsIdResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_tweets_by_id**
> Get2TweetsResponse find_tweets_by_id(ids, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Tweet lookup by Tweet IDs

Returns a variety of information about the Tweet specified by the requested ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_response import Get2TweetsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    ids = ['ids_example'] # List[str] | A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Tweet lookup by Tweet IDs
        api_response = api_instance.find_tweets_by_id(ids, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->find_tweets_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->find_tweets_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[str]**](str.md)| A comma separated list of Tweet IDs. Up to 100 are allowed in a single request. | 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2TweetsResponse**](Get2TweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_tweets_that_quote_a_tweet**
> Get2TweetsIdQuoteTweetsResponse find_tweets_that_quote_a_tweet(id, max_results=max_results, pagination_token=pagination_token, exclude=exclude, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Retrieve Tweets that quote a Tweet.

Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_id_quote_tweets_response import Get2TweetsIdQuoteTweetsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | A single Tweet ID.
    max_results = 10 # int | The maximum number of results to be returned. (optional) (default to 10)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    exclude = ['[\"replies\",\"retweets\"]'] # List[str] | The set of entities to exclude (e.g. 'replies' or 'retweets'). (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Retrieve Tweets that quote a Tweet.
        api_response = api_instance.find_tweets_that_quote_a_tweet(id, max_results=max_results, pagination_token=pagination_token, exclude=exclude, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->find_tweets_that_quote_a_tweet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->find_tweets_that_quote_a_tweet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A single Tweet ID. | 
 **max_results** | **int**| The maximum number of results to be returned. | [optional] [default to 10]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **exclude** | [**List[str]**](str.md)| The set of entities to exclude (e.g. &#39;replies&#39; or &#39;retweets&#39;). | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2TweetsIdQuoteTweetsResponse**](Get2TweetsIdQuoteTweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rules**
> RulesLookupResponse get_rules(ids=ids, max_results=max_results, pagination_token=pagination_token)

Rules lookup

Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.rules_lookup_response import RulesLookupResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    ids = ['ids_example'] # List[str] | A comma-separated list of Rule IDs. (optional)
    max_results = 1000 # int | The maximum number of results. (optional) (default to 1000)
    pagination_token = 'pagination_token_example' # str | This value is populated by passing the 'next_token' returned in a request to paginate through results. (optional)

    try:
        # Rules lookup
        api_response = api_instance.get_rules(ids=ids, max_results=max_results, pagination_token=pagination_token)
        print("The response of TweetsApi->get_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->get_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[str]**](str.md)| A comma-separated list of Rule IDs. | [optional] 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 1000]
 **pagination_token** | **str**| This value is populated by passing the &#39;next_token&#39; returned in a request to paginate through results. | [optional] 

### Return type

[**RulesLookupResponse**](RulesLookupResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tweets_firehose_stream**
> StreamingTweetResponse get_tweets_firehose_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Firehose stream

Streams 100% of public Tweets.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.streaming_tweet_response import StreamingTweetResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    partition = 56 # int | The partition number.
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    start_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Firehose stream
        api_response = api_instance.get_tweets_firehose_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->get_tweets_firehose_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->get_tweets_firehose_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition** | **int**| The partition number. | 
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**StreamingTweetResponse**](StreamingTweetResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tweets_sample10_stream**
> Get2TweetsSample10StreamResponse get_tweets_sample10_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Sample 10% stream

Streams a deterministic 10% of public Tweets.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_sample10_stream_response import Get2TweetsSample10StreamResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    partition = 56 # int | The partition number.
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    start_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Sample 10% stream
        api_response = api_instance.get_tweets_sample10_stream(partition, backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->get_tweets_sample10_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->get_tweets_sample10_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition** | **int**| The partition number. | 
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2TweetsSample10StreamResponse**](Get2TweetsSample10StreamResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hide_reply_by_id**
> TweetHideResponse hide_reply_by_id(tweet_id, tweet_hide_request=tweet_hide_request)

Hide replies

Hides or unhides a reply to an owned conversation.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.tweet_hide_request import TweetHideRequest
from openapi_client.models.tweet_hide_response import TweetHideResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    tweet_id = 'tweet_id_example' # str | The ID of the reply that you want to hide or unhide.
    tweet_hide_request = openapi_client.TweetHideRequest() # TweetHideRequest |  (optional)

    try:
        # Hide replies
        api_response = api_instance.hide_reply_by_id(tweet_id, tweet_hide_request=tweet_hide_request)
        print("The response of TweetsApi->hide_reply_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->hide_reply_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tweet_id** | **str**| The ID of the reply that you want to hide or unhide. | 
 **tweet_hide_request** | [**TweetHideRequest**](TweetHideRequest.md)|  | [optional] 

### Return type

[**TweetHideResponse**](TweetHideResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lists_id_tweets**
> Get2ListsIdTweetsResponse lists_id_tweets(id, max_results=max_results, pagination_token=pagination_token, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

List Tweets timeline by List ID.

Returns a list of Tweets associated with the provided List ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_lists_id_tweets_response import Get2ListsIdTweetsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the List.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # List Tweets timeline by List ID.
        api_response = api_instance.lists_id_tweets(id, max_results=max_results, pagination_token=pagination_token, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->lists_id_tweets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->lists_id_tweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2ListsIdTweetsResponse**](Get2ListsIdTweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sample_stream**
> StreamingTweetResponse sample_stream(backfill_minutes=backfill_minutes, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Sample stream

Streams a deterministic 1% of public Tweets.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.streaming_tweet_response import StreamingTweetResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Sample stream
        api_response = api_instance.sample_stream(backfill_minutes=backfill_minutes, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->sample_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->sample_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**StreamingTweetResponse**](StreamingTweetResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_stream**
> FilteredStreamingTweetResponse search_stream(backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Filtered stream

Streams Tweets matching the stream's active rule set.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.filtered_streaming_tweet_response import FilteredStreamingTweetResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    backfill_minutes = 56 # int | The number of minutes of backfill requested. (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Filtered stream
        api_response = api_instance.search_stream(backfill_minutes=backfill_minutes, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->search_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->search_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backfill_minutes** | **int**| The number of minutes of backfill requested. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**FilteredStreamingTweetResponse**](FilteredStreamingTweetResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **space_buyers_0**
> Get2SpacesIdBuyersResponse space_buyers_0(id, pagination_token=pagination_token, max_results=max_results, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Retrieve the list of Users who purchased a ticket to the given space

Retrieves the list of Users who purchased a ticket to the given space

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_id_buyers_response import Get2SpacesIdBuyersResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = '1YqKDqWqdPLsV' # str | The ID of the Space to be retrieved.
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Retrieve the list of Users who purchased a ticket to the given space
        api_response = api_instance.space_buyers_0(id, pagination_token=pagination_token, max_results=max_results, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of TweetsApi->space_buyers_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->space_buyers_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Space to be retrieved. | 
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2SpacesIdBuyersResponse**](Get2SpacesIdBuyersResponse.md)

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

# **space_tweets_0**
> Get2SpacesIdTweetsResponse space_tweets_0(id, max_results=max_results, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Retrieve Tweets from a Space.

Retrieves Tweets shared in the specified Space.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_id_tweets_response import Get2SpacesIdTweetsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = '1YqKDqWqdPLsV' # str | The ID of the Space to be retrieved.
    max_results = 100 # int | The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100. (optional) (default to 100)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Retrieve Tweets from a Space.
        api_response = api_instance.space_tweets_0(id, max_results=max_results, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->space_tweets_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->space_tweets_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Space to be retrieved. | 
 **max_results** | **int**| The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100. | [optional] [default to 100]
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2SpacesIdTweetsResponse**](Get2SpacesIdTweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_counts_full_archive_search**
> Get2TweetsCountsAllResponse tweet_counts_full_archive_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, next_token=next_token, pagination_token=pagination_token, granularity=granularity, search_count_fields=search_count_fields)

Full archive search counts

Returns Tweet Counts that match a search query.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_counts_all_response import Get2TweetsCountsAllResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    query = '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet' # str | One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). (optional)
    since_id = 'since_id_example' # str | Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. (optional)
    until_id = 'until_id_example' # str | Returns results with a Tweet ID less than (that is, older than) the specified ID. (optional)
    next_token = 'next_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    granularity = hour # str | The granularity for the search counts results. (optional) (default to hour)
    search_count_fields = ['[\"end\",\"start\",\"tweet_count\"]'] # List[str] | A comma separated list of SearchCount fields to display. (optional)

    try:
        # Full archive search counts
        api_response = api_instance.tweet_counts_full_archive_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, next_token=next_token, pagination_token=pagination_token, granularity=granularity, search_count_fields=search_count_fields)
        print("The response of TweetsApi->tweet_counts_full_archive_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->tweet_counts_full_archive_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length. | 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). | [optional] 
 **since_id** | **str**| Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. | [optional] 
 **until_id** | **str**| Returns results with a Tweet ID less than (that is, older than) the specified ID. | [optional] 
 **next_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **granularity** | **str**| The granularity for the search counts results. | [optional] [default to hour]
 **search_count_fields** | [**List[str]**](str.md)| A comma separated list of SearchCount fields to display. | [optional] 

### Return type

[**Get2TweetsCountsAllResponse**](Get2TweetsCountsAllResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweet_counts_recent_search**
> Get2TweetsCountsRecentResponse tweet_counts_recent_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, next_token=next_token, pagination_token=pagination_token, granularity=granularity, search_count_fields=search_count_fields)

Recent search counts

Returns Tweet Counts from the last 7 days that match a search query.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_counts_recent_response import Get2TweetsCountsRecentResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    query = '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet' # str | One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). (optional)
    since_id = 'since_id_example' # str | Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. (optional)
    until_id = 'until_id_example' # str | Returns results with a Tweet ID less than (that is, older than) the specified ID. (optional)
    next_token = 'next_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    granularity = hour # str | The granularity for the search counts results. (optional) (default to hour)
    search_count_fields = ['[\"end\",\"start\",\"tweet_count\"]'] # List[str] | A comma separated list of SearchCount fields to display. (optional)

    try:
        # Recent search counts
        api_response = api_instance.tweet_counts_recent_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, next_token=next_token, pagination_token=pagination_token, granularity=granularity, search_count_fields=search_count_fields)
        print("The response of TweetsApi->tweet_counts_recent_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->tweet_counts_recent_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length. | 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). | [optional] 
 **since_id** | **str**| Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. | [optional] 
 **until_id** | **str**| Returns results with a Tweet ID less than (that is, older than) the specified ID. | [optional] 
 **next_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **granularity** | **str**| The granularity for the search counts results. | [optional] [default to hour]
 **search_count_fields** | [**List[str]**](str.md)| A comma separated list of SearchCount fields to display. | [optional] 

### Return type

[**Get2TweetsCountsRecentResponse**](Get2TweetsCountsRecentResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweets_fullarchive_search**
> Get2TweetsSearchAllResponse tweets_fullarchive_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, max_results=max_results, next_token=next_token, pagination_token=pagination_token, sort_order=sort_order, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Full-archive search

Returns Tweets that match a search query.

### Example

* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_search_all_response import Get2TweetsSearchAllResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    query = '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet' # str | One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). (optional)
    since_id = 'since_id_example' # str | Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. (optional)
    until_id = 'until_id_example' # str | Returns results with a Tweet ID less than (that is, older than) the specified ID. (optional)
    max_results = 10 # int | The maximum number of search results to be returned by a request. (optional) (default to 10)
    next_token = 'next_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    sort_order = 'sort_order_example' # str | This order in which to return results. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Full-archive search
        api_response = api_instance.tweets_fullarchive_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, max_results=max_results, next_token=next_token, pagination_token=pagination_token, sort_order=sort_order, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->tweets_fullarchive_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->tweets_fullarchive_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length. | 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). | [optional] 
 **since_id** | **str**| Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. | [optional] 
 **until_id** | **str**| Returns results with a Tweet ID less than (that is, older than) the specified ID. | [optional] 
 **max_results** | **int**| The maximum number of search results to be returned by a request. | [optional] [default to 10]
 **next_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **sort_order** | **str**| This order in which to return results. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2TweetsSearchAllResponse**](Get2TweetsSearchAllResponse.md)

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweets_recent_search**
> Get2TweetsSearchRecentResponse tweets_recent_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, max_results=max_results, next_token=next_token, pagination_token=pagination_token, sort_order=sort_order, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Recent search

Returns Tweets from the last 7 days that match a search query.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_search_recent_response import Get2TweetsSearchRecentResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    query = '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet' # str | One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). (optional)
    since_id = 'since_id_example' # str | Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. (optional)
    until_id = 'until_id_example' # str | Returns results with a Tweet ID less than (that is, older than) the specified ID. (optional)
    max_results = 10 # int | The maximum number of search results to be returned by a request. (optional) (default to 10)
    next_token = 'next_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. (optional)
    sort_order = 'sort_order_example' # str | This order in which to return results. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Recent search
        api_response = api_instance.tweets_recent_search(query, start_time=start_time, end_time=end_time, since_id=since_id, until_id=until_id, max_results=max_results, next_token=next_token, pagination_token=pagination_token, sort_order=sort_order, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->tweets_recent_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->tweets_recent_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length. | 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). | [optional] 
 **since_id** | **str**| Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. | [optional] 
 **until_id** | **str**| Returns results with a Tweet ID less than (that is, older than) the specified ID. | [optional] 
 **max_results** | **int**| The maximum number of search results to be returned by a request. | [optional] [default to 10]
 **next_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. | [optional] 
 **sort_order** | **str**| This order in which to return results. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2TweetsSearchRecentResponse**](Get2TweetsSearchRecentResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_like**
> UsersLikesCreateResponse users_id_like(id, users_likes_create_request=users_likes_create_request)

Causes the User (in the path) to like the specified Tweet

Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.users_likes_create_request import UsersLikesCreateRequest
from openapi_client.models.users_likes_create_response import UsersLikesCreateResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to like the Tweet.
    users_likes_create_request = openapi_client.UsersLikesCreateRequest() # UsersLikesCreateRequest |  (optional)

    try:
        # Causes the User (in the path) to like the specified Tweet
        api_response = api_instance.users_id_like(id, users_likes_create_request=users_likes_create_request)
        print("The response of TweetsApi->users_id_like:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_like: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to like the Tweet. | 
 **users_likes_create_request** | [**UsersLikesCreateRequest**](UsersLikesCreateRequest.md)|  | [optional] 

### Return type

[**UsersLikesCreateResponse**](UsersLikesCreateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_liked_tweets**
> Get2UsersIdLikedTweetsResponse users_id_liked_tweets(id, max_results=max_results, pagination_token=pagination_token, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Returns Tweet objects liked by the provided User ID

Returns a list of Tweets liked by the provided User ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_liked_tweets_response import Get2UsersIdLikedTweetsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Returns Tweet objects liked by the provided User ID
        api_response = api_instance.users_id_liked_tweets(id, max_results=max_results, pagination_token=pagination_token, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->users_id_liked_tweets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_liked_tweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2UsersIdLikedTweetsResponse**](Get2UsersIdLikedTweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_mentions**
> Get2UsersIdMentionsResponse users_id_mentions(id, since_id=since_id, until_id=until_id, max_results=max_results, pagination_token=pagination_token, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

User mention timeline by User ID

Returns Tweet objects that mention username associated to the provided User ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_mentions_response import Get2UsersIdMentionsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    since_id = 'since_id_example' # str | The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified. (optional)
    until_id = '1346889436626259968' # str | The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified. (optional)
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # User mention timeline by User ID
        api_response = api_instance.users_id_mentions(id, since_id=since_id, until_id=until_id, max_results=max_results, pagination_token=pagination_token, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->users_id_mentions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_mentions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **since_id** | **str**| The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified. | [optional] 
 **until_id** | **str**| The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified. | [optional] 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2UsersIdMentionsResponse**](Get2UsersIdMentionsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_retweets**
> UsersRetweetsCreateResponse users_id_retweets(id, users_retweets_create_request=users_retweets_create_request)

Causes the User (in the path) to retweet the specified Tweet.

Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.users_retweets_create_request import UsersRetweetsCreateRequest
from openapi_client.models.users_retweets_create_response import UsersRetweetsCreateResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to retweet the Tweet.
    users_retweets_create_request = openapi_client.UsersRetweetsCreateRequest() # UsersRetweetsCreateRequest |  (optional)

    try:
        # Causes the User (in the path) to retweet the specified Tweet.
        api_response = api_instance.users_id_retweets(id, users_retweets_create_request=users_retweets_create_request)
        print("The response of TweetsApi->users_id_retweets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_retweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to retweet the Tweet. | 
 **users_retweets_create_request** | [**UsersRetweetsCreateRequest**](UsersRetweetsCreateRequest.md)|  | [optional] 

### Return type

[**UsersRetweetsCreateResponse**](UsersRetweetsCreateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_timeline**
> Get2UsersIdTimelinesReverseChronologicalResponse users_id_timeline(id, since_id=since_id, until_id=until_id, max_results=max_results, pagination_token=pagination_token, exclude=exclude, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

User home timeline by User ID

Returns Tweet objects that appears in the provided User ID's home timeline

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_timelines_reverse_chronological_response import Get2UsersIdTimelinesReverseChronologicalResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.
    since_id = '791775337160081409' # str | The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified. (optional)
    until_id = '1346889436626259968' # str | The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified. (optional)
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    exclude = ['[\"replies\",\"retweets\"]'] # List[str] | The set of entities to exclude (e.g. 'replies' or 'retweets'). (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # User home timeline by User ID
        api_response = api_instance.users_id_timeline(id, since_id=since_id, until_id=until_id, max_results=max_results, pagination_token=pagination_token, exclude=exclude, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->users_id_timeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_timeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of. | 
 **since_id** | **str**| The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified. | [optional] 
 **until_id** | **str**| The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified. | [optional] 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **exclude** | [**List[str]**](str.md)| The set of entities to exclude (e.g. &#39;replies&#39; or &#39;retweets&#39;). | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2UsersIdTimelinesReverseChronologicalResponse**](Get2UsersIdTimelinesReverseChronologicalResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_tweets**
> Get2UsersIdTweetsResponse users_id_tweets(id, since_id=since_id, until_id=until_id, max_results=max_results, pagination_token=pagination_token, exclude=exclude, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

User Tweets timeline by User ID

Returns a list of Tweets authored by the provided User ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_tweets_response import Get2UsersIdTweetsResponse
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

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TweetsApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    since_id = '791775337160081409' # str | The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified. (optional)
    until_id = '1346889436626259968' # str | The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified. (optional)
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    exclude = ['[\"replies\",\"retweets\"]'] # List[str] | The set of entities to exclude (e.g. 'replies' or 'retweets'). (optional)
    start_time = '2021-02-01T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. (optional)
    end_time = '2021-02-14T18:40:40.000Z' # datetime | YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # User Tweets timeline by User ID
        api_response = api_instance.users_id_tweets(id, since_id=since_id, until_id=until_id, max_results=max_results, pagination_token=pagination_token, exclude=exclude, start_time=start_time, end_time=end_time, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of TweetsApi->users_id_tweets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_tweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **since_id** | **str**| The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified. | [optional] 
 **until_id** | **str**| The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified. | [optional] 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **exclude** | [**List[str]**](str.md)| The set of entities to exclude (e.g. &#39;replies&#39; or &#39;retweets&#39;). | [optional] 
 **start_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified. | [optional] 
 **end_time** | **datetime**| YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2UsersIdTweetsResponse**](Get2UsersIdTweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_unlike**
> UsersLikesDeleteResponse users_id_unlike(id, tweet_id)

Causes the User (in the path) to unlike the specified Tweet

Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.users_likes_delete_response import UsersLikesDeleteResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to unlike the Tweet.
    tweet_id = 'tweet_id_example' # str | The ID of the Tweet that the User is requesting to unlike.

    try:
        # Causes the User (in the path) to unlike the specified Tweet
        api_response = api_instance.users_id_unlike(id, tweet_id)
        print("The response of TweetsApi->users_id_unlike:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_unlike: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to unlike the Tweet. | 
 **tweet_id** | **str**| The ID of the Tweet that the User is requesting to unlike. | 

### Return type

[**UsersLikesDeleteResponse**](UsersLikesDeleteResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_unretweets**
> UsersRetweetsDeleteResponse users_id_unretweets(id, source_tweet_id)

Causes the User (in the path) to unretweet the specified Tweet

Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.users_retweets_delete_response import UsersRetweetsDeleteResponse
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
    api_instance = openapi_client.TweetsApi(api_client)
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to retweet the Tweet.
    source_tweet_id = 'source_tweet_id_example' # str | The ID of the Tweet that the User is requesting to unretweet.

    try:
        # Causes the User (in the path) to unretweet the specified Tweet
        api_response = api_instance.users_id_unretweets(id, source_tweet_id)
        print("The response of TweetsApi->users_id_unretweets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TweetsApi->users_id_unretweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to retweet the Tweet. | 
 **source_tweet_id** | **str**| The ID of the Tweet that the User is requesting to unretweet. | 

### Return type

[**UsersRetweetsDeleteResponse**](UsersRetweetsDeleteResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

