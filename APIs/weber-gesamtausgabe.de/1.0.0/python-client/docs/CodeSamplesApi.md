# openapi_client.CodeSamplesApi

All URIs are relative to *http://localhost:8080/exist/apps/WeGA-WebApp/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**code_find_by_element_element_get**](CodeSamplesApi.md#code_find_by_element_element_get) | **GET** /code/findByElement/{element} | Finds code samples by XML element


# **code_find_by_element_element_get**
> List[CodeSample] code_find_by_element_element_get(element, namespace=namespace, doc_type=doc_type, offset=offset, limit=limit)

Finds code samples by XML element

### Example


```python
import openapi_client
from openapi_client.models.code_sample import CodeSample
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
    api_instance = openapi_client.CodeSamplesApi(api_client)
    element = 'element_example' # str | The XML element to search for
    namespace = 'http://www.tei-c.org/ns/1.0' # str | The element namespace. Defaults to the TEI namespace (optional) (default to 'http://www.tei-c.org/ns/1.0')
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Finds code samples by XML element
        api_response = api_instance.code_find_by_element_element_get(element, namespace=namespace, doc_type=doc_type, offset=offset, limit=limit)
        print("The response of CodeSamplesApi->code_find_by_element_element_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CodeSamplesApi->code_find_by_element_element_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **element** | **str**| The XML element to search for | 
 **namespace** | **str**| The element namespace. Defaults to the TEI namespace | [optional] [default to &#39;http://www.tei-c.org/ns/1.0&#39;]
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | [optional] 
 **offset** | **int**| Position of first item to retrieve (starting from 1) | [optional] [default to 1]
 **limit** | **int**| Number of items to retrieve (200 max) | [optional] [default to 10]

### Return type

[**List[CodeSample]**](CodeSample.md)

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

