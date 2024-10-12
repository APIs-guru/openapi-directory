# openapi_client.DocumentApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_document**](DocumentApi.md#cancel_document) | **POST** /documents/{id}/cancel | Cancel a document
[**create_document**](DocumentApi.md#create_document) | **POST** /documents | Create a document
[**create_document_from_proforma**](DocumentApi.md#create_document_from_proforma) | **POST** /documents/{id}/create-from-proforma | Create a document from proforma.
[**delete_payment**](DocumentApi.md#delete_payment) | **DELETE** /documents/{id}/payments | Delete all payment history on document
[**download_document**](DocumentApi.md#download_document) | **GET** /documents/{id}/download | Download a document in PDF format.
[**get_document**](DocumentApi.md#get_document) | **GET** /documents/{id} | Retrieve a document
[**get_online_szamla_status**](DocumentApi.md#get_online_szamla_status) | **GET** /documents/{id}/online-szamla | Retrieve a document Online Számla status
[**get_payment**](DocumentApi.md#get_payment) | **GET** /documents/{id}/payments | Retrieve a payment histroy
[**get_public_url**](DocumentApi.md#get_public_url) | **GET** /documents/{id}/public-url | Retrieve a document download public url.
[**list_document**](DocumentApi.md#list_document) | **GET** /documents | List all documents
[**send_document**](DocumentApi.md#send_document) | **POST** /documents/{id}/send | Send invoice to given email adresses.
[**update_payment**](DocumentApi.md#update_payment) | **PUT** /documents/{id}/payments | Update payment history


# **cancel_document**
> Document cancel_document(id)

Cancel a document

Cancel a document. Returns a cancellation document object if the cancellation is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Cancel a document
        api_response = api_instance.cancel_document(id)
        print("The response of DocumentApi->cancel_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->cancel_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Document cancellation successfully. Cancel document returned. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_document**
> Document create_document(document_insert)

Create a document

Create a new document. Returns a document object if the create is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.models.document_insert import DocumentInsert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    document_insert = openapi_client.DocumentInsert() # DocumentInsert | DocumentInsert object that you would like to store.

    try:
        # Create a document
        api_response = api_instance.create_document(document_insert)
        print("The response of DocumentApi->create_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->create_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_insert** | [**DocumentInsert**](DocumentInsert.md)| DocumentInsert object that you would like to store. | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Document created successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_document_from_proforma**
> Document create_document_from_proforma(id)

Create a document from proforma.

Create a new document from proforma. Returns a document object if the create is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Create a document from proforma.
        api_response = api_instance.create_document_from_proforma(id)
        print("The response of DocumentApi->create_document_from_proforma:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->create_document_from_proforma: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Document created successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_payment**
> List[PaymentHistory] delete_payment(id)

Delete all payment history on document

Delete all exist payment history on document.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.payment_history import PaymentHistory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Delete all payment history on document
        api_response = api_instance.delete_payment(id)
        print("The response of DocumentApi->delete_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->delete_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List[PaymentHistory]**](PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment history deleted successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_document**
> bytearray download_document(id)

Download a document in PDF format.

Download a document. Returns a document in PDF format.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Download a document in PDF format.
        api_response = api_instance.download_document(id)
        print("The response of DocumentApi->download_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->download_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

**bytearray**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Document PDF file. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**202** | Document PDF has not generated yet. You should try to download again later. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_document**
> Document get_document(id)

Retrieve a document

Retrieves the details of an existing document.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Retrieve a document
        api_response = api_instance.get_document(id)
        print("The response of DocumentApi->get_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->get_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Document**](Document.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_online_szamla_status**
> OnlineSzamlaStatus get_online_szamla_status(id)

Retrieve a document Online Számla status

Retrieves the details of an existing document status.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.online_szamla_status import OnlineSzamlaStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Retrieve a document Online Számla status
        api_response = api_instance.get_online_szamla_status(id)
        print("The response of DocumentApi->get_online_szamla_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->get_online_szamla_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**OnlineSzamlaStatus**](OnlineSzamlaStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payment**
> List[PaymentHistory] get_payment(id)

Retrieve a payment histroy

Retrieves the details of payment history an existing document.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.payment_history import PaymentHistory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Retrieve a payment histroy
        api_response = api_instance.get_payment(id)
        print("The response of DocumentApi->get_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->get_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List[PaymentHistory]**](PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_public_url**
> DocumentPublicUrl get_public_url(id)

Retrieve a document download public url.

Retrieves public url to download an existing document.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_public_url import DocumentPublicUrl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 

    try:
        # Retrieve a document download public url.
        api_response = api_instance.get_public_url(id)
        print("The response of DocumentApi->get_public_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->get_public_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**DocumentPublicUrl**](DocumentPublicUrl.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_document**
> DocumentList list_document(page=page, per_page=per_page, block_id=block_id, partner_id=partner_id, payment_method=payment_method, payment_status=payment_status, start_date=start_date, end_date=end_date, start_number=start_number, end_number=end_number, start_year=start_year, end_year=end_year)

List all documents

Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_list import DocumentList
from openapi_client.models.payment_method import PaymentMethod
from openapi_client.models.payment_status import PaymentStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    page = 56 # int |  (optional)
    per_page = 25 # int |  (optional) (default to 25)
    block_id = 56 # int | Filter documents by the identifier of your DocumentBlock. (optional)
    partner_id = 56 # int | Filter documents by the identifier of your Partner. (optional)
    payment_method = openapi_client.PaymentMethod() # PaymentMethod | Filter documents by PaymentMethod value. (optional)
    payment_status = openapi_client.PaymentStatus() # PaymentStatus | Filter documents by PaymentStatus value. (optional)
    start_date = '2020-05-15' # date | Filter documents by date. (optional)
    end_date = '2020-05-15' # date | Filter documents by date. (optional)
    start_number = 1 # int | Starting number of the document, should not contain year or any other formatting. Required if `start_year` given (optional)
    end_number = 10 # int | Ending number of the document, should not contain year or any other formatting. Required if `end_year` given (optional)
    start_year = 2020 # int | Year for `start_number` parameter. Required if `start_number` given. (optional)
    end_year = 2020 # int | Year for `end_number` parameter. Required if `end_number` given. (optional)

    try:
        # List all documents
        api_response = api_instance.list_document(page=page, per_page=per_page, block_id=block_id, partner_id=partner_id, payment_method=payment_method, payment_status=payment_status, start_date=start_date, end_date=end_date, start_number=start_number, end_number=end_number, start_year=start_year, end_year=end_year)
        print("The response of DocumentApi->list_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->list_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **per_page** | **int**|  | [optional] [default to 25]
 **block_id** | **int**| Filter documents by the identifier of your DocumentBlock. | [optional] 
 **partner_id** | **int**| Filter documents by the identifier of your Partner. | [optional] 
 **payment_method** | [**PaymentMethod**](.md)| Filter documents by PaymentMethod value. | [optional] 
 **payment_status** | [**PaymentStatus**](.md)| Filter documents by PaymentStatus value. | [optional] 
 **start_date** | **date**| Filter documents by date. | [optional] 
 **end_date** | **date**| Filter documents by date. | [optional] 
 **start_number** | **int**| Starting number of the document, should not contain year or any other formatting. Required if &#x60;start_year&#x60; given | [optional] 
 **end_number** | **int**| Ending number of the document, should not contain year or any other formatting. Required if &#x60;end_year&#x60; given | [optional] 
 **start_year** | **int**| Year for &#x60;start_number&#x60; parameter. Required if &#x60;start_number&#x60; given. | [optional] 
 **end_year** | **int**| Year for &#x60;end_number&#x60; parameter. Required if &#x60;end_number&#x60; given. | [optional] 

### Return type

[**DocumentList**](DocumentList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_document**
> SendDocument send_document(id, send_document=send_document)

Send invoice to given email adresses.

Returns a list of emails, where the invoice is sent.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.send_document import SendDocument
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 
    send_document = openapi_client.SendDocument() # SendDocument | List of email-s where you want to send the invoice. (optional)

    try:
        # Send invoice to given email adresses.
        api_response = api_instance.send_document(id, send_document=send_document)
        print("The response of DocumentApi->send_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->send_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **send_document** | [**SendDocument**](SendDocument.md)| List of email-s where you want to send the invoice. | [optional] 

### Return type

[**SendDocument**](SendDocument.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of email adresses where the invoice sent. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_payment**
> List[PaymentHistory] update_payment(id, payment_history)

Update payment history

Update payment history an existing document. Returns a payment history object if the update is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.payment_history import PaymentHistory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    id = 56 # int | 
    payment_history = [openapi_client.PaymentHistory()] # List[PaymentHistory] | Payment history object that you would like to update.

    try:
        # Update payment history
        api_response = api_instance.update_payment(id, payment_history)
        print("The response of DocumentApi->update_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->update_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **payment_history** | [**List[PaymentHistory]**](PaymentHistory.md)| Payment history object that you would like to update. | 

### Return type

[**List[PaymentHistory]**](PaymentHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment history updated successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

