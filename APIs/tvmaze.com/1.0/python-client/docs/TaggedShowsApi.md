# openapi_client.TaggedShowsApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_tags_get**](TaggedShowsApi.md#user_tags_get) | **GET** /user/tags | List all tags
[**user_tags_post**](TaggedShowsApi.md#user_tags_post) | **POST** /user/tags | Create a new tag
[**user_tags_tag_id_delete**](TaggedShowsApi.md#user_tags_tag_id_delete) | **DELETE** /user/tags/{tag_id} | Delete a specific tag
[**user_tags_tag_id_patch**](TaggedShowsApi.md#user_tags_tag_id_patch) | **PATCH** /user/tags/{tag_id} | Update a specific tag
[**user_tags_tag_id_shows_get**](TaggedShowsApi.md#user_tags_tag_id_shows_get) | **GET** /user/tags/{tag_id}/shows | List all shows under this tag
[**user_tags_tag_id_shows_show_id_delete**](TaggedShowsApi.md#user_tags_tag_id_shows_show_id_delete) | **DELETE** /user/tags/{tag_id}/shows/{show_id} | Untag a show
[**user_tags_tag_id_shows_show_id_put**](TaggedShowsApi.md#user_tags_tag_id_shows_show_id_put) | **PUT** /user/tags/{tag_id}/shows/{show_id} | Tag a show


# **user_tags_get**
> List[Tag] user_tags_get()

List all tags

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.TaggedShowsApi(api_client)

    try:
        # List all tags
        api_response = api_instance.user_tags_get()
        print("The response of TaggedShowsApi->user_tags_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Tag]**](Tag.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of tags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tags_post**
> Tag user_tags_post(tag=tag)

Create a new tag

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.TaggedShowsApi(api_client)
    tag = openapi_client.Tag() # Tag |  (optional)

    try:
        # Create a new tag
        api_response = api_instance.user_tags_post(tag=tag)
        print("The response of TaggedShowsApi->user_tags_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**Tag**](Tag.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly created tag |  -  |
**422** | invalid input data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tags_tag_id_delete**
> user_tags_tag_id_delete(tag_id)

Delete a specific tag

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
    api_instance = openapi_client.TaggedShowsApi(api_client)
    tag_id = 56 # int | 

    try:
        # Delete a specific tag
        api_instance.user_tags_tag_id_delete(tag_id)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_tag_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **int**|  | 

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
**200** | The tag was deleted |  -  |
**404** | The tag does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tags_tag_id_patch**
> Tag user_tags_tag_id_patch(tag_id, tag=tag)

Update a specific tag

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.tag import Tag
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
    api_instance = openapi_client.TaggedShowsApi(api_client)
    tag_id = 56 # int | 
    tag = openapi_client.Tag() # Tag |  (optional)

    try:
        # Update a specific tag
        api_response = api_instance.user_tags_tag_id_patch(tag_id, tag=tag)
        print("The response of TaggedShowsApi->user_tags_tag_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_tag_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **int**|  | 
 **tag** | [**Tag**](Tag.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag was updated |  -  |
**404** | The tag does not exist |  -  |
**422** | The tag could not be updated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tags_tag_id_shows_get**
> List[TagInstance] user_tags_tag_id_shows_get(tag_id, embed=embed)

List all shows under this tag

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.tag_instance import TagInstance
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
    api_instance = openapi_client.TaggedShowsApi(api_client)
    tag_id = 56 # int | 
    embed = 'embed_example' # str | Embed full show info (optional)

    try:
        # List all shows under this tag
        api_response = api_instance.user_tags_tag_id_shows_get(tag_id, embed=embed)
        print("The response of TaggedShowsApi->user_tags_tag_id_shows_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_tag_id_shows_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **int**|  | 
 **embed** | **str**| Embed full show info | [optional] 

### Return type

[**List[TagInstance]**](TagInstance.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of tagged shows |  -  |
**404** | The tag does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tags_tag_id_shows_show_id_delete**
> user_tags_tag_id_shows_show_id_delete(tag_id, show_id)

Untag a show

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
    api_instance = openapi_client.TaggedShowsApi(api_client)
    tag_id = 56 # int | 
    show_id = 56 # int | 

    try:
        # Untag a show
        api_instance.user_tags_tag_id_shows_show_id_delete(tag_id, show_id)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_tag_id_shows_show_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **int**|  | 
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
**200** | The show was untagged |  -  |
**404** | The show was not tagged |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_tags_tag_id_shows_show_id_put**
> TagInstance user_tags_tag_id_shows_show_id_put(tag_id, show_id)

Tag a show

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.tag_instance import TagInstance
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
    api_instance = openapi_client.TaggedShowsApi(api_client)
    tag_id = 56 # int | 
    show_id = 56 # int | 

    try:
        # Tag a show
        api_response = api_instance.user_tags_tag_id_shows_show_id_put(tag_id, show_id)
        print("The response of TaggedShowsApi->user_tags_tag_id_shows_show_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaggedShowsApi->user_tags_tag_id_shows_show_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag_id** | **int**|  | 
 **show_id** | **int**|  | 

### Return type

[**TagInstance**](TagInstance.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The show was tagged |  -  |
**404** | The show or tag does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

