# openapi_client.ChannelsApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_offering_id_analytics_channels_channel_id_comments_get**](ChannelsApi.md#offerings_offering_id_analytics_channels_channel_id_comments_get) | **GET** /offerings/{offeringId}/analytics/channels/{channelId}/comments | Find comments
[**offerings_offering_id_analytics_channels_channel_id_posts_get**](ChannelsApi.md#offerings_offering_id_analytics_channels_channel_id_posts_get) | **GET** /offerings/{offeringId}/analytics/channels/{channelId}/posts | Find posts
[**offerings_offering_id_analytics_channels_channel_id_replies_get**](ChannelsApi.md#offerings_offering_id_analytics_channels_channel_id_replies_get) | **GET** /offerings/{offeringId}/analytics/channels/{channelId}/replies | Find replies
[**offerings_offering_id_channels_channel_id_learners_delete**](ChannelsApi.md#offerings_offering_id_channels_channel_id_learners_delete) | **DELETE** /offerings/{offeringId}/channels/{channelId}/learners | Remove learners from a group channel
[**offerings_offering_id_channels_channel_id_learners_get**](ChannelsApi.md#offerings_offering_id_channels_channel_id_learners_get) | **GET** /offerings/{offeringId}/channels/{channelId}/learners | Find learners in a group channel
[**offerings_offering_id_channels_channel_id_learners_post**](ChannelsApi.md#offerings_offering_id_channels_channel_id_learners_post) | **POST** /offerings/{offeringId}/channels/{channelId}/learners | Add learners to a group channel
[**offerings_offering_id_channels_channel_id_patch**](ChannelsApi.md#offerings_offering_id_channels_channel_id_patch) | **PATCH** /offerings/{offeringId}/channels/{channelId} | Update channel
[**offerings_offering_id_channels_get**](ChannelsApi.md#offerings_offering_id_channels_get) | **GET** /offerings/{offeringId}/channels | Find channels
[**offerings_offering_id_channels_post**](ChannelsApi.md#offerings_offering_id_channels_post) | **POST** /offerings/{offeringId}/channels | Add channel


# **offerings_offering_id_analytics_channels_channel_id_comments_get**
> List[Comment] offerings_offering_id_analytics_channels_channel_id_comments_get(offering_id, channel_id)

Find comments

Responds with a list of comments made in any posts in a specified channel, within an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id

    try:
        # Find comments
        api_response = api_instance.offerings_offering_id_analytics_channels_channel_id_comments_get(offering_id, channel_id)
        print("The response of ChannelsApi->offerings_offering_id_analytics_channels_channel_id_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_analytics_channels_channel_id_comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 

### Return type

[**List[Comment]**](Comment.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_channels_channel_id_posts_get**
> List[HttpPost] offerings_offering_id_analytics_channels_channel_id_posts_get(offering_id, channel_id)

Find posts

Responds with a list of posts made in a specified channel, within an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.http_post import HttpPost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id

    try:
        # Find posts
        api_response = api_instance.offerings_offering_id_analytics_channels_channel_id_posts_get(offering_id, channel_id)
        print("The response of ChannelsApi->offerings_offering_id_analytics_channels_channel_id_posts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_analytics_channels_channel_id_posts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 

### Return type

[**List[HttpPost]**](HttpPost.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_analytics_channels_channel_id_replies_get**
> List[Comment] offerings_offering_id_analytics_channels_channel_id_replies_get(offering_id, channel_id)

Find replies

Responds with a list of replies to comments in any posts in a specified channel, within an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id

    try:
        # Find replies
        api_response = api_instance.offerings_offering_id_analytics_channels_channel_id_replies_get(offering_id, channel_id)
        print("The response of ChannelsApi->offerings_offering_id_analytics_channels_channel_id_replies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_analytics_channels_channel_id_replies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 

### Return type

[**List[Comment]**](Comment.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_channels_channel_id_learners_delete**
> offerings_offering_id_channels_channel_id_learners_delete(offering_id, channel_id, offerings_offering_id_channels_channel_id_learners_post_request)

Remove learners from a group channel

Removes a learner from the specified group channel.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offerings_offering_id_channels_channel_id_learners_post_request import OfferingsOfferingIdChannelsChannelIdLearnersPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id
    offerings_offering_id_channels_channel_id_learners_post_request = openapi_client.OfferingsOfferingIdChannelsChannelIdLearnersPostRequest() # OfferingsOfferingIdChannelsChannelIdLearnersPostRequest | 

    try:
        # Remove learners from a group channel
        api_instance.offerings_offering_id_channels_channel_id_learners_delete(offering_id, channel_id, offerings_offering_id_channels_channel_id_learners_post_request)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_channels_channel_id_learners_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 
 **offerings_offering_id_channels_channel_id_learners_post_request** | [**OfferingsOfferingIdChannelsChannelIdLearnersPostRequest**](OfferingsOfferingIdChannelsChannelIdLearnersPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Learner successfully removed from the channel. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_channels_channel_id_learners_get**
> ChannelResponse offerings_offering_id_channels_channel_id_learners_get(offering_id, channel_id)

Find learners in a group channel

Finds all learners in a specified group channel.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id

    try:
        # Find learners in a group channel
        api_response = api_instance.offerings_offering_id_channels_channel_id_learners_get(offering_id, channel_id)
        print("The response of ChannelsApi->offerings_offering_id_channels_channel_id_learners_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_channels_channel_id_learners_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | channel data |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_channels_channel_id_learners_post**
> offerings_offering_id_channels_channel_id_learners_post(offering_id, channel_id, offerings_offering_id_channels_channel_id_learners_post_request)

Add learners to a group channel

Adds a learner to a specified group channel.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offerings_offering_id_channels_channel_id_learners_post_request import OfferingsOfferingIdChannelsChannelIdLearnersPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id
    offerings_offering_id_channels_channel_id_learners_post_request = openapi_client.OfferingsOfferingIdChannelsChannelIdLearnersPostRequest() # OfferingsOfferingIdChannelsChannelIdLearnersPostRequest | 

    try:
        # Add learners to a group channel
        api_instance.offerings_offering_id_channels_channel_id_learners_post(offering_id, channel_id, offerings_offering_id_channels_channel_id_learners_post_request)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_channels_channel_id_learners_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 
 **offerings_offering_id_channels_channel_id_learners_post_request** | [**OfferingsOfferingIdChannelsChannelIdLearnersPostRequest**](OfferingsOfferingIdChannelsChannelIdLearnersPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Learner successfully added to the channel. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_channels_channel_id_patch**
> ChannelResponse offerings_offering_id_channels_channel_id_patch(offering_id, channel_id, channel)

Update channel

Updates a channel in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_id = 'channel_id_example' # str | channel's id
    channel = openapi_client.Channel() # Channel | 

    try:
        # Update channel
        api_response = api_instance.offerings_offering_id_channels_channel_id_patch(offering_id, channel_id, channel)
        print("The response of ChannelsApi->offerings_offering_id_channels_channel_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_channels_channel_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_id** | **str**| channel&#39;s id | 
 **channel** | [**Channel**](Channel.md)|  | 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | channel successfully updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_channels_get**
> List[ChannelResponse] offerings_offering_id_channels_get(offering_id)

Find channels

Responds with a list of channels in an offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find channels
        api_response = api_instance.offerings_offering_id_channels_get(offering_id)
        print("The response of ChannelsApi->offerings_offering_id_channels_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_channels_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**List[ChannelResponse]**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Succesful response |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_channels_post**
> ChannelResponse offerings_offering_id_channels_post(offering_id, channel_required)

Add channel

Adds new channel to the specified offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.channel_required import ChannelRequired
from openapi_client.models.channel_response import ChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    channel_required = openapi_client.ChannelRequired() # ChannelRequired | 

    try:
        # Add channel
        api_response = api_instance.offerings_offering_id_channels_post(offering_id, channel_required)
        print("The response of ChannelsApi->offerings_offering_id_channels_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->offerings_offering_id_channels_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **channel_required** | [**ChannelRequired**](ChannelRequired.md)|  | 

### Return type

[**ChannelResponse**](ChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | channel successfully added |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

