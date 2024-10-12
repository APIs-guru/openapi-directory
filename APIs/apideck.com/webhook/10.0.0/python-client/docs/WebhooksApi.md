# openapi_client.WebhooksApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_logs_all**](WebhooksApi.md#event_logs_all) | **GET** /webhook/logs | List event logs
[**webhooks_add**](WebhooksApi.md#webhooks_add) | **POST** /webhook/webhooks | Create webhook subscription
[**webhooks_all**](WebhooksApi.md#webhooks_all) | **GET** /webhook/webhooks | List webhook subscriptions
[**webhooks_delete**](WebhooksApi.md#webhooks_delete) | **DELETE** /webhook/webhooks/{id} | Delete webhook subscription
[**webhooks_one**](WebhooksApi.md#webhooks_one) | **GET** /webhook/webhooks/{id} | Get webhook subscription
[**webhooks_update**](WebhooksApi.md#webhooks_update) | **PATCH** /webhook/webhooks/{id} | Update webhook subscription


# **event_logs_all**
> GetWebhookEventLogsResponse event_logs_all(x_apideck_app_id, cursor=cursor, limit=limit, filter=filter)

List event logs

List event logs

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_webhook_event_logs_response import GetWebhookEventLogsResponse
from openapi_client.models.webhook_event_logs_filter import WebhookEventLogsFilter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)
    filter = openapi_client.WebhookEventLogsFilter() # WebhookEventLogsFilter | Filter results (optional)

    try:
        # List event logs
        api_response = api_instance.event_logs_all(x_apideck_app_id, cursor=cursor, limit=limit, filter=filter)
        print("The response of WebhooksApi->event_logs_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->event_logs_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]
 **filter** | [**WebhookEventLogsFilter**](.md)| Filter results | [optional] 

### Return type

[**GetWebhookEventLogsResponse**](GetWebhookEventLogsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | EventLogs |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_add**
> CreateWebhookResponse webhooks_add(x_apideck_app_id, create_webhook_request)

Create webhook subscription

Create a webhook subscription to receive events

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.create_webhook_request import CreateWebhookRequest
from openapi_client.models.create_webhook_response import CreateWebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    create_webhook_request = openapi_client.CreateWebhookRequest() # CreateWebhookRequest | 

    try:
        # Create webhook subscription
        api_response = api_instance.webhooks_add(x_apideck_app_id, create_webhook_request)
        print("The response of WebhooksApi->webhooks_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **create_webhook_request** | [**CreateWebhookRequest**](CreateWebhookRequest.md)|  | 

### Return type

[**CreateWebhookResponse**](CreateWebhookResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Webhooks |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_all**
> GetWebhooksResponse webhooks_all(x_apideck_app_id, cursor=cursor, limit=limit)

List webhook subscriptions

List all webhook subscriptions

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_webhooks_response import GetWebhooksResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)

    try:
        # List webhook subscriptions
        api_response = api_instance.webhooks_all(x_apideck_app_id, cursor=cursor, limit=limit)
        print("The response of WebhooksApi->webhooks_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]

### Return type

[**GetWebhooksResponse**](GetWebhooksResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhooks |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_delete**
> DeleteWebhookResponse webhooks_delete(id, x_apideck_app_id)

Delete webhook subscription

Delete a webhook subscription

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.delete_webhook_response import DeleteWebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application

    try:
        # Delete webhook subscription
        api_response = api_instance.webhooks_delete(id, x_apideck_app_id)
        print("The response of WebhooksApi->webhooks_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 

### Return type

[**DeleteWebhookResponse**](DeleteWebhookResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhooks |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_one**
> GetWebhookResponse webhooks_one(id, x_apideck_app_id)

Get webhook subscription

Get the webhook subscription details

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_webhook_response import GetWebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application

    try:
        # Get webhook subscription
        api_response = api_instance.webhooks_one(id, x_apideck_app_id)
        print("The response of WebhooksApi->webhooks_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 

### Return type

[**GetWebhookResponse**](GetWebhookResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhooks |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_update**
> UpdateWebhookResponse webhooks_update(id, x_apideck_app_id, update_webhook_request)

Update webhook subscription

Update a webhook subscription

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.update_webhook_request import UpdateWebhookRequest
from openapi_client.models.update_webhook_response import UpdateWebhookResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    id = 'id_example' # str | JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    update_webhook_request = openapi_client.UpdateWebhookRequest() # UpdateWebhookRequest | 

    try:
        # Update webhook subscription
        api_response = api_instance.webhooks_update(id, x_apideck_app_id, update_webhook_request)
        print("The response of WebhooksApi->webhooks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| JWT Webhook token that represents the unifiedApi and applicationId associated to the event source. | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **update_webhook_request** | [**UpdateWebhookRequest**](UpdateWebhookRequest.md)|  | 

### Return type

[**UpdateWebhookResponse**](UpdateWebhookResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhooks |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

