# openapi_client.WebhooksApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_webhook_by_id**](WebhooksApi.md#get_webhook_by_id) | **GET** /webhooks/{webhookId} | Get Webhook by Id
[**webhooks_get**](WebhooksApi.md#webhooks_get) | **GET** /webhooks | Get Webhooks
[**webhooks_post**](WebhooksApi.md#webhooks_post) | **POST** /webhooks | Create Webhook
[**webhooks_webhook_id_delete**](WebhooksApi.md#webhooks_webhook_id_delete) | **DELETE** /webhooks/{webhookId} | Delete Webhook by Id
[**webhooks_webhook_id_disable_post**](WebhooksApi.md#webhooks_webhook_id_disable_post) | **POST** /webhooks/{webhookId}/disable | Ability to enable a webHook.
[**webhooks_webhook_id_enable_post**](WebhooksApi.md#webhooks_webhook_id_enable_post) | **POST** /webhooks/{webhookId}/enable | Ability to disable a webHook.
[**webhooks_webhook_id_put**](WebhooksApi.md#webhooks_webhook_id_put) | **PUT** /webhooks/{webhookId} | Update Webhook by Id


# **get_webhook_by_id**
> str get_webhook_by_id(webhook_id)

Get Webhook by Id

Returns information of the webhook specified by the passed id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Id of the outbound webhook to be retrieved.

    try:
        # Get Webhook by Id
        api_response = api_instance.get_webhook_by_id(webhook_id)
        print("The response of WebhooksApi->get_webhook_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_webhook_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Id of the outbound webhook to be retrieved. | 

### Return type

**str**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request was successful and response body contains information about the requested webhook. |  -  |
**400** | The passed webhook id was either empty or null. |  -  |
**404** | The webhook was not found. |  -  |
**500** | Internal has occured. The response body may contain more information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_get**
> List[WebhookInfo] webhooks_get(team_id=team_id)

Get Webhooks

Returns a collection of defined outbound webhooks in the system.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.webhook_info import WebhookInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    team_id = 'team_id_example' # str |  (optional)

    try:
        # Get Webhooks
        api_response = api_instance.webhooks_get(team_id=team_id)
        print("The response of WebhooksApi->webhooks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  | [optional] 

### Return type

[**List[WebhookInfo]**](WebhookInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request was successful and response body contains information about all outbound webhooks in the subscription. |  -  |
**404** | The subscription does not have any outbound webhooks. |  -  |
**500** | Internal has occured. The response body may contain more information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_post**
> str webhooks_post(webhook_base_info=webhook_base_info)

Create Webhook

Creates a new outbound webhook that will be notified when certain events occur.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.webhook_base_info import WebhookBaseInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    webhook_base_info = openapi_client.WebhookBaseInfo() # WebhookBaseInfo | Json object that contains the external URL of the webhook. (optional)

    try:
        # Create Webhook
        api_response = api_instance.webhooks_post(webhook_base_info=webhook_base_info)
        print("The response of WebhooksApi->webhooks_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_base_info** | [**WebhookBaseInfo**](WebhookBaseInfo.md)| Json object that contains the external URL of the webhook. | [optional] 

### Return type

**str**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Action was successful and response contains the id of the newly created webhook. |  -  |
**400** | Either the webhook object or a necessary property was invalid or empty. |  -  |
**500** | Internal has occured. The response body may contain more information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_webhook_id_delete**
> webhooks_webhook_id_delete(webhook_id)

Delete Webhook by Id

Deletes the specified webhook so that it will no longer be notified.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Id of the outbound webhook that will be deleted.

    try:
        # Delete Webhook by Id
        api_instance.webhooks_webhook_id_delete(webhook_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_webhook_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Id of the outbound webhook that will be deleted. | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook was successfully deleted. |  -  |
**400** | The passed webhook id was invalid or empty. |  -  |
**404** | Webhook with specified id was not found. |  -  |
**500** | Internal has occured. The response body may contain more information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_webhook_id_disable_post**
> WebhookInfo webhooks_webhook_id_disable_post(webhook_id)

Ability to enable a webHook.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.webhook_info import WebhookInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Webhook ID for webhook which should be disabled.

    try:
        # Ability to enable a webHook.
        api_response = api_instance.webhooks_webhook_id_disable_post(webhook_id)
        print("The response of WebhooksApi->webhooks_webhook_id_disable_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_webhook_id_disable_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Webhook ID for webhook which should be disabled. | 

### Return type

[**WebhookInfo**](WebhookInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Disable was successful and response body contains the webhook details. |  -  |
**400** | A passed parameter was either empty or null. |  -  |
**404** | Webhook with specified id was not found. |  -  |
**500** | Internal has occured. The response body may contain more information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_webhook_id_enable_post**
> WebhookInfo webhooks_webhook_id_enable_post(webhook_id)

Ability to disable a webHook.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.webhook_info import WebhookInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Webhook ID for webhook which should be enabled.

    try:
        # Ability to disable a webHook.
        api_response = api_instance.webhooks_webhook_id_enable_post(webhook_id)
        print("The response of WebhooksApi->webhooks_webhook_id_enable_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_webhook_id_enable_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Webhook ID for webhook which should be enabled. | 

### Return type

[**WebhookInfo**](WebhookInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_webhook_id_put**
> WebhookInfo webhooks_webhook_id_put(webhook_id, webhook_base_info=webhook_base_info)

Update Webhook by Id

Updates the specified webhook.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.webhook_base_info import WebhookBaseInfo
from openapi_client.models.webhook_info import WebhookInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Id of the outbound webhook to be updated.
    webhook_base_info = openapi_client.WebhookBaseInfo() # WebhookBaseInfo | Json object containing the updated URL of the webhook. (optional)

    try:
        # Update Webhook by Id
        api_response = api_instance.webhooks_webhook_id_put(webhook_id, webhook_base_info=webhook_base_info)
        print("The response of WebhooksApi->webhooks_webhook_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_webhook_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Id of the outbound webhook to be updated. | 
 **webhook_base_info** | [**WebhookBaseInfo**](WebhookBaseInfo.md)| Json object containing the updated URL of the webhook. | [optional] 

### Return type

[**WebhookInfo**](WebhookInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update was successful and response body contains the updated webhook details. |  -  |
**400** | A passed parameter was either empty or null. |  -  |
**404** | Webhook with specified id was not found. |  -  |
**500** | Internal has occured. The response body may contain more information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

