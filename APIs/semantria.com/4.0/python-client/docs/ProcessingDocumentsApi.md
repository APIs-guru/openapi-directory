# openapi_client.ProcessingDocumentsApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_document**](ProcessingDocumentsApi.md#cancel_document) | **DELETE** /document/{document_id}.{content_type} | Cancel document analysis
[**queue_batch_of_documents**](ProcessingDocumentsApi.md#queue_batch_of_documents) | **POST** /document/batch.{content_type} | Queue batch of documents for analysis
[**queue_document**](ProcessingDocumentsApi.md#queue_document) | **POST** /document.{content_type} | Queue document for analysis
[**receive_document_analytic_data**](ProcessingDocumentsApi.md#receive_document_analytic_data) | **GET** /document/{document_id}.{content_type} | Retrieve document analysis or its status in queue
[**retrieve_processed_documents**](ProcessingDocumentsApi.md#retrieve_processed_documents) | **GET** /document/processed.{content_type} | Retrieve documents analysis


# **cancel_document**
> cancel_document(document_id, content_type, config_id=config_id)

Cancel document analysis

This method cancels document analysis by unique ID on Semantria side if it is waiting for analysis in queue.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingDocumentsApi(api_client)
    document_id = 'document_id_example' # str | Document ID
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Cancel document analysis
        api_instance.cancel_document(document_id, content_type, config_id=config_id)
    except Exception as e:
        print("Exception when calling ProcessingDocumentsApi->cancel_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **str**| Document ID | 
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

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
**200** | Client request accepted. Document canceled from processing on the server. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**404** | No documents with provided ID found on server. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queue_batch_of_documents**
> Document queue_batch_of_documents(content_type, batch_of_documents, config_id=config_id)

Queue batch of documents for analysis

This method queues batch of documents for analysis. The rules are the same as for single document mode but here the documents ordered into the batch.

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingDocumentsApi(api_client)
    content_type = 'content_type_example' # str | 
    batch_of_documents = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Queue batch of documents for analysis
        api_response = api_instance.queue_batch_of_documents(content_type, batch_of_documents, config_id=config_id)
        print("The response of ProcessingDocumentsApi->queue_batch_of_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingDocumentsApi->queue_batch_of_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **batch_of_documents** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the sentiment-bearing phrases list. |  -  |
**202** | Client request accepted and queued for processing. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**403** | Request is forbidden for selected processing mode. |  -  |
**406** | Documents limit per batch is achieved. |  -  |
**413** | Characters limit for the document exceeded. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queue_document**
> Document queue_document(content_type, document, config_id=config_id)

Queue document for analysis

This method queues document onto the server for analysis. Queued document analyzes individually and will have its own set of results. If unique configuration ID provided, Semantria uses settings of that configuration during analysis, in opposite the primary configuration uses. Document IDs are unique in scope of configuration. If the same ID appears twice, Semantria overrides existing document with the new Data.

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingDocumentsApi(api_client)
    content_type = 'content_type_example' # str | 
    document = None # object | Parametrized JSON or XML object.
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Queue document for analysis
        api_response = api_instance.queue_document(content_type, document, config_id=config_id)
        print("The response of ProcessingDocumentsApi->queue_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingDocumentsApi->queue_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **document** | **object**| Parametrized JSON or XML object. | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the sentiment-bearing phrases list. |  -  |
**202** | Client request accepted and queued for processing. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**413** | Characters limit for the document exceeded. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **receive_document_analytic_data**
> DocumentAnalyticData receive_document_analytic_data(document_id, content_type, config_id=config_id)

Retrieve document analysis or its status in queue

This method retrieves analysis results for the single document by its unique ID or the document’s status in queue if it did not analyzed yet. Semantria guarantees delivering of all documents back to the client even if they FAILED on Semantria side due to some reason.

### Example


```python
import openapi_client
from openapi_client.models.document_analytic_data import DocumentAnalyticData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingDocumentsApi(api_client)
    document_id = 'document_id_example' # str | Document ID
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Retrieve document analysis or its status in queue
        api_response = api_instance.receive_document_analytic_data(document_id, content_type, config_id=config_id)
        print("The response of ProcessingDocumentsApi->receive_document_analytic_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingDocumentsApi->receive_document_analytic_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_id** | **str**| Document ID | 
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**DocumentAnalyticData**](DocumentAnalyticData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted. Server responds with processed document or its status. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**404** | No documents with provided ID found on server. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_processed_documents**
> DocumentAnalyticData retrieve_processed_documents(content_type, config_id=config_id)

Retrieve documents analysis

This method retrieves analysis results for processed documents from Semantria. FAILED documents will have FAILED status in response. Semantria responds with limited amount of results per API call. If configuration ID provided, Semantria responds with the document, which were queued using the same configuration ID, in opposite Primary.

### Example


```python
import openapi_client
from openapi_client.models.document_analytic_data import DocumentAnalyticData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProcessingDocumentsApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration used for analysis. (optional)

    try:
        # Retrieve documents analysis
        api_response = api_instance.retrieve_processed_documents(content_type, config_id=config_id)
        print("The response of ProcessingDocumentsApi->retrieve_processed_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessingDocumentsApi->retrieve_processed_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration used for analysis. | [optional] 

### Return type

[**DocumentAnalyticData**](DocumentAnalyticData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with processed documents. |  -  |
**202** | Client request accepted, no processed documents found on the server. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

