# openapi_client.OutgoingWebhooksApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_presence_web_hook**](OutgoingWebhooksApi.md#add_presence_web_hook) | **POST** /webhooks/presence | Registers Presence WebHook registration
[**add_web_hook**](OutgoingWebhooksApi.md#add_web_hook) | **POST** /webhooks | Registers a WebHook
[**get_web_hook**](OutgoingWebhooksApi.md#get_web_hook) | **GET** /webhooks | Gets a list of webHooks
[**get_web_hook_by_id**](OutgoingWebhooksApi.md#get_web_hook_by_id) | **GET** /webhooks/{id} | Gets a webHook
[**remove_web_hook**](OutgoingWebhooksApi.md#remove_web_hook) | **DELETE** /webhooks/{id} | Removes a registered webHook
[**remove_web_hooks**](OutgoingWebhooksApi.md#remove_web_hooks) | **DELETE** /webhooks | Removes all webHooks
[**update_presence_web_hook**](OutgoingWebhooksApi.md#update_presence_web_hook) | **PUT** /webhooks/presence/{id} | Updates a Presence WebHook registration
[**update_web_hook**](OutgoingWebhooksApi.md#update_web_hook) | **PUT** /webhooks/{id} | Updates a WebHook registration


# **add_presence_web_hook**
> WebHook add_presence_web_hook(url, user_ids)

Registers Presence WebHook registration

Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.web_hook import WebHook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)
    url = 'url_example' # str | WebHook callback URL
    user_ids = ['user_ids_example'] # List[str] | The IDs of the users to subscribe for their presence

    try:
        # Registers Presence WebHook registration
        api_response = api_instance.add_presence_web_hook(url, user_ids)
        print("The response of OutgoingWebhooksApi->add_presence_web_hook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->add_presence_web_hook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| WebHook callback URL | 
 **user_ids** | [**List[str]**](str.md)| The IDs of the users to subscribe for their presence | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The webHook was successfully registered |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;an invalid URL&lt;/li&gt;&lt;li&gt;one or more invalid userIds&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**403** | The maximum number of allowed userIds is reached or the maximum number of allowed webHook is reached |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_web_hook**
> WebHook add_web_hook(filter, url)

Registers a WebHook

Registers the webHook with the given filter and callback URL. OauthScopes: READ_CONVERSATIONS, READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.web_hook import WebHook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)
    filter = ['filter_example'] # List[str] | A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE
    url = 'url_example' # str | WebHook callback URL

    try:
        # Registers a WebHook
        api_response = api_instance.add_web_hook(filter, url)
        print("The response of OutgoingWebhooksApi->add_web_hook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->add_web_hook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**List[str]**](str.md)| A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE | 
 **url** | **str**| WebHook callback URL | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The webHook was successfully registered |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;an invalid URL&lt;/li&gt;&lt;li&gt;an invalid event filter&lt;/li&gt;&lt;li&gt;an unsupported event filter&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**403** | The maximum number of allowed webHook is reached |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_web_hook**
> List[WebHook] get_web_hook()

Gets a list of webHooks

Gets the list of webHooks registered for this user or API. OauthScopes: READ_CONVERSATIONS, READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.web_hook import WebHook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)

    try:
        # Gets a list of webHooks
        api_response = api_instance.get_web_hook()
        print("The response of OutgoingWebhooksApi->get_web_hook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->get_web_hook: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[WebHook]**](WebHook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of registered webHooks |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_web_hook_by_id**
> WebHook get_web_hook_by_id(id)

Gets a webHook

Gets the registered webHook with the given ID. OauthScopes: READ_CONVERSATIONS, READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.web_hook import WebHook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)
    id = 'id_example' # str | The unique ID of the webHook to fetch

    try:
        # Gets a webHook
        api_response = api_instance.get_web_hook_by_id(id)
        print("The response of OutgoingWebhooksApi->get_web_hook_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->get_web_hook_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID of the webHook to fetch | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The registered webHook with the given ID |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the data format of the given id does not match a UUID&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | The webHook does not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_web_hook**
> remove_web_hook(id)

Removes a registered webHook

Unregisters the webHook with the given ID. OauthScopes: READ_CONVERSATIONS, READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)
    id = 'id_example' # str | The unique ID of the webHook to remove

    try:
        # Removes a registered webHook
        api_instance.remove_web_hook(id)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->remove_web_hook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID of the webHook to remove | 

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The operation was successful |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the data format of the given id does not match a UUID&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | The webHook does not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_web_hooks**
> remove_web_hooks()

Removes all webHooks

Unregisters all webHooks of the authenticated user OauthScopes: READ_CONVERSATIONS, READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)

    try:
        # Removes all webHooks
        api_instance.remove_web_hooks()
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->remove_web_hooks: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The operation was successful |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_presence_web_hook**
> WebHook update_presence_web_hook(id, url=url, user_ids=user_ids)

Updates a Presence WebHook registration

Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds. OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.web_hook import WebHook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)
    id = 'id_example' # str | The unique ID of the webHook to update
    url = 'url_example' # str | WebHook callback URL (optional)
    user_ids = ['user_ids_example'] # List[str] | The IDs of the users to subscribe for their presence (optional)

    try:
        # Updates a Presence WebHook registration
        api_response = api_instance.update_presence_web_hook(id, url=url, user_ids=user_ids)
        print("The response of OutgoingWebhooksApi->update_presence_web_hook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->update_presence_web_hook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID of the webHook to update | 
 **url** | **str**| WebHook callback URL | [optional] 
 **user_ids** | [**List[str]**](str.md)| The IDs of the users to subscribe for their presence | [optional] 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The webHook registration was successfully updated |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;an invalid URL&lt;/li&gt;&lt;li&gt;one or more invalid userIds&lt;/li&gt;&lt;li&gt;no input parameter is provided&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**403** | The maximum number of allowed userIds is reached |  -  |
**404** | The webHook does not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_web_hook**
> WebHook update_web_hook(id, filter=filter, url=url)

Updates a WebHook registration

Updates a webHook registration with the given filter and callback URL. OauthScopes: READ_CONVERSATIONS, READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.web_hook import WebHook
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OutgoingWebhooksApi(api_client)
    id = 'id_example' # str | The unique ID of the webHook to update
    filter = ['filter_example'] # List[str] | A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE (optional)
    url = 'url_example' # str | WebHook callback URL (optional)

    try:
        # Updates a WebHook registration
        api_response = api_instance.update_web_hook(id, filter=filter, url=url)
        print("The response of OutgoingWebhooksApi->update_web_hook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OutgoingWebhooksApi->update_web_hook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID of the webHook to update | 
 **filter** | [**List[str]**](str.md)| A filter for WebHooks that checks for a list of configured events. This filter will use a regular expression to determine if it is interested in the events or not. The event itself is converted into a string of format AREA.EVENT. Examples: CONVERSATION.CREATE / USER.UPDATE | [optional] 
 **url** | **str**| WebHook callback URL | [optional] 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The webHook registration was successfully updated |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;an invalid URL&lt;/li&gt;&lt;li&gt;an invalid event filter&lt;/li&gt;&lt;li&gt;an unsupported event filter&lt;/li&gt;&lt;li&gt;no input parameter is provided&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | The webHook does not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

