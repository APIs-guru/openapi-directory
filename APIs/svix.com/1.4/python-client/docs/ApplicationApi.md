# openapi_client.ApplicationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_application_api_v1_app_post**](ApplicationApi.md#create_application_api_v1_app_post) | **POST** /api/v1/app/ | Create Application
[**delete_application_api_v1_app_app_id_delete**](ApplicationApi.md#delete_application_api_v1_app_app_id_delete) | **DELETE** /api/v1/app/{app_id}/ | Delete Application
[**get_application_api_v1_app_app_id_get**](ApplicationApi.md#get_application_api_v1_app_app_id_get) | **GET** /api/v1/app/{app_id}/ | Get Application
[**list_applications_api_v1_app_get**](ApplicationApi.md#list_applications_api_v1_app_get) | **GET** /api/v1/app/ | List Applications
[**update_application_api_v1_app_app_id_put**](ApplicationApi.md#update_application_api_v1_app_app_id_put) | **PUT** /api/v1/app/{app_id}/ | Update Application


# **create_application_api_v1_app_post**
> ApplicationOut create_application_api_v1_app_post(application_in, get_if_exists=get_if_exists, idempotency_key=idempotency_key)

Create Application

Create a new application.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.application_in import ApplicationIn
from openapi_client.models.application_out import ApplicationOut
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
    api_instance = openapi_client.ApplicationApi(api_client)
    application_in = openapi_client.ApplicationIn() # ApplicationIn | 
    get_if_exists = False # bool | Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs. (optional) (default to False)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Create Application
        api_response = api_instance.create_application_api_v1_app_post(application_in, get_if_exists=get_if_exists, idempotency_key=idempotency_key)
        print("The response of ApplicationApi->create_application_api_v1_app_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->create_application_api_v1_app_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_in** | [**ApplicationIn**](ApplicationIn.md)|  | 
 **get_if_exists** | **bool**| Get an existing application, or create a new one if doesn&#39;t exist. It&#39;s two separate functions in the libs. | [optional] [default to False]
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ApplicationOut**](ApplicationOut.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Successful Response |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_application_api_v1_app_app_id_delete**
> delete_application_api_v1_app_app_id_delete(app_id, idempotency_key=idempotency_key)

Delete Application

Delete an application.

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
    api_instance = openapi_client.ApplicationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Delete Application
        api_instance.delete_application_api_v1_app_app_id_delete(app_id, idempotency_key=idempotency_key)
    except Exception as e:
        print("Exception when calling ApplicationApi->delete_application_api_v1_app_app_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_application_api_v1_app_app_id_get**
> ApplicationOut get_application_api_v1_app_app_id_get(app_id, idempotency_key=idempotency_key)

Get Application

Get an application.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.application_out import ApplicationOut
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
    api_instance = openapi_client.ApplicationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Get Application
        api_response = api_instance.get_application_api_v1_app_app_id_get(app_id, idempotency_key=idempotency_key)
        print("The response of ApplicationApi->get_application_api_v1_app_app_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->get_application_api_v1_app_app_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ApplicationOut**](ApplicationOut.md)

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

# **list_applications_api_v1_app_get**
> ListResponseApplicationOut list_applications_api_v1_app_get(iterator=iterator, limit=limit, order=order, idempotency_key=idempotency_key)

List Applications

List of all the organization's applications.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.list_response_application_out import ListResponseApplicationOut
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
    api_instance = openapi_client.ApplicationApi(api_client)
    iterator = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str |  (optional)
    limit = 50 # int |  (optional) (default to 50)
    order = openapi_client.Ordering() # Ordering |  (optional)
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # List Applications
        api_response = api_instance.list_applications_api_v1_app_get(iterator=iterator, limit=limit, order=order, idempotency_key=idempotency_key)
        print("The response of ApplicationApi->list_applications_api_v1_app_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->list_applications_api_v1_app_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iterator** | **str**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 50]
 **order** | [**Ordering**](.md)|  | [optional] 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ListResponseApplicationOut**](ListResponseApplicationOut.md)

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

# **update_application_api_v1_app_app_id_put**
> ApplicationOut update_application_api_v1_app_app_id_put(app_id, application_in, idempotency_key=idempotency_key)

Update Application

Update an application.

### Example

* Bearer Authentication (HTTPBearer):

```python
import openapi_client
from openapi_client.models.application_in import ApplicationIn
from openapi_client.models.application_out import ApplicationOut
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
    api_instance = openapi_client.ApplicationApi(api_client)
    app_id = 'app_1srOrx2ZWZBpBUvZwXKQmoEYga2' # str | 
    application_in = openapi_client.ApplicationIn() # ApplicationIn | 
    idempotency_key = 'idempotency_key_example' # str | The request's idempotency key (optional)

    try:
        # Update Application
        api_response = api_instance.update_application_api_v1_app_app_id_put(app_id, application_in, idempotency_key=idempotency_key)
        print("The response of ApplicationApi->update_application_api_v1_app_app_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->update_application_api_v1_app_app_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **application_in** | [**ApplicationIn**](ApplicationIn.md)|  | 
 **idempotency_key** | **str**| The request&#39;s idempotency key | [optional] 

### Return type

[**ApplicationOut**](ApplicationOut.md)

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

