# openapi_client.VotedShowsApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_votes_shows_get**](VotedShowsApi.md#user_votes_shows_get) | **GET** /user/votes/shows | List the shows voted for
[**user_votes_shows_show_id_delete**](VotedShowsApi.md#user_votes_shows_show_id_delete) | **DELETE** /user/votes/shows/{show_id} | Remove a show vote
[**user_votes_shows_show_id_get**](VotedShowsApi.md#user_votes_shows_show_id_get) | **GET** /user/votes/shows/{show_id} | Check if a show is voted for
[**user_votes_shows_show_id_put**](VotedShowsApi.md#user_votes_shows_show_id_put) | **PUT** /user/votes/shows/{show_id} | Vote for a show


# **user_votes_shows_get**
> List[ShowVote] user_votes_shows_get(embed=embed)

List the shows voted for

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.show_vote import ShowVote
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
    api_instance = openapi_client.VotedShowsApi(api_client)
    embed = 'embed_example' # str | Embed full show info (optional)

    try:
        # List the shows voted for
        api_response = api_instance.user_votes_shows_get(embed=embed)
        print("The response of VotedShowsApi->user_votes_shows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotedShowsApi->user_votes_shows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embed** | **str**| Embed full show info | [optional] 

### Return type

[**List[ShowVote]**](ShowVote.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of show votes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_votes_shows_show_id_delete**
> user_votes_shows_show_id_delete(show_id)

Remove a show vote

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
    api_instance = openapi_client.VotedShowsApi(api_client)
    show_id = 56 # int | 

    try:
        # Remove a show vote
        api_instance.user_votes_shows_show_id_delete(show_id)
    except Exception as e:
        print("Exception when calling VotedShowsApi->user_votes_shows_show_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**|  | 

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
**200** | The show vote is now removed |  -  |
**404** | This show was not voted for |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_votes_shows_show_id_get**
> ShowVote user_votes_shows_show_id_get(show_id)

Check if a show is voted for

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.show_vote import ShowVote
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
    api_instance = openapi_client.VotedShowsApi(api_client)
    show_id = 56 # int | 

    try:
        # Check if a show is voted for
        api_response = api_instance.user_votes_shows_show_id_get(show_id)
        print("The response of VotedShowsApi->user_votes_shows_show_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotedShowsApi->user_votes_shows_show_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**|  | 

### Return type

[**ShowVote**](ShowVote.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The show vote |  -  |
**404** | This show is not voted for |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_votes_shows_show_id_put**
> ShowVote user_votes_shows_show_id_put(show_id, show_vote=show_vote)

Vote for a show

Set `voted_at` to `NULL` or leave it out to use the current time.

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.show_vote import ShowVote
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
    api_instance = openapi_client.VotedShowsApi(api_client)
    show_id = 56 # int | 
    show_vote = openapi_client.ShowVote() # ShowVote |  (optional)

    try:
        # Vote for a show
        api_response = api_instance.user_votes_shows_show_id_put(show_id, show_vote=show_vote)
        print("The response of VotedShowsApi->user_votes_shows_show_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VotedShowsApi->user_votes_shows_show_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**|  | 
 **show_vote** | [**ShowVote**](ShowVote.md)|  | [optional] 

### Return type

[**ShowVote**](ShowVote.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This show is now voted for |  -  |
**404** | This show does not exist |  -  |
**422** | Invalid vote |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

