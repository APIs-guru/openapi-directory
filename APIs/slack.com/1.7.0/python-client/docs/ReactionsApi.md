# openapi_client.ReactionsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reactions_add**](ReactionsApi.md#reactions_add) | **POST** /reactions.add | 
[**reactions_get**](ReactionsApi.md#reactions_get) | **GET** /reactions.get | 
[**reactions_list**](ReactionsApi.md#reactions_list) | **GET** /reactions.list | 
[**reactions_remove**](ReactionsApi.md#reactions_remove) | **POST** /reactions.remove | 


# **reactions_add**
> ReactionsAddSchema reactions_add(token, channel, name, timestamp)



Adds a reaction to an item.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reactions_add_schema import ReactionsAddSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReactionsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reactions:write`
    channel = 'channel_example' # str | Channel where the message to add reaction to was posted.
    name = 'name_example' # str | Reaction (emoji) name.
    timestamp = 'timestamp_example' # str | Timestamp of the message to add reaction to.

    try:
        api_response = api_instance.reactions_add(token, channel, name, timestamp)
        print("The response of ReactionsApi->reactions_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->reactions_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reactions:write&#x60; | 
 **channel** | **str**| Channel where the message to add reaction to was posted. | 
 **name** | **str**| Reaction (emoji) name. | 
 **timestamp** | **str**| Timestamp of the message to add reaction to. | 

### Return type

[**ReactionsAddSchema**](ReactionsAddSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reactions_get**
> List[ReactionsGetSuccessSchemaInner] reactions_get(token, channel=channel, file=file, file_comment=file_comment, full=full, timestamp=timestamp)



Gets reactions for an item.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reactions_get_success_schema_inner import ReactionsGetSuccessSchemaInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReactionsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reactions:read`
    channel = 'channel_example' # str | Channel where the message to get reactions for was posted. (optional)
    file = 'file_example' # str | File to get reactions for. (optional)
    file_comment = 'file_comment_example' # str | File comment to get reactions for. (optional)
    full = True # bool | If true always return the complete reaction list. (optional)
    timestamp = 'timestamp_example' # str | Timestamp of the message to get reactions for. (optional)

    try:
        api_response = api_instance.reactions_get(token, channel=channel, file=file, file_comment=file_comment, full=full, timestamp=timestamp)
        print("The response of ReactionsApi->reactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->reactions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reactions:read&#x60; | 
 **channel** | **str**| Channel where the message to get reactions for was posted. | [optional] 
 **file** | **str**| File to get reactions for. | [optional] 
 **file_comment** | **str**| File comment to get reactions for. | [optional] 
 **full** | **bool**| If true always return the complete reaction list. | [optional] 
 **timestamp** | **str**| Timestamp of the message to get reactions for. | [optional] 

### Return type

[**List[ReactionsGetSuccessSchemaInner]**](ReactionsGetSuccessSchemaInner.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reactions_list**
> ReactionsListSchema reactions_list(token, user=user, full=full, count=count, page=page, cursor=cursor, limit=limit)



Lists reactions made by a user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reactions_list_schema import ReactionsListSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReactionsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reactions:read`
    user = 'user_example' # str | Show reactions made by this user. Defaults to the authed user. (optional)
    full = True # bool | If true always return the complete reaction list. (optional)
    count = 56 # int |  (optional)
    page = 56 # int |  (optional)
    cursor = 'cursor_example' # str | Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more details. (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. (optional)

    try:
        api_response = api_instance.reactions_list(token, user=user, full=full, count=count, page=page, cursor=cursor, limit=limit)
        print("The response of ReactionsApi->reactions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->reactions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reactions:read&#x60; | 
 **user** | **str**| Show reactions made by this user. Defaults to the authed user. | [optional] 
 **full** | **bool**| If true always return the complete reaction list. | [optional] 
 **count** | **int**|  | [optional] 
 **page** | **int**|  | [optional] 
 **cursor** | **str**| Parameter for pagination. Set &#x60;cursor&#x60; equal to the &#x60;next_cursor&#x60; attribute returned by the previous request&#39;s &#x60;response_metadata&#x60;. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more details. | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn&#39;t been reached. | [optional] 

### Return type

[**ReactionsListSchema**](ReactionsListSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reactions_remove**
> ReactionsRemoveSchema reactions_remove(token, name, channel=channel, file=file, file_comment=file_comment, timestamp=timestamp)



Removes a reaction from an item.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reactions_remove_schema import ReactionsRemoveSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReactionsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reactions:write`
    name = 'name_example' # str | Reaction (emoji) name.
    channel = 'channel_example' # str | Channel where the message to remove reaction from was posted. (optional)
    file = 'file_example' # str | File to remove reaction from. (optional)
    file_comment = 'file_comment_example' # str | File comment to remove reaction from. (optional)
    timestamp = 'timestamp_example' # str | Timestamp of the message to remove reaction from. (optional)

    try:
        api_response = api_instance.reactions_remove(token, name, channel=channel, file=file, file_comment=file_comment, timestamp=timestamp)
        print("The response of ReactionsApi->reactions_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReactionsApi->reactions_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reactions:write&#x60; | 
 **name** | **str**| Reaction (emoji) name. | 
 **channel** | **str**| Channel where the message to remove reaction from was posted. | [optional] 
 **file** | **str**| File to remove reaction from. | [optional] 
 **file_comment** | **str**| File comment to remove reaction from. | [optional] 
 **timestamp** | **str**| Timestamp of the message to remove reaction from. | [optional] 

### Return type

[**ReactionsRemoveSchema**](ReactionsRemoveSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

