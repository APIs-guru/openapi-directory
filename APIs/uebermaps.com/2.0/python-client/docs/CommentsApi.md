# openapi_client.CommentsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comments_id_delete**](CommentsApi.md#comments_id_delete) | **DELETE** /comments/{id} | Delete comment
[**comments_id_patch**](CommentsApi.md#comments_id_patch) | **PATCH** /comments/{id} | Update comment
[**maps_id_comments_get**](CommentsApi.md#maps_id_comments_get) | **GET** /maps/{id}/comments | List comments for a given map
[**maps_id_comments_post**](CommentsApi.md#maps_id_comments_post) | **POST** /maps/{id}/comments | Create map comment
[**spots_id_comments_get**](CommentsApi.md#spots_id_comments_get) | **GET** /spots/{id}/comments | List comments for a given spot
[**spots_id_comments_post**](CommentsApi.md#spots_id_comments_post) | **POST** /spots/{id}/comments | Create spot comment


# **comments_id_delete**
> Comment comments_id_delete(id)

Delete comment

Delete comment.

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | Comment id

    try:
        # Delete comment
        api_response = api_instance.comments_id_delete(id)
        print("The response of CommentsApi->comments_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->comments_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Comment id | 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted comment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **comments_id_patch**
> Comment comments_id_patch(id, comment=comment)

Update comment

Update comment. Wrap comment parameters in [comment].

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.models.comment_editable import CommentEditable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | Comment id
    comment = openapi_client.CommentEditable() # CommentEditable | Comment attributes (optional)

    try:
        # Update comment
        api_response = api_instance.comments_id_patch(id, comment=comment)
        print("The response of CommentsApi->comments_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->comments_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Comment id | 
 **comment** | [**CommentEditable**](CommentEditable.md)| Comment attributes | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains comment data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_comments_get**
> List[Comment] maps_id_comments_get(id)

List comments for a given map

List comments for a given map.

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | Id of map

    try:
        # List comments for a given map
        api_response = api_instance.maps_id_comments_get(id)
        print("The response of CommentsApi->maps_id_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->maps_id_comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of map | 

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
**200** | Contains list of comments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_comments_post**
> Comment maps_id_comments_post(id, comment=comment)

Create map comment

Create map comment. Wrap comment parameters in [comment].

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.models.comment_editable import CommentEditable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | map id
    comment = openapi_client.CommentEditable() # CommentEditable | comment attributes (optional)

    try:
        # Create map comment
        api_response = api_instance.maps_id_comments_post(id, comment=comment)
        print("The response of CommentsApi->maps_id_comments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->maps_id_comments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| map id | 
 **comment** | [**CommentEditable**](CommentEditable.md)| comment attributes | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains comment data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_comments_get**
> List[Comment] spots_id_comments_get(id)

List comments for a given spot

List comments for a given spot.

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | Id of spot

    try:
        # List comments for a given spot
        api_response = api_instance.spots_id_comments_get(id)
        print("The response of CommentsApi->spots_id_comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->spots_id_comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of spot | 

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
**200** | Contains list of comments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_comments_post**
> Comment spots_id_comments_post(id, comment=comment)

Create spot comment

Create spot comment. Wrap comment parameters in [comment].

### Example


```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.models.comment_editable import CommentEditable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 56 # int | spot id
    comment = openapi_client.CommentEditable() # CommentEditable | comment attributes (optional)

    try:
        # Create spot comment
        api_response = api_instance.spots_id_comments_post(id, comment=comment)
        print("The response of CommentsApi->spots_id_comments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentsApi->spots_id_comments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| spot id | 
 **comment** | [**CommentEditable**](CommentEditable.md)| comment attributes | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains comment data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

