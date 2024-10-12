# openapi_client.SwaggerDocsApi

All URIs are relative to *http://nsidc.org/api/dataset/2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**facets**](SwaggerDocsApi.md#facets) | **GET** /Facets | View the facet information corresponding to a search
[**id**](SwaggerDocsApi.md#id) | **GET** /suggest | Suggest search terms based on a partial query
[**open_search**](SwaggerDocsApi.md#open_search) | **GET** /OpenSearch | Search documents using the OpenSearch 1.1 Specification
[**opensearch_description**](SwaggerDocsApi.md#opensearch_description) | **GET** /OpenSearchDescription | Describes the web interface of NSIDC&#39;s data search engine


# **facets**
> str facets(search_terms=search_terms, count=count, start_index=start_index, spatial=spatial, sort_keys=sort_keys, start_date=start_date, end_date=end_date, facet_filters=facet_filters, source=source)

View the facet information corresponding to a search

In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://nsidc.org/api/dataset/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://nsidc.org/api/dataset/2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwaggerDocsApi(api_client)
    search_terms = 'search_terms_example' # str | URL-encoded keyword or keywords desired by the client; OpenSearch 1.1 (optional)
    count = 25 # int | The number of search results per page desired by the client; OpenSearch 1.1 (optional) (default to 25)
    start_index = 1 # int | First search result desired by the search client; OpenSearch 1.1 (optional) (default to 1)
    spatial = '-180.0,-90.0,180.0,90.0' # str | 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, \"box\" parameter (optional) (default to '-180.0,-90.0,180.0,90.0')
    sort_keys = score,,desc # str | Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0 (optional) (default to score,,desc)
    start_date = '2013-10-20' # date | The start date in yyyy-mm-dd format (optional)
    end_date = '2013-10-20' # date | The end date in yyyy-mm-dd format (optional)
    facet_filters = 'facet_filters_example' # str | Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values (optional)
    source = NSIDC # str | Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC (optional) (default to NSIDC)

    try:
        # View the facet information corresponding to a search
        api_response = api_instance.facets(search_terms=search_terms, count=count, start_index=start_index, spatial=spatial, sort_keys=sort_keys, start_date=start_date, end_date=end_date, facet_filters=facet_filters, source=source)
        print("The response of SwaggerDocsApi->facets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwaggerDocsApi->facets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_terms** | **str**| URL-encoded keyword or keywords desired by the client; OpenSearch 1.1 | [optional] 
 **count** | **int**| The number of search results per page desired by the client; OpenSearch 1.1 | [optional] [default to 25]
 **start_index** | **int**| First search result desired by the search client; OpenSearch 1.1 | [optional] [default to 1]
 **spatial** | **str**| 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, \&quot;box\&quot; parameter | [optional] [default to &#39;-180.0,-90.0,180.0,90.0&#39;]
 **sort_keys** | **str**| Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0 | [optional] [default to score,,desc]
 **start_date** | **date**| The start date in yyyy-mm-dd format | [optional] 
 **end_date** | **date**| The end date in yyyy-mm-dd format | [optional] 
 **facet_filters** | **str**| Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values | [optional] 
 **source** | **str**| Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC | [optional] [default to NSIDC]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/nsidcfacets+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **id**
> str id(q, source)

Suggest search terms based on a partial query

In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://nsidc.org/api/dataset/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://nsidc.org/api/dataset/2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwaggerDocsApi(api_client)
    q = 'q_example' # str | Search terms typed into the interface (minimum two characters)
    source = NSIDC # str | Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC (default to NSIDC)

    try:
        # Suggest search terms based on a partial query
        api_response = api_instance.id(q, source)
        print("The response of SwaggerDocsApi->id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwaggerDocsApi->id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Search terms typed into the interface (minimum two characters) | 
 **source** | **str**| Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC | [default to NSIDC]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-suggestions+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **open_search**
> str open_search(search_terms=search_terms, count=count, start_index=start_index, spatial=spatial, sort_keys=sort_keys, start_date=start_date, end_date=end_date, facet_filters=facet_filters, source=source)

Search documents using the OpenSearch 1.1 Specification

This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://nsidc.org/api/dataset/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://nsidc.org/api/dataset/2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwaggerDocsApi(api_client)
    search_terms = 'search_terms_example' # str | URL-encoded keyword or keywords desired by the client; OpenSearch 1.1 (optional)
    count = 25 # int | The number of search results per page desired by the client; OpenSearch 1.1 (optional) (default to 25)
    start_index = 1 # int | First search result desired by the search client; OpenSearch 1.1 (optional) (default to 1)
    spatial = '-180.0,-90.0,180.0,90.0' # str | 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, \"box\" parameter (optional) (default to '-180.0,-90.0,180.0,90.0')
    sort_keys = score,,desc # str | Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0 (optional) (default to score,,desc)
    start_date = '2013-10-20' # date | The start date in yyyy-mm-dd format (optional)
    end_date = '2013-10-20' # date | The end date in yyyy-mm-dd format (optional)
    facet_filters = 'facet_filters_example' # str | Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values (optional)
    source = NSIDC # str | Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC (optional) (default to NSIDC)

    try:
        # Search documents using the OpenSearch 1.1 Specification
        api_response = api_instance.open_search(search_terms=search_terms, count=count, start_index=start_index, spatial=spatial, sort_keys=sort_keys, start_date=start_date, end_date=end_date, facet_filters=facet_filters, source=source)
        print("The response of SwaggerDocsApi->open_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwaggerDocsApi->open_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_terms** | **str**| URL-encoded keyword or keywords desired by the client; OpenSearch 1.1 | [optional] 
 **count** | **int**| The number of search results per page desired by the client; OpenSearch 1.1 | [optional] [default to 25]
 **start_index** | **int**| First search result desired by the search client; OpenSearch 1.1 | [optional] [default to 1]
 **spatial** | **str**| 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, \&quot;box\&quot; parameter | [optional] [default to &#39;-180.0,-90.0,180.0,90.0&#39;]
 **sort_keys** | **str**| Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0 | [optional] [default to score,,desc]
 **start_date** | **date**| The start date in yyyy-mm-dd format | [optional] 
 **end_date** | **date**| The end date in yyyy-mm-dd format | [optional] 
 **facet_filters** | **str**| Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values | [optional] 
 **source** | **str**| Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC | [optional] [default to NSIDC]

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/atom+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **opensearch_description**
> str opensearch_description()

Describes the web interface of NSIDC's data search engine

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://nsidc.org/api/dataset/2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://nsidc.org/api/dataset/2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SwaggerDocsApi(api_client)

    try:
        # Describes the web interface of NSIDC's data search engine
        api_response = api_instance.opensearch_description()
        print("The response of SwaggerDocsApi->opensearch_description:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SwaggerDocsApi->opensearch_description: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/opensearchdescription+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

