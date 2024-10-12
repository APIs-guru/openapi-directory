# openapi_client.FacetsApi

All URIs are relative to *http://localhost:8080/exist/apps/WeGA-WebApp/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facets_facet_get**](FacetsApi.md#facets_facet_get) | **GET** /facets/{facet} | Returns facets


# **facets_facet_get**
> List[Facet] facets_facet_get(facet, scope, doc_type, term=term, offset=offset, limit=limit)

Returns facets

### Example


```python
import openapi_client
from openapi_client.models.facet import Facet
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
    api_instance = openapi_client.FacetsApi(api_client)
    facet = 'facet_example' # str | The facet to search for
    scope = 'scope_example' # str | The scope of the result set, i.e. 'indices' or a WeGA ID
    doc_type = ['doc_type_example'] # List[str] | The WeGA document type
    term = 'term_example' # str | The search term to be looked for in the facet's label (optional)
    offset = 1 # int | Position of first item to retrieve (starting from 1) (optional) (default to 1)
    limit = 10 # int | Number of items to retrieve (200 max) (optional) (default to 10)

    try:
        # Returns facets
        api_response = api_instance.facets_facet_get(facet, scope, doc_type, term=term, offset=offset, limit=limit)
        print("The response of FacetsApi->facets_facet_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FacetsApi->facets_facet_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **facet** | **str**| The facet to search for | 
 **scope** | **str**| The scope of the result set, i.e. &#39;indices&#39; or a WeGA ID | 
 **doc_type** | [**List[str]**](str.md)| The WeGA document type | 
 **term** | **str**| The search term to be looked for in the facet&#39;s label | [optional] 
 **offset** | **int**| Position of first item to retrieve (starting from 1) | [optional] [default to 1]
 **limit** | **int**| Number of items to retrieve (200 max) | [optional] [default to 10]

### Return type

[**List[Facet]**](Facet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of facets |  * totalrecordcount - The total size of the result set <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

