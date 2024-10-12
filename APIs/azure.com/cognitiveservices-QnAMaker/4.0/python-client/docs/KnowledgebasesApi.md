# openapi_client.KnowledgebasesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**knowledgebase_create**](KnowledgebasesApi.md#knowledgebase_create) | **POST** /knowledgebases/create | Asynchronous operation to create a new knowledgebase.
[**knowledgebase_delete**](KnowledgebasesApi.md#knowledgebase_delete) | **DELETE** /knowledgebases/{kbId} | Deletes the knowledgebase and all its data.
[**knowledgebase_download**](KnowledgebasesApi.md#knowledgebase_download) | **GET** /knowledgebases/{kbId}/{environment}/qna | Download the knowledgebase.
[**knowledgebase_get_details**](KnowledgebasesApi.md#knowledgebase_get_details) | **GET** /knowledgebases/{kbId} | Gets details of a specific knowledgebase.
[**knowledgebase_list_all**](KnowledgebasesApi.md#knowledgebase_list_all) | **GET** /knowledgebases | Gets all knowledgebases for a user.
[**knowledgebase_publish**](KnowledgebasesApi.md#knowledgebase_publish) | **POST** /knowledgebases/{kbId} | Publishes all changes in test index of a knowledgebase to its prod index.
[**knowledgebase_replace**](KnowledgebasesApi.md#knowledgebase_replace) | **PUT** /knowledgebases/{kbId} | Replace knowledgebase contents.
[**knowledgebase_update**](KnowledgebasesApi.md#knowledgebase_update) | **PATCH** /knowledgebases/{kbId} | Asynchronous operation to modify a knowledgebase.


# **knowledgebase_create**
> Operation knowledgebase_create(create_kb_payload)

Asynchronous operation to create a new knowledgebase.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.create_kb_dto import CreateKbDTO
from openapi_client.models.operation import Operation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    create_kb_payload = openapi_client.CreateKbDTO() # CreateKbDTO | Post body of the request.

    try:
        # Asynchronous operation to create a new knowledgebase.
        api_response = api_instance.knowledgebase_create(create_kb_payload)
        print("The response of KnowledgebasesApi->knowledgebase_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_kb_payload** | [**CreateKbDTO**](CreateKbDTO.md)| Post body of the request. | 

### Return type

[**Operation**](Operation.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Details of the asynchronous operation. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_delete**
> knowledgebase_delete(kb_id)

Deletes the knowledgebase and all its data.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.

    try:
        # Deletes the knowledgebase and all its data.
        api_instance.knowledgebase_delete(kb_id)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | HTTP 204 No content. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_download**
> QnADocumentsDTO knowledgebase_download(kb_id, environment)

Download the knowledgebase.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.qn_a_documents_dto import QnADocumentsDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.
    environment = 'environment_example' # str | Specifies whether environment is Test or Prod.

    try:
        # Download the knowledgebase.
        api_response = api_instance.knowledgebase_download(kb_id, environment)
        print("The response of KnowledgebasesApi->knowledgebase_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 
 **environment** | **str**| Specifies whether environment is Test or Prod. | 

### Return type

[**QnADocumentsDTO**](QnADocumentsDTO.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of all Q-A in the knowledgebase. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_get_details**
> KnowledgebaseDTO knowledgebase_get_details(kb_id)

Gets details of a specific knowledgebase.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.knowledgebase_dto import KnowledgebaseDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.

    try:
        # Gets details of a specific knowledgebase.
        api_response = api_instance.knowledgebase_get_details(kb_id)
        print("The response of KnowledgebasesApi->knowledgebase_get_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_get_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 

### Return type

[**KnowledgebaseDTO**](KnowledgebaseDTO.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details of the knowledgebase. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_list_all**
> KnowledgebasesDTO knowledgebase_list_all()

Gets all knowledgebases for a user.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.knowledgebases_dto import KnowledgebasesDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)

    try:
        # Gets all knowledgebases for a user.
        api_response = api_instance.knowledgebase_list_all()
        print("The response of KnowledgebasesApi->knowledgebase_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_list_all: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**KnowledgebasesDTO**](KnowledgebasesDTO.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of knowledgebases. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_publish**
> knowledgebase_publish(kb_id)

Publishes all changes in test index of a knowledgebase to its prod index.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.

    try:
        # Publishes all changes in test index of a knowledgebase to its prod index.
        api_instance.knowledgebase_publish(kb_id)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | HTTP 204 No content. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_replace**
> knowledgebase_replace(kb_id, replace_kb)

Replace knowledgebase contents.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.replace_kb_dto import ReplaceKbDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.
    replace_kb = openapi_client.ReplaceKbDTO() # ReplaceKbDTO | An instance of ReplaceKbDTO which contains list of qnas to be uploaded

    try:
        # Replace knowledgebase contents.
        api_instance.knowledgebase_replace(kb_id, replace_kb)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 
 **replace_kb** | [**ReplaceKbDTO**](ReplaceKbDTO.md)| An instance of ReplaceKbDTO which contains list of qnas to be uploaded | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | HTTP 204 No content. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **knowledgebase_update**
> Operation knowledgebase_update(kb_id, update_kb)

Asynchronous operation to modify a knowledgebase.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.operation import Operation
from openapi_client.models.update_kb_operation_dto import UpdateKbOperationDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.
    update_kb = openapi_client.UpdateKbOperationDTO() # UpdateKbOperationDTO | Post body of the request.

    try:
        # Asynchronous operation to modify a knowledgebase.
        api_response = api_instance.knowledgebase_update(kb_id, update_kb)
        print("The response of KnowledgebasesApi->knowledgebase_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->knowledgebase_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 
 **update_kb** | [**UpdateKbOperationDTO**](UpdateKbOperationDTO.md)| Post body of the request. | 

### Return type

[**Operation**](Operation.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Details of the asynchronous operation. |  * Location - Relative URI to the target location of the asynchronous operation. Client should poll this resource to get status of the operation. <br>  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

