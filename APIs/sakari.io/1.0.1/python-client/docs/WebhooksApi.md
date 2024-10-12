# openapi_client.WebhooksApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooks_fetch_all**](WebhooksApi.md#webhooks_fetch_all) | **GET** /v1/accounts/{accountId}/webhooks | Fetch active webhooks
[**webhooks_subscribe**](WebhooksApi.md#webhooks_subscribe) | **POST** /v1/accounts/{accountId}/webhooks | Subscribe to message events
[**webhooks_unsubscribe**](WebhooksApi.md#webhooks_unsubscribe) | **DELETE** /v1/accounts/{accountId}/webhooks/{url} | Unsubscribe to message events


# **webhooks_fetch_all**
> WebhooksResponse webhooks_fetch_all(account_id)

Fetch active webhooks

When messages are acknowledge by carriers, a notification is sent to the specified URL

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.webhooks_response import WebhooksResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
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
    account_id = 'account_id_example' # str | Account to apply operations to

    try:
        # Fetch active webhooks
        api_response = api_instance.webhooks_fetch_all(account_id)
        print("The response of WebhooksApi->webhooks_fetch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_fetch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 

### Return type

[**WebhooksResponse**](WebhooksResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_subscribe**
> WebhookResponse webhooks_subscribe(account_id, webhooks_subscribe_request)

Subscribe to message events

When messages are acknowledge by carriers, a notification is sent to the specified URL

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.webhook_response import WebhookResponse
from openapi_client.models.webhooks_subscribe_request import WebhooksSubscribeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
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
    account_id = 'account_id_example' # str | Account to apply operations to
    webhooks_subscribe_request = openapi_client.WebhooksSubscribeRequest() # WebhooksSubscribeRequest | 

    try:
        # Subscribe to message events
        api_response = api_instance.webhooks_subscribe(account_id, webhooks_subscribe_request)
        print("The response of WebhooksApi->webhooks_subscribe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_subscribe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **webhooks_subscribe_request** | [**WebhooksSubscribeRequest**](WebhooksSubscribeRequest.md)|  | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_unsubscribe**
> webhooks_unsubscribe(account_id, url)

Unsubscribe to message events

Delete subscription for receiving notifications

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
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
    account_id = 'account_id_example' # str | Account to apply operations to
    url = 'url_example' # str | Account to apply operations to

    try:
        # Unsubscribe to message events
        api_instance.webhooks_unsubscribe(account_id, url)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_unsubscribe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **url** | **str**| Account to apply operations to | 

### Return type

void (empty response body)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

