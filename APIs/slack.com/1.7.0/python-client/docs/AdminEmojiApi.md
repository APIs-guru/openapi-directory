# openapi_client.AdminEmojiApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_emoji_add**](AdminEmojiApi.md#admin_emoji_add) | **POST** /admin.emoji.add | 
[**admin_emoji_add_alias**](AdminEmojiApi.md#admin_emoji_add_alias) | **POST** /admin.emoji.addAlias | 
[**admin_emoji_list**](AdminEmojiApi.md#admin_emoji_list) | **GET** /admin.emoji.list | 
[**admin_emoji_remove**](AdminEmojiApi.md#admin_emoji_remove) | **POST** /admin.emoji.remove | 
[**admin_emoji_rename**](AdminEmojiApi.md#admin_emoji_rename) | **POST** /admin.emoji.rename | 


# **admin_emoji_add**
> DefaultSuccessTemplate admin_emoji_add(name, token, url)



Add an emoji.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminEmojiApi(api_client)
    name = 'name_example' # str | The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`
    url = 'url_example' # str | The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.

    try:
        api_response = api_instance.admin_emoji_add(name, token, url)
        print("The response of AdminEmojiApi->admin_emoji_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminEmojiApi->admin_emoji_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the emoji to be removed. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 
 **url** | **str**| The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

# **admin_emoji_add_alias**
> DefaultSuccessTemplate admin_emoji_add_alias(alias_for, name, token)



Add an emoji alias.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminEmojiApi(api_client)
    alias_for = 'alias_for_example' # str | The alias of the emoji.
    name = 'name_example' # str | The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`

    try:
        api_response = api_instance.admin_emoji_add_alias(alias_for, name, token)
        print("The response of AdminEmojiApi->admin_emoji_add_alias:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminEmojiApi->admin_emoji_add_alias: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias_for** | **str**| The alias of the emoji. | 
 **name** | **str**| The name of the emoji to be aliased. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

# **admin_emoji_list**
> DefaultSuccessTemplate admin_emoji_list(token, cursor=cursor, limit=limit)



List emoji for an Enterprise Grid organization.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminEmojiApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:read`
    cursor = 'cursor_example' # str | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page (optional)
    limit = 56 # int | The maximum number of items to return. Must be between 1 - 1000 both inclusive. (optional)

    try:
        api_response = api_instance.admin_emoji_list(token, cursor=cursor, limit=limit)
        print("The response of AdminEmojiApi->admin_emoji_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminEmojiApi->admin_emoji_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:read&#x60; | 
 **cursor** | **str**| Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page | [optional] 
 **limit** | **int**| The maximum number of items to return. Must be between 1 - 1000 both inclusive. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

# **admin_emoji_remove**
> DefaultSuccessTemplate admin_emoji_remove(name, token)



Remove an emoji across an Enterprise Grid organization

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminEmojiApi(api_client)
    name = 'name_example' # str | The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`

    try:
        api_response = api_instance.admin_emoji_remove(name, token)
        print("The response of AdminEmojiApi->admin_emoji_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminEmojiApi->admin_emoji_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the emoji to be removed. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

# **admin_emoji_rename**
> DefaultSuccessTemplate admin_emoji_rename(name, new_name, token)



Rename an emoji.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.AdminEmojiApi(api_client)
    name = 'name_example' # str | The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.
    new_name = 'new_name_example' # str | The new name of the emoji.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`

    try:
        api_response = api_instance.admin_emoji_rename(name, new_name, token)
        print("The response of AdminEmojiApi->admin_emoji_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminEmojiApi->admin_emoji_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the emoji to be renamed. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included. | 
 **new_name** | **str**| The new name of the emoji. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

