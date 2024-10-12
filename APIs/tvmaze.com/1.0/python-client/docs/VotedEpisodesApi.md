# openapi_client.VotedEpisodesApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_votes_episodes_episode_id_delete**](VotedEpisodesApi.md#user_votes_episodes_episode_id_delete) | **DELETE** /user/votes/episodes/{episode_id} | Remove an episode vote
[**user_votes_episodes_episode_id_get**](VotedEpisodesApi.md#user_votes_episodes_episode_id_get) | **GET** /user/votes/episodes/{episode_id} | Check if an episode is voted for
[**user_votes_episodes_episode_id_put**](VotedEpisodesApi.md#user_votes_episodes_episode_id_put) | **PUT** /user/votes/episodes/{episode_id} | Vote for an episode
[**user_votes_episodes_get**](VotedEpisodesApi.md#user_votes_episodes_get) | **GET** /user/votes/episodes | List the episodes voted for


# **user_votes_episodes_episode_id_delete**
> user_votes_episodes_episode_id_delete(episode_id)

Remove an episode vote

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VotedEpisodesApi(api_client)
    episode_id = 56 # int | 

    try:
        # Remove an episode vote
        api_instance.user_votes_episodes_episode_id_delete(episode_id)
    except Exception as e:
        print("Exception when calling VotedEpisodesApi->user_votes_episodes_episode_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The episode vote is now removed |  -  |
**404** | This episode was not voted for |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_votes_episodes_episode_id_get**
> EpisodeVote user_votes_episodes_episode_id_get(episode_id)

Check if an episode is voted for

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.episode_vote import EpisodeVote
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VotedEpisodesApi(api_client)
    episode_id = 56 # int | 

    try:
        # Check if an episode is voted for
        api_response = api_instance.user_votes_episodes_episode_id_get(episode_id)
        print("The response of VotedEpisodesApi->user_votes_episodes_episode_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotedEpisodesApi->user_votes_episodes_episode_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**|  | 

### Return type

[**EpisodeVote**](EpisodeVote.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The episode vote |  -  |
**404** | This episode is not voted for |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_votes_episodes_episode_id_put**
> EpisodeVote user_votes_episodes_episode_id_put(episode_id, episode_vote=episode_vote)

Vote for an episode

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.episode_vote import EpisodeVote
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VotedEpisodesApi(api_client)
    episode_id = 56 # int | 
    episode_vote = openapi_client.EpisodeVote() # EpisodeVote |  (optional)

    try:
        # Vote for an episode
        api_response = api_instance.user_votes_episodes_episode_id_put(episode_id, episode_vote=episode_vote)
        print("The response of VotedEpisodesApi->user_votes_episodes_episode_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotedEpisodesApi->user_votes_episodes_episode_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**|  | 
 **episode_vote** | [**EpisodeVote**](EpisodeVote.md)|  | [optional] 

### Return type

[**EpisodeVote**](EpisodeVote.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This episode is now voted for |  -  |
**404** | This episode does not exist |  -  |
**422** | Invalid vote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_votes_episodes_get**
> List[EpisodeVote] user_votes_episodes_get()

List the episodes voted for

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.episode_vote import EpisodeVote
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VotedEpisodesApi(api_client)

    try:
        # List the episodes voted for
        api_response = api_instance.user_votes_episodes_get()
        print("The response of VotedEpisodesApi->user_votes_episodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotedEpisodesApi->user_votes_episodes_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[EpisodeVote]**](EpisodeVote.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of episode votes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

