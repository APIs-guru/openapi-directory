# openapi_client.EndpointApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_endpoint_api_v1_app_app_id_endpoint_post**](EndpointApi.md#create_endpoint_api_v1_app_app_id_endpoint_post) | **POST** /api/v1/app/{app_id}/endpoint/ | Create Endpoint
[**delete_endpoint_api_v1_app_app_id_endpoint_endpoint_id_delete**](EndpointApi.md#delete_endpoint_api_v1_app_app_id_endpoint_endpoint_id_delete) | **DELETE** /api/v1/app/{app_id}/endpoint/{endpoint_id}/ | Delete Endpoint
[**get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get**](EndpointApi.md#get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get) | **GET** /api/v1/app/{app_id}/endpoint/{endpoint_id}/ | Get Endpoint
[**get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get**](EndpointApi.md#get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get) | **GET** /api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/ | Get Endpoint Headers
[**get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get**](EndpointApi.md#get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get) | **GET** /api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/ | Get Endpoint Secret
[**get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get**](EndpointApi.md#get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get) | **GET** /api/v1/app/{app_id}/endpoint/{endpoint_id}/stats/ | Get Endpoint Stats
[**get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get**](EndpointApi.md#get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get) | **GET** /api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/ | Get Endpoint Transformation
[**list_endpoints_api_v1_app_app_id_endpoint_get**](EndpointApi.md#list_endpoints_api_v1_app_app_id_endpoint_get) | **GET** /api/v1/app/{app_id}/endpoint/ | List Endpoints
[**patch_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_patch**](EndpointApi.md#patch_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_patch) | **PATCH** /api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/ | Patch Endpoint Headers
[**recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post**](EndpointApi.md#recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post) | **POST** /api/v1/app/{app_id}/endpoint/{endpoint_id}/recover/ | Recover Failed Webhooks
[**replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post**](EndpointApi.md#replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post) | **POST** /api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing/ | Replay Missing Webhooks
[**rotate_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_rotate_post**](EndpointApi.md#rotate_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_rotate_post) | **POST** /api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate/ | Rotate Endpoint Secret
[**send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post**](EndpointApi.md#send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post) | **POST** /api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example/ | Send Event Type Example Message
[**set_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_patch**](EndpointApi.md#set_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_patch) | **PATCH** /api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation/ | Set Endpoint Transformation
[**update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put**](EndpointApi.md#update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put) | **PUT** /api/v1/app/{app_id}/endpoint/{endpoint_id}/ | Update Endpoint
[**update_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_put**](EndpointApi.md#update_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_put) | **PUT** /api/v1/app/{app_id}/endpoint/{endpoint_id}/headers/ | Update Endpoint Headers


# **create_endpoint_api_v1_app_app_id_endpoint_post**
> EndpointOut create_endpoint_api_v1_app_app_id_endpoint_post(app_id, endpoint_in, idempotency_key=idempotency_key)

Create Endpoint

Create a new endpoint for the application.  When `secret` is `null` the secret is automatically generated (recommended)

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_in import EndpointIn
from openapi_client.models.endpoint_out import EndpointOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_in = openapi_client.EndpointIn() # EndpointIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Create Endpoint
        api_response = api_instance.create_endpoint_api_v1_app_app_id_endpoint_post(app_id, endpoint_in, idempotency_key=idempotency_key)
        print("The response of EndpointApi->create_endpoint_api_v1_app_app_id_endpoint_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->create_endpoint_api_v1_app_app_id_endpoint_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_in** | [**EndpointIn**](EndpointIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_endpoint_api_v1_app_app_id_endpoint_endpoint_id_delete**
> delete_endpoint_api_v1_app_app_id_endpoint_endpoint_id_delete(endpoint_id, app_id, idempotency_key=idempotency_key)

Delete Endpoint

Delete an endpoint.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Delete Endpoint
        api_instance.delete_endpoint_api_v1_app_app_id_endpoint_endpoint_id_delete(endpoint_id, app_id, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling EndpointApi->delete_endpoint_api_v1_app_app_id_endpoint_endpoint_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get**
> EndpointOut get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get(endpoint_id, app_id, idempotency_key=idempotency_key)

Get Endpoint

Get an application.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_out import EndpointOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Endpoint
        api_response = api_instance.get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get(endpoint_id, app_id, idempotency_key=idempotency_key)
        print("The response of EndpointApi->get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->get_endpoint_api_v1_app_app_id_endpoint_endpoint_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get**
> EndpointHeadersOut get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get(endpoint_id, app_id, idempotency_key=idempotency_key)

Get Endpoint Headers

Get the additional headers to be sent with the webhook

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_headers_out import EndpointHeadersOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Endpoint Headers
        api_response = api_instance.get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get(endpoint_id, app_id, idempotency_key=idempotency_key)
        print("The response of EndpointApi->get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->get_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointHeadersOut**](EndpointHeadersOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get**
> EndpointSecretOut get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get(endpoint_id, app_id, idempotency_key=idempotency_key)

Get Endpoint Secret

Get the endpoint's signing secret.  This is used to verify the authenticity of the webhook. For more information please refer to [the consuming webhooks docs](https://docs.svix.com/consuming-webhooks/).

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_secret_out import EndpointSecretOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Endpoint Secret
        api_response = api_instance.get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get(endpoint_id, app_id, idempotency_key=idempotency_key)
        print("The response of EndpointApi->get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->get_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointSecretOut**](EndpointSecretOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get**
> EndpointStats get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get(endpoint_id, app_id, since=since, until=until, idempotency_key=idempotency_key)

Get Endpoint Stats

Get basic statistics for the endpoint.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_stats import EndpointStats
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    since = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    until = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Endpoint Stats
        api_response = api_instance.get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get(endpoint_id, app_id, since=since, until=until, idempotency_key=idempotency_key)
        print("The response of EndpointApi->get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->get_endpoint_stats_api_v1_app_app_id_endpoint_endpoint_id_stats_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **since** | **datetime**|  | [optional] 
 **until** | **datetime**|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointStats**](EndpointStats.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get**
> EndpointTransformationOut get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get(endpoint_id, app_id, idempotency_key=idempotency_key)

Get Endpoint Transformation

Get the transformation code associated with this endpoint

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_transformation_out import EndpointTransformationOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Endpoint Transformation
        api_response = api_instance.get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get(endpoint_id, app_id, idempotency_key=idempotency_key)
        print("The response of EndpointApi->get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->get_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointTransformationOut**](EndpointTransformationOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_endpoints_api_v1_app_app_id_endpoint_get**
> ListResponseEndpointOut list_endpoints_api_v1_app_app_id_endpoint_get(app_id, iterator=iterator, limit=limit, order=order, idempotency_key=idempotency_key)

List Endpoints

List the application's endpoints.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_endpoint_out import ListResponseEndpointOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    order = openapi_client.Ordering() # Ordering |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Endpoints
        api_response = api_instance.list_endpoints_api_v1_app_app_id_endpoint_get(app_id, iterator=iterator, limit=limit, order=order, idempotency_key=idempotency_key)
        print("The response of EndpointApi->list_endpoints_api_v1_app_app_id_endpoint_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->list_endpoints_api_v1_app_app_id_endpoint_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **order** | [**Ordering**](.md)|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseEndpointOut**](ListResponseEndpointOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_patch**
> patch_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_patch(app_id, endpoint_id, endpoint_headers_patch_in, idempotency_key=idempotency_key)

Patch Endpoint Headers

Partially set the additional headers to be sent with the webhook

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_headers_patch_in import EndpointHeadersPatchIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_headers_patch_in = openapi_client.EndpointHeadersPatchIn() # EndpointHeadersPatchIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Patch Endpoint Headers
        api_instance.patch_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_patch(app_id, endpoint_id, endpoint_headers_patch_in, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling EndpointApi->patch_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **endpoint_headers_patch_in** | [**EndpointHeadersPatchIn**](EndpointHeadersPatchIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post**
> RecoverOut recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post(app_id, endpoint_id, recover_in, idempotency_key=idempotency_key)

Recover Failed Webhooks

Resend all failed messages since a given time.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.recover_in import RecoverIn
from openapi_client.models.recover_out import RecoverOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    recover_in = openapi_client.RecoverIn() # RecoverIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Recover Failed Webhooks
        api_response = api_instance.recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post(app_id, endpoint_id, recover_in, idempotency_key=idempotency_key)
        print("The response of EndpointApi->recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->recover_failed_webhooks_api_v1_app_app_id_endpoint_endpoint_id_recover_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **recover_in** | [**RecoverIn**](RecoverIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**RecoverOut**](RecoverOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post**
> ReplayOut replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post(app_id, endpoint_id, replay_in, idempotency_key=idempotency_key)

Replay Missing Webhooks

Replays messages to the endpoint. Only messages that were created after `since` will be sent. Messages that were previously sent to the endpoint are not resent.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.replay_in import ReplayIn
from openapi_client.models.replay_out import ReplayOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    replay_in = openapi_client.ReplayIn() # ReplayIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Replay Missing Webhooks
        api_response = api_instance.replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post(app_id, endpoint_id, replay_in, idempotency_key=idempotency_key)
        print("The response of EndpointApi->replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->replay_missing_webhooks_api_v1_app_app_id_endpoint_endpoint_id_replay_missing_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **replay_in** | [**ReplayIn**](ReplayIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ReplayOut**](ReplayOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_rotate_post**
> rotate_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_rotate_post(endpoint_id, app_id, endpoint_secret_rotate_in, idempotency_key=idempotency_key)

Rotate Endpoint Secret

Rotates the endpoint's signing secret.  The previous secret will be valid for the next 24 hours.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_secret_rotate_in import EndpointSecretRotateIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_secret_rotate_in = openapi_client.EndpointSecretRotateIn() # EndpointSecretRotateIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Rotate Endpoint Secret
        api_instance.rotate_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_rotate_post(endpoint_id, app_id, endpoint_secret_rotate_in, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling EndpointApi->rotate_endpoint_secret_api_v1_app_app_id_endpoint_endpoint_id_secret_rotate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **endpoint_secret_rotate_in** | [**EndpointSecretRotateIn**](EndpointSecretRotateIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post**
> MessageOut send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post(app_id, endpoint_id, event_example_in, idempotency_key=idempotency_key)

Send Event Type Example Message

Send an example message for event

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.event_example_in import EventExampleIn
from openapi_client.models.message_out import MessageOut
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    event_example_in = openapi_client.EventExampleIn() # EventExampleIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Send Event Type Example Message
        api_response = api_instance.send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post(app_id, endpoint_id, event_example_in, idempotency_key=idempotency_key)
        print("The response of EndpointApi->send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->send_event_type_example_message_api_v1_app_app_id_endpoint_endpoint_id_send_example_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **event_example_in** | [**EventExampleIn**](EventExampleIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**MessageOut**](MessageOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_patch**
> set_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_patch(app_id, endpoint_id, endpoint_transformation_in, idempotency_key=idempotency_key)

Set Endpoint Transformation

Set or unset the transformation code associated with this endpoint

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_transformation_in import EndpointTransformationIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_transformation_in = openapi_client.EndpointTransformationIn() # EndpointTransformationIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Set Endpoint Transformation
        api_instance.set_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_patch(app_id, endpoint_id, endpoint_transformation_in, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling EndpointApi->set_endpoint_transformation_api_v1_app_app_id_endpoint_endpoint_id_transformation_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **endpoint_transformation_in** | [**EndpointTransformationIn**](EndpointTransformationIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put**
> EndpointOut update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put(endpoint_id, app_id, endpoint_update, idempotency_key=idempotency_key)

Update Endpoint

Update an endpoint.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_out import EndpointOut
from openapi_client.models.endpoint_update import EndpointUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_update = openapi_client.EndpointUpdate() # EndpointUpdate | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Update Endpoint
        api_response = api_instance.update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put(endpoint_id, app_id, endpoint_update, idempotency_key=idempotency_key)
        print("The response of EndpointApi->update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndpointApi->update_endpoint_api_v1_app_app_id_endpoint_endpoint_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpoint_id** | **str**|  | 
 **app_id** | **str**|  | 
 **endpoint_update** | [**EndpointUpdate**](EndpointUpdate.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_put**
> update_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_put(app_id, endpoint_id, endpoint_headers_in, idempotency_key=idempotency_key)

Update Endpoint Headers

Set the additional headers to be sent with the webhook

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.endpoint_headers_in import EndpointHeadersIn
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EndpointApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_id = 'ep_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    endpoint_headers_in = openapi_client.EndpointHeadersIn() # EndpointHeadersIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Update Endpoint Headers
        api_instance.update_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_put(app_id, endpoint_id, endpoint_headers_in, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling EndpointApi->update_endpoint_headers_api_v1_app_app_id_endpoint_endpoint_id_headers_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **endpoint_id** | **str**|  | 
 **endpoint_headers_in** | [**EndpointHeadersIn**](EndpointHeadersIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

void (empty response body)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

