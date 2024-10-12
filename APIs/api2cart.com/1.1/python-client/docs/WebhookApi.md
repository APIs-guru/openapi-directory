# openapi_client.WebhookApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhook_count**](WebhookApi.md#webhook_count) | **GET** /webhook.count.json | 
[**webhook_create**](WebhookApi.md#webhook_create) | **POST** /webhook.create.json | 
[**webhook_delete**](WebhookApi.md#webhook_delete) | **DELETE** /webhook.delete.json | 
[**webhook_events**](WebhookApi.md#webhook_events) | **GET** /webhook.events.json | 
[**webhook_list**](WebhookApi.md#webhook_list) | **GET** /webhook.list.json | 
[**webhook_update**](WebhookApi.md#webhook_update) | **PUT** /webhook.update.json | 


# **webhook_count**
> WebhookCount200Response webhook_count(entity=entity, action=action, active=active)



Count registered webhooks on the store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.webhook_count200_response import WebhookCount200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhookApi(api_client)
    entity = 'entity_example' # str | The entity you want to filter webhooks by (e.g. order or product) (optional)
    action = 'action_example' # str | The action you want to filter webhooks by (e.g. order or product) (optional)
    active = True # bool | The webhook status you want to filter webhooks by (optional)

    try:
        api_response = api_instance.webhook_count(entity=entity, action=action, active=active)
        print("The response of WebhookApi->webhook_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->webhook_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **str**| The entity you want to filter webhooks by (e.g. order or product) | [optional] 
 **action** | **str**| The action you want to filter webhooks by (e.g. order or product) | [optional] 
 **active** | **bool**| The webhook status you want to filter webhooks by | [optional] 

### Return type

[**WebhookCount200Response**](WebhookCount200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhook_create**
> AttributeAdd200Response webhook_create(entity, action, param_callback=param_callback, label=label, fields=fields, active=active, store_id=store_id)



Create webhook on the store and subscribe to it.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_add200_response import AttributeAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhookApi(api_client)
    entity = 'entity_example' # str | Specify the entity that you want to enable webhooks for (e.g product, order, customer, category)
    action = 'action_example' # str | Specify what action (event) will trigger the webhook (e.g add, delete, or update)
    param_callback = 'param_callback_example' # str | Callback url that returns shipping rates. It should be able to accept POST requests with json data. (optional)
    label = 'label_example' # str | The name you give to the webhook (optional)
    fields = 'force_all' # str | Fields the webhook should send (optional) (default to 'force_all')
    active = True # bool | Webhook status (optional) (default to True)
    store_id = 'store_id_example' # str | Defines store id where the webhook should be assigned (optional)

    try:
        api_response = api_instance.webhook_create(entity, action, param_callback=param_callback, label=label, fields=fields, active=active, store_id=store_id)
        print("The response of WebhookApi->webhook_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->webhook_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity** | **str**| Specify the entity that you want to enable webhooks for (e.g product, order, customer, category) | 
 **action** | **str**| Specify what action (event) will trigger the webhook (e.g add, delete, or update) | 
 **param_callback** | **str**| Callback url that returns shipping rates. It should be able to accept POST requests with json data. | [optional] 
 **label** | **str**| The name you give to the webhook | [optional] 
 **fields** | **str**| Fields the webhook should send | [optional] [default to &#39;force_all&#39;]
 **active** | **bool**| Webhook status | [optional] [default to True]
 **store_id** | **str**| Defines store id where the webhook should be assigned | [optional] 

### Return type

[**AttributeAdd200Response**](AttributeAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhook_delete**
> AttributeDelete200Response webhook_delete(id)



Delete registered webhook on the store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhookApi(api_client)
    id = 'id_example' # str | Webhook id

    try:
        api_response = api_instance.webhook_delete(id)
        print("The response of WebhookApi->webhook_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->webhook_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id | 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhook_events**
> WebhookEvents200Response webhook_events()



List all Webhooks that are available on this store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.webhook_events200_response import WebhookEvents200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhookApi(api_client)

    try:
        api_response = api_instance.webhook_events()
        print("The response of WebhookApi->webhook_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->webhook_events: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**WebhookEvents200Response**](WebhookEvents200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhook_list**
> WebhookList200Response webhook_list(params=params, start=start, count=count, entity=entity, action=action, active=active, ids=ids)



List registered webhook on the store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.webhook_list200_response import WebhookList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhookApi(api_client)
    params = 'id,entity,action,callback' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,entity,action,callback')
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    entity = 'entity_example' # str | The entity you want to filter webhooks by (e.g. order or product) (optional)
    action = 'action_example' # str | The action you want to filter webhooks by (e.g. add, update, or delete) (optional)
    active = True # bool | The webhook status you want to filter webhooks by (optional)
    ids = 'ids_example' # str | List of сomma-separated webhook ids (optional)

    try:
        api_response = api_instance.webhook_list(params=params, start=start, count=count, entity=entity, action=action, active=active, ids=ids)
        print("The response of WebhookApi->webhook_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->webhook_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,entity,action,callback&#39;]
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **entity** | **str**| The entity you want to filter webhooks by (e.g. order or product) | [optional] 
 **action** | **str**| The action you want to filter webhooks by (e.g. add, update, or delete) | [optional] 
 **active** | **bool**| The webhook status you want to filter webhooks by | [optional] 
 **ids** | **str**| List of сomma-separated webhook ids | [optional] 

### Return type

[**WebhookList200Response**](WebhookList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhook_update**
> ProductImageUpdate200Response webhook_update(id, param_callback=param_callback, label=label, fields=fields, active=active)



Update Webhooks parameters.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.product_image_update200_response import ProductImageUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhookApi(api_client)
    id = 'id_example' # str | Webhook id
    param_callback = 'param_callback_example' # str | Callback url that returns shipping rates. It should be able to accept POST requests with json data. (optional)
    label = 'label_example' # str | The name you give to the webhook (optional)
    fields = 'fields_example' # str | Fields the webhook should send (optional)
    active = True # bool | Webhook status (optional)

    try:
        api_response = api_instance.webhook_update(id, param_callback=param_callback, label=label, fields=fields, active=active)
        print("The response of WebhookApi->webhook_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookApi->webhook_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Webhook id | 
 **param_callback** | **str**| Callback url that returns shipping rates. It should be able to accept POST requests with json data. | [optional] 
 **label** | **str**| The name you give to the webhook | [optional] 
 **fields** | **str**| Fields the webhook should send | [optional] 
 **active** | **bool**| Webhook status | [optional] 

### Return type

[**ProductImageUpdate200Response**](ProductImageUpdate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

