# openapi_client.StarsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stars_add**](StarsApi.md#stars_add) | **POST** /stars.add | 
[**stars_list**](StarsApi.md#stars_list) | **GET** /stars.list | 
[**stars_remove**](StarsApi.md#stars_remove) | **POST** /stars.remove | 


# **stars_add**
> StarsAddSchema stars_add(token, channel=channel, file=file, file_comment=file_comment, timestamp=timestamp)



Adds a star to an item.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.stars_add_schema import StarsAddSchema
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
    api_instance = openapi_client.StarsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `stars:write`
    channel = 'channel_example' # str | Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`). (optional)
    file = 'file_example' # str | File to add star to. (optional)
    file_comment = 'file_comment_example' # str | File comment to add star to. (optional)
    timestamp = 'timestamp_example' # str | Timestamp of the message to add star to. (optional)

    try:
        api_response = api_instance.stars_add(token, channel=channel, file=file, file_comment=file_comment, timestamp=timestamp)
        print("The response of StarsApi->stars_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarsApi->stars_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;stars:write&#x60; | 
 **channel** | **str**| Channel to add star to, or channel where the message to add star to was posted (used with &#x60;timestamp&#x60;). | [optional] 
 **file** | **str**| File to add star to. | [optional] 
 **file_comment** | **str**| File comment to add star to. | [optional] 
 **timestamp** | **str**| Timestamp of the message to add star to. | [optional] 

### Return type

[**StarsAddSchema**](StarsAddSchema.md)

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

# **stars_list**
> StarsListSchema stars_list(token=token, count=count, page=page, cursor=cursor, limit=limit)



Lists stars for a user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.stars_list_schema import StarsListSchema
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
    api_instance = openapi_client.StarsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `stars:read` (optional)
    count = 'count_example' # str |  (optional)
    page = 'page_example' # str |  (optional)
    cursor = 'cursor_example' # str | Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more details. (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. (optional)

    try:
        api_response = api_instance.stars_list(token=token, count=count, page=page, cursor=cursor, limit=limit)
        print("The response of StarsApi->stars_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarsApi->stars_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;stars:read&#x60; | [optional] 
 **count** | **str**|  | [optional] 
 **page** | **str**|  | [optional] 
 **cursor** | **str**| Parameter for pagination. Set &#x60;cursor&#x60; equal to the &#x60;next_cursor&#x60; attribute returned by the previous request&#39;s &#x60;response_metadata&#x60;. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more details. | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn&#39;t been reached. | [optional] 

### Return type

[**StarsListSchema**](StarsListSchema.md)

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

# **stars_remove**
> StarsRemoveSchema stars_remove(token, channel=channel, file=file, file_comment=file_comment, timestamp=timestamp)



Removes a star from an item.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.stars_remove_schema import StarsRemoveSchema
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
    api_instance = openapi_client.StarsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `stars:write`
    channel = 'channel_example' # str | Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`). (optional)
    file = 'file_example' # str | File to remove star from. (optional)
    file_comment = 'file_comment_example' # str | File comment to remove star from. (optional)
    timestamp = 'timestamp_example' # str | Timestamp of the message to remove star from. (optional)

    try:
        api_response = api_instance.stars_remove(token, channel=channel, file=file, file_comment=file_comment, timestamp=timestamp)
        print("The response of StarsApi->stars_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarsApi->stars_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;stars:write&#x60; | 
 **channel** | **str**| Channel to remove star from, or channel where the message to remove star from was posted (used with &#x60;timestamp&#x60;). | [optional] 
 **file** | **str**| File to remove star from. | [optional] 
 **file_comment** | **str**| File comment to remove star from. | [optional] 
 **timestamp** | **str**| Timestamp of the message to remove star from. | [optional] 

### Return type

[**StarsRemoveSchema**](StarsRemoveSchema.md)

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

