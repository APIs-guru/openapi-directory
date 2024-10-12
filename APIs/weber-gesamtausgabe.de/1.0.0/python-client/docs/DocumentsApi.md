# openapi_client.DocumentsApi

All URIs are relative to *http://localhost:8080/exist/apps/WeGA-WebApp/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documents_doc_id_get**](DocumentsApi.md#documents_doc_id_get) | **GET** /documents/{docID} | Returns documents by ID
[**documents_find_by_author_author_id_get**](DocumentsApi.md#documents_find_by_author_author_id_get) | **GET** /documents/findByAuthor/{authorID} | Finds documents by author
[**documents_find_by_date_get**](DocumentsApi.md#documents_find_by_date_get) | **GET** /documents/findByDate | Finds documents by date
[**documents_find_by_mention_doc_id_get**](DocumentsApi.md#documents_find_by_mention_doc_id_get) | **GET** /documents/findByMention/{docID} | Finds documents by reference
[**documents_get**](DocumentsApi.md#documents_get) | **GET** /documents | Lists all documents


# **documents_doc_id_get**
> List[Document] documents_doc_id_get(doc_id)

Returns documents by ID

This endpoint returns documents, indicated by an ID.  Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/14959938, or  GND, e.g. http://d-nb.info/gnd/118629662 

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    doc_id = 'A002068' # str | The document identifier to search for (default to 'A002068')

    try:
        # Returns documents by ID
        api_response = api_instance.documents_doc_id_get(doc_id)
        print("The response of DocumentsApi->documents_doc_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents_doc_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doc_id** | **str**| The document identifier to search for | [default to &#39;A002068&#39;]

### Return type

[**List[Document]**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of documents |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_find_by_author_author_id_get**
> List[Document] documents_find_by_author_author_id_get(author_id, doc_type=doc_type, offset=offset, limit=limit)

Finds documents by author

This endpoint returns a list of documents by a given author – optionally filtered by document type  

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    author_id = 'A002068' # str | The author ID to search for. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/14959938, or  GND, e.g. http://d-nb.info/gnd/118629662  (default to 'A002068')
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Finds documents by author
        api_response = api_instance.documents_find_by_author_author_id_get(author_id, doc_type=doc_type, offset=offset, limit=limit)
        print("The response of DocumentsApi->documents_find_by_author_author_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents_find_by_author_author_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**| The author ID to search for. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/14959938, or  GND, e.g. http://d-nb.info/gnd/118629662  | [default to &#39;A002068&#39;]
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | [optional] 
 **offset** | **int**| Position of first item to retrieve (starting from 1) | [optional] [default to 1]
 **limit** | **int**| Number of items to retrieve (200 max) | [optional] [default to 10]

### Return type

[**List[Document]**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of documents |  * totalrecordcount - The total size of the result set <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_find_by_date_get**
> List[Document] documents_find_by_date_get(from_date, to_date=to_date, doc_type=doc_type, offset=offset, limit=limit)

Finds documents by date

This endpoint returns a list of documents related to the given date – optionally filtered by document type.  

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    from_date = '2013-10-20' # date | The min date to search for
    to_date = '2013-10-20' # date | The max date to search for (optional)
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Finds documents by date
        api_response = api_instance.documents_find_by_date_get(from_date, to_date=to_date, doc_type=doc_type, offset=offset, limit=limit)
        print("The response of DocumentsApi->documents_find_by_date_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents_find_by_date_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from_date** | **date**| The min date to search for | 
 **to_date** | **date**| The max date to search for | [optional] 
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | [optional] 
 **offset** | **int**| Position of first item to retrieve (starting from 1) | [optional] [default to 1]
 **limit** | **int**| Number of items to retrieve (200 max) | [optional] [default to 10]

### Return type

[**List[Document]**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of documents |  * totalrecordcount - The total size of the result set <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_find_by_mention_doc_id_get**
> List[Document] documents_find_by_mention_doc_id_get(doc_id, doc_type=doc_type, offset=offset, limit=limit)

Finds documents by reference

This endpoint returns a list of documents that reference a particular docID – optionally filtered by document type.  

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    doc_id = 'A002068' # str | The document ID that is to be mentioned. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/14959938, or  GND, e.g. http://d-nb.info/gnd/118629662  (default to 'A002068')
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Finds documents by reference
        api_response = api_instance.documents_find_by_mention_doc_id_get(doc_id, doc_type=doc_type, offset=offset, limit=limit)
        print("The response of DocumentsApi->documents_find_by_mention_doc_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents_find_by_mention_doc_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doc_id** | **str**| The document ID that is to be mentioned. Accepted ID formats are WeGA, e.g. A002068 or http://weber-gesamtausgabe.de/A002068, VIAF, e.g. http://viaf.org/viaf/14959938, or  GND, e.g. http://d-nb.info/gnd/118629662  | [default to &#39;A002068&#39;]
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | [optional] 
 **offset** | **int**| Position of first item to retrieve (starting from 1) | [optional] [default to 1]
 **limit** | **int**| Number of items to retrieve (200 max) | [optional] [default to 10]

### Return type

[**List[Document]**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of documents |  * totalrecordcount - The total size of the result set <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents_get**
> List[Document] documents_get(doc_type=doc_type, offset=offset, limit=limit)

Lists all documents

The Documents endpoint returns a list of all documents from the WeGA digital edition. 

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080/exist/apps/WeGA-WebApp/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:8080/exist/apps/WeGA-WebApp/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Lists all documents
        api_response = api_instance.documents_get(doc_type=doc_type, offset=offset, limit=limit)
        print("The response of DocumentsApi->documents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->documents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | [optional] 
 **offset** | **int**| Position of first item to retrieve (starting from 1) | [optional] [default to 1]
 **limit** | **int**| Number of items to retrieve (200 max) | [optional] [default to 10]

### Return type

[**List[Document]**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of documents |  * totalrecordcount - The total size of the result set <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

