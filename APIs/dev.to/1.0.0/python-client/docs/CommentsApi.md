# openapi_client.CommentsApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_comment_by_id**](CommentsApi.md#get_comment_by_id) | **GET** /api/comments/{id} | Comment by id
[**get_comments_by_article_id**](CommentsApi.md#get_comments_by_article_id) | **GET** /api/comments | Comments


# **get_comment_by_id**
> get_comment_by_id(id)

Comment by id

This endpoint allows the client to retrieve a comment as well as his descendants comments.    It will return the required comment (the root) with its nested descendants as a thread.    See the format specification for further details.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 321 # int | Comment identifier.

    try:
        # Comment by id
        api_instance.get_comment_by_id(id)
    except Exception as e:
        print("Exception when calling CommentsApi->get_comment_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Comment identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the Comments |  -  |
**404** | Comment Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_comments_by_article_id**
> List[Comment] get_comments_by_article_id(a_id=a_id, p_id=p_id)

Comments

This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.  It will return the all top level comments with their nested comments as threads. See the format specification for further details.

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    a_id = '321' # str | Article identifier. (optional)
    p_id = '321' # str | Podcast Episode identifier. (optional)

    try:
        # Comments
        api_response = api_instance.get_comments_by_article_id(a_id=a_id, p_id=p_id)
        print("The response of CommentsApi->get_comments_by_article_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->get_comments_by_article_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **a_id** | **str**| Article identifier. | [optional] 
 **p_id** | **str**| Podcast Episode identifier. | [optional] 

### Return type

[**List[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of Comments |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

