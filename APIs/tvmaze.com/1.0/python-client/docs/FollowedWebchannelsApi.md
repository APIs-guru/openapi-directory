# openapi_client.FollowedWebchannelsApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_follows_webchannels_get**](FollowedWebchannelsApi.md#user_follows_webchannels_get) | **GET** /user/follows/webchannels | List the followed webchannels
[**user_follows_webchannels_webchannel_id_delete**](FollowedWebchannelsApi.md#user_follows_webchannels_webchannel_id_delete) | **DELETE** /user/follows/webchannels/{webchannel_id} | Unfollow a webchannel
[**user_follows_webchannels_webchannel_id_get**](FollowedWebchannelsApi.md#user_follows_webchannels_webchannel_id_get) | **GET** /user/follows/webchannels/{webchannel_id} | Check if a webchannel is followed
[**user_follows_webchannels_webchannel_id_put**](FollowedWebchannelsApi.md#user_follows_webchannels_webchannel_id_put) | **PUT** /user/follows/webchannels/{webchannel_id} | Follow a webchannel


# **user_follows_webchannels_get**
> List[WebchannelFollow] user_follows_webchannels_get(embed=embed)

List the followed webchannels

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.webchannel_follow import WebchannelFollow
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
    api_instance = openapi_client.FollowedWebchannelsApi(api_client)
    embed = 'embed_example' # str | Embed full webchannel info (optional)

    try:
        # List the followed webchannels
        api_response = api_instance.user_follows_webchannels_get(embed=embed)
        print("The response of FollowedWebchannelsApi->user_follows_webchannels_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedWebchannelsApi->user_follows_webchannels_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **embed** | **str**| Embed full webchannel info | [optional] 

### Return type

[**List[WebchannelFollow]**](WebchannelFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of followed webchannels |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_webchannels_webchannel_id_delete**
> user_follows_webchannels_webchannel_id_delete(webchannel_id)

Unfollow a webchannel

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
    api_instance = openapi_client.FollowedWebchannelsApi(api_client)
    webchannel_id = 56 # int | 

    try:
        # Unfollow a webchannel
        api_instance.user_follows_webchannels_webchannel_id_delete(webchannel_id)
    except Exception as e:
        print("Exception when calling FollowedWebchannelsApi->user_follows_webchannels_webchannel_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webchannel_id** | **int**|  | 

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
**200** | the webchannel is now unfollowed |  -  |
**404** | this webchannel was not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_webchannels_webchannel_id_get**
> WebchannelFollow user_follows_webchannels_webchannel_id_get(webchannel_id)

Check if a webchannel is followed

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.webchannel_follow import WebchannelFollow
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
    api_instance = openapi_client.FollowedWebchannelsApi(api_client)
    webchannel_id = 56 # int | 

    try:
        # Check if a webchannel is followed
        api_response = api_instance.user_follows_webchannels_webchannel_id_get(webchannel_id)
        print("The response of FollowedWebchannelsApi->user_follows_webchannels_webchannel_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedWebchannelsApi->user_follows_webchannels_webchannel_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webchannel_id** | **int**|  | 

### Return type

[**WebchannelFollow**](WebchannelFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The followed webchannel |  -  |
**404** | this webchannel is not followed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_follows_webchannels_webchannel_id_put**
> WebchannelFollow user_follows_webchannels_webchannel_id_put(webchannel_id)

Follow a webchannel

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.webchannel_follow import WebchannelFollow
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
    api_instance = openapi_client.FollowedWebchannelsApi(api_client)
    webchannel_id = 56 # int | 

    try:
        # Follow a webchannel
        api_response = api_instance.user_follows_webchannels_webchannel_id_put(webchannel_id)
        print("The response of FollowedWebchannelsApi->user_follows_webchannels_webchannel_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FollowedWebchannelsApi->user_follows_webchannels_webchannel_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webchannel_id** | **int**|  | 

### Return type

[**WebchannelFollow**](WebchannelFollow.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | this webchannel is now followed |  -  |
**404** | this webchannel does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

