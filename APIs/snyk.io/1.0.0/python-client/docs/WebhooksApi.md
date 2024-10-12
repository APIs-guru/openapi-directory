# openapi_client.WebhooksApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_a_webhook**](WebhooksApi.md#create_a_webhook) | **POST** /org/{orgId}/webhooks | Create a webhook
[**delete_a_webhook**](WebhooksApi.md#delete_a_webhook) | **DELETE** /org/{orgId}/webhooks/{webhookId} | Delete a webhook
[**list_webhooks**](WebhooksApi.md#list_webhooks) | **GET** /org/{orgId}/webhooks | List webhooks
[**ping_a_webhook**](WebhooksApi.md#ping_a_webhook) | **POST** /org/{orgId}/webhooks/{webhookId}/ping | Ping a webhook
[**retrieve_a_webhook**](WebhooksApi.md#retrieve_a_webhook) | **GET** /org/{orgId}/webhooks/{webhookId} | Retrieve a webhook


# **create_a_webhook**
> create_a_webhook(org_id, create_a_webhook_request=create_a_webhook_request)

Create a webhook



### Example


```python
import openapi_client
from openapi_client.models.create_a_webhook_request import CreateAWebhookRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list projects for. The `API_KEY` must have access to this organization.
    create_a_webhook_request = openapi_client.CreateAWebhookRequest() # CreateAWebhookRequest |  (optional)

    try:
        # Create a webhook
        api_instance.create_a_webhook(org_id, create_a_webhook_request=create_a_webhook_request)
    except Exception as e:
        print("Exception when calling WebhooksApi->create_a_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list projects for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **create_a_webhook_request** | [**CreateAWebhookRequest**](CreateAWebhookRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_a_webhook**
> delete_a_webhook(org_id, webhook_id)

Delete a webhook



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    webhook_id = 'webhook_id_example' # str | Automatically added

    try:
        # Delete a webhook
        api_instance.delete_a_webhook(org_id, webhook_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_a_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **webhook_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_webhooks**
> list_webhooks(org_id)

List webhooks



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list projects for. The `API_KEY` must have access to this organization.

    try:
        # List webhooks
        api_instance.list_webhooks(org_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->list_webhooks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list projects for. The &#x60;API_KEY&#x60; must have access to this organization. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ping_a_webhook**
> ping_a_webhook(org_id, webhook_id)

Ping a webhook



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID the project belongs to. The `API_KEY` must have access to this organization.
    webhook_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The webhook ID.

    try:
        # Ping a webhook
        api_instance.ping_a_webhook(org_id, webhook_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->ping_a_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID the project belongs to. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **webhook_id** | **str**| The webhook ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_a_webhook**
> retrieve_a_webhook(org_id, webhook_id)

Retrieve a webhook



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID the project belongs to. The `API_KEY` must have access to this organization.
    webhook_id = '463c1ee5-31bc-428c-b451-b79a3270db08' # str | The webhook ID.

    try:
        # Retrieve a webhook
        api_instance.retrieve_a_webhook(org_id, webhook_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->retrieve_a_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID the project belongs to. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **webhook_id** | **str**| The webhook ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

