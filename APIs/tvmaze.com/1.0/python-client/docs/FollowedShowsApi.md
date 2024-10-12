# openapi_client.FollowedShowsApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_follows_shows_get**](FollowedShowsApi.md#user_follows_shows_get) | **GET** /user/follows/shows | List the followed shows
[**user_follows_shows_show_id_delete**](FollowedShowsApi.md#user_follows_shows_show_id_delete) | **DELETE** /user/follows/shows/{show_id} | Unfollow a show
[**user_follows_shows_show_id_get**](FollowedShowsApi.md#user_follows_shows_show_id_get) | **GET** /user/follows/shows/{show_id} | Check if a show is followed
[**user_follows_shows_show_id_put**](FollowedShowsApi.md#user_follows_shows_show_id_put) | **PUT** /user/follows/shows/{show_id} | Follow a show


# **user_follows_shows_get**
> List[ShowFollow] user_follows_shows_get(embed=embed)

List the followed shows

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.show_follow import ShowFollow
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
    api_instance = openapi_client.FollowedShowsApi(api_client)
    embed = 'embed_example' # str | Embed full show info (optional)

    try:
        # List the followed shows
        api_response = api_instance.user_follows_shows_get(embed=embed)
        print("The response of FollowedShowsApi->user_follows_shows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedShowsApi->user_follows_shows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embed** | **str**| Embed full show info | [optional] 

### Return type

[**List[ShowFollow]**](ShowFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of followed shows |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_shows_show_id_delete**
> user_follows_shows_show_id_delete(show_id)

Unfollow a show

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
    api_instance = openapi_client.FollowedShowsApi(api_client)
    show_id = 56 # int | 

    try:
        # Unfollow a show
        api_instance.user_follows_shows_show_id_delete(show_id)
    except Exception as e:
        print("Exception when calling FollowedShowsApi->user_follows_shows_show_id_delete: %s\n" % e)
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
**200** | The show is now unfollowed |  -  |
**404** | This show was not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_shows_show_id_get**
> ShowFollow user_follows_shows_show_id_get(show_id)

Check if a show is followed

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.show_follow import ShowFollow
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
    api_instance = openapi_client.FollowedShowsApi(api_client)
    show_id = 56 # int | 

    try:
        # Check if a show is followed
        api_response = api_instance.user_follows_shows_show_id_get(show_id)
        print("The response of FollowedShowsApi->user_follows_shows_show_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedShowsApi->user_follows_shows_show_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**|  | 

### Return type

[**ShowFollow**](ShowFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The followed show |  -  |
**404** | This show is not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_shows_show_id_put**
> ShowFollow user_follows_shows_show_id_put(show_id)

Follow a show

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.show_follow import ShowFollow
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
    api_instance = openapi_client.FollowedShowsApi(api_client)
    show_id = 56 # int | 

    try:
        # Follow a show
        api_response = api_instance.user_follows_shows_show_id_put(show_id)
        print("The response of FollowedShowsApi->user_follows_shows_show_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedShowsApi->user_follows_shows_show_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**|  | 

### Return type

[**ShowFollow**](ShowFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This show is now followed |  -  |
**404** | This show does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

