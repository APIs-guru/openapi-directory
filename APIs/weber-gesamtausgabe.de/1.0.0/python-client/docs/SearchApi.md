# openapi_client.SearchApi

All URIs are relative to *http://localhost:8080/exist/apps/WeGA-WebApp/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_entity_get**](SearchApi.md#search_entity_get) | **GET** /search/entity | Search for a WeGA entity


# **search_entity_get**
> List[Document] search_entity_get(doc_type=doc_type, q=q, offset=offset, limit=limit)

Search for a WeGA entity

This endpoint returns the search results for an entity's name or title. 

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
    api_instance = openapi_client.SearchApi(api_client)
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type (optional)
    q = 'q_example' # str | The query string (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Search for a WeGA entity
        api_response = api_instance.search_entity_get(doc_type=doc_type, q=q, offset=offset, limit=limit)
        print("The response of SearchApi->search_entity_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->search_entity_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | [optional] 
 **q** | **str**| The query string | [optional] 
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

