# openapi_client.IntegrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_integration_api_v1_app_app_id_integration_post**](IntegrationApi.md#create_integration_api_v1_app_app_id_integration_post) | **POST** /api/v1/app/{app_id}/integration/ | Create Integration
[**delete_integration_api_v1_app_app_id_integration_integ_id_delete**](IntegrationApi.md#delete_integration_api_v1_app_app_id_integration_integ_id_delete) | **DELETE** /api/v1/app/{app_id}/integration/{integ_id}/ | Delete Integration
[**get_integration_api_v1_app_app_id_integration_integ_id_get**](IntegrationApi.md#get_integration_api_v1_app_app_id_integration_integ_id_get) | **GET** /api/v1/app/{app_id}/integration/{integ_id}/ | Get Integration
[**get_integration_key_api_v1_app_app_id_integration_integ_id_key_get**](IntegrationApi.md#get_integration_key_api_v1_app_app_id_integration_integ_id_key_get) | **GET** /api/v1/app/{app_id}/integration/{integ_id}/key/ | Get Integration Key
[**list_integrations_api_v1_app_app_id_integration_get**](IntegrationApi.md#list_integrations_api_v1_app_app_id_integration_get) | **GET** /api/v1/app/{app_id}/integration/ | List Integrations
[**rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post**](IntegrationApi.md#rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post) | **POST** /api/v1/app/{app_id}/integration/{integ_id}/key/rotate/ | Rotate Integration Key
[**update_integration_api_v1_app_app_id_integration_integ_id_put**](IntegrationApi.md#update_integration_api_v1_app_app_id_integration_integ_id_put) | **PUT** /api/v1/app/{app_id}/integration/{integ_id}/ | Update Integration


# **create_integration_api_v1_app_app_id_integration_post**
> IntegrationOut create_integration_api_v1_app_app_id_integration_post(app_id, integration_in, idempotency_key=idempotency_key)

Create Integration

Create an integration.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.integration_in import IntegrationIn
from openapi_client.models.integration_out import IntegrationOut
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
    api_instance = openapi_client.IntegrationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    integration_in = openapi_client.IntegrationIn() # IntegrationIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Create Integration
        api_response = api_instance.create_integration_api_v1_app_app_id_integration_post(app_id, integration_in, idempotency_key=idempotency_key)
        print("The response of IntegrationApi->create_integration_api_v1_app_app_id_integration_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationApi->create_integration_api_v1_app_app_id_integration_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **integration_in** | [**IntegrationIn**](IntegrationIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**IntegrationOut**](IntegrationOut.md)

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

# **delete_integration_api_v1_app_app_id_integration_integ_id_delete**
> delete_integration_api_v1_app_app_id_integration_integ_id_delete(integ_id, app_id, idempotency_key=idempotency_key)

Delete Integration

Delete an integration and revoke it's key.

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
    api_instance = openapi_client.IntegrationApi(api_client)
    integ_id = 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Delete Integration
        api_instance.delete_integration_api_v1_app_app_id_integration_integ_id_delete(integ_id, app_id, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling IntegrationApi->delete_integration_api_v1_app_app_id_integration_integ_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integ_id** | **str**|  | 
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

# **get_integration_api_v1_app_app_id_integration_integ_id_get**
> IntegrationOut get_integration_api_v1_app_app_id_integration_integ_id_get(integ_id, app_id, idempotency_key=idempotency_key)

Get Integration

Get an integration.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.integration_out import IntegrationOut
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
    api_instance = openapi_client.IntegrationApi(api_client)
    integ_id = 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Integration
        api_response = api_instance.get_integration_api_v1_app_app_id_integration_integ_id_get(integ_id, app_id, idempotency_key=idempotency_key)
        print("The response of IntegrationApi->get_integration_api_v1_app_app_id_integration_integ_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationApi->get_integration_api_v1_app_app_id_integration_integ_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integ_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**IntegrationOut**](IntegrationOut.md)

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

# **get_integration_key_api_v1_app_app_id_integration_integ_id_key_get**
> IntegrationKeyOut get_integration_key_api_v1_app_app_id_integration_integ_id_key_get(integ_id, app_id, idempotency_key=idempotency_key)

Get Integration Key

Get an integration's key.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.integration_key_out import IntegrationKeyOut
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
    api_instance = openapi_client.IntegrationApi(api_client)
    integ_id = 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Integration Key
        api_response = api_instance.get_integration_key_api_v1_app_app_id_integration_integ_id_key_get(integ_id, app_id, idempotency_key=idempotency_key)
        print("The response of IntegrationApi->get_integration_key_api_v1_app_app_id_integration_integ_id_key_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationApi->get_integration_key_api_v1_app_app_id_integration_integ_id_key_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integ_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**IntegrationKeyOut**](IntegrationKeyOut.md)

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

# **list_integrations_api_v1_app_app_id_integration_get**
> ListResponseIntegrationOut list_integrations_api_v1_app_app_id_integration_get(app_id, iterator=iterator, limit=limit, idempotency_key=idempotency_key)

List Integrations

List the application's integrations.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_integration_out import ListResponseIntegrationOut
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
    api_instance = openapi_client.IntegrationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    iterator = 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Integrations
        api_response = api_instance.list_integrations_api_v1_app_app_id_integration_get(app_id, iterator=iterator, limit=limit, idempotency_key=idempotency_key)
        print("The response of IntegrationApi->list_integrations_api_v1_app_app_id_integration_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationApi->list_integrations_api_v1_app_app_id_integration_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseIntegrationOut**](ListResponseIntegrationOut.md)

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

# **rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post**
> IntegrationKeyOut rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post(integ_id, app_id, idempotency_key=idempotency_key)

Rotate Integration Key

Rotate the integration's key. The previous key will be immediately revoked.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.integration_key_out import IntegrationKeyOut
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
    api_instance = openapi_client.IntegrationApi(api_client)
    integ_id = 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Rotate Integration Key
        api_response = api_instance.rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post(integ_id, app_id, idempotency_key=idempotency_key)
        print("The response of IntegrationApi->rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationApi->rotate_integration_key_api_v1_app_app_id_integration_integ_id_key_rotate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integ_id** | **str**|  | 
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**IntegrationKeyOut**](IntegrationKeyOut.md)

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

# **update_integration_api_v1_app_app_id_integration_integ_id_put**
> IntegrationOut update_integration_api_v1_app_app_id_integration_integ_id_put(integ_id, app_id, integration_update, idempotency_key=idempotency_key)

Update Integration

Update an integration.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.integration_out import IntegrationOut
from openapi_client.models.integration_update import IntegrationUpdate
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
    api_instance = openapi_client.IntegrationApi(api_client)
    integ_id = 'integ_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    integration_update = openapi_client.IntegrationUpdate() # IntegrationUpdate | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Update Integration
        api_response = api_instance.update_integration_api_v1_app_app_id_integration_integ_id_put(integ_id, app_id, integration_update, idempotency_key=idempotency_key)
        print("The response of IntegrationApi->update_integration_api_v1_app_app_id_integration_integ_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationApi->update_integration_api_v1_app_app_id_integration_integ_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integ_id** | **str**|  | 
 **app_id** | **str**|  | 
 **integration_update** | [**IntegrationUpdate**](IntegrationUpdate.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**IntegrationOut**](IntegrationOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
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

