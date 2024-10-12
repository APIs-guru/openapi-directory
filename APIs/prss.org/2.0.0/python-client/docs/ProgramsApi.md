# openapi_client.ProgramsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_programs_id_get**](ProgramsApi.md#api_v2_programs_id_get) | **GET** /api/v2/programs/{id} | Returns the program matching the given ID.
[**api_v2_programs_search_get**](ProgramsApi.md#api_v2_programs_search_get) | **GET** /api/v2/programs/search | Optimized free-text search for programs using various filters.


# **api_v2_programs_id_get**
> Program api_v2_programs_id_get(id)

Returns the program matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.program import Program
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProgramsApi(api_client)
    id = 56 # int | The ID of the program to operate on.

    try:
        # Returns the program matching the given ID.
        api_response = api_instance.api_v2_programs_id_get(id)
        print("The response of ProgramsApi->api_v2_programs_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProgramsApi->api_v2_programs_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the program to operate on. | 

### Return type

[**Program**](Program.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching program. |  -  |
**403** | Authorization failed, or the user is not permitted to view this program. |  -  |
**404** | The program cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_programs_search_get**
> List[Program] api_v2_programs_search_get(keywords=keywords, page_start=page_start, page_size=page_size)

Optimized free-text search for programs using various filters.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.program import Program
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProgramsApi(api_client)
    keywords = 'keywords_example' # str | Free text search that matches against the program title or description. (optional)
    page_start = 0 # int | The start page of the results to return. The first item is indexed at 0. (optional) (default to 0)
    page_size = 500 # int | The number of items to return. Must be between 0 and 500, inclusive. (optional) (default to 500)

    try:
        # Optimized free-text search for programs using various filters.
        api_response = api_instance.api_v2_programs_search_get(keywords=keywords, page_start=page_start, page_size=page_size)
        print("The response of ProgramsApi->api_v2_programs_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProgramsApi->api_v2_programs_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keywords** | **str**| Free text search that matches against the program title or description. | [optional] 
 **page_start** | **int**| The start page of the results to return. The first item is indexed at 0. | [optional] [default to 0]
 **page_size** | **int**| The number of items to return. Must be between 0 and 500, inclusive. | [optional] [default to 500]

### Return type

[**List[Program]**](Program.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Programs matching the search request sorted by relevance. |  -  |
**403** | Authorization failed, username or password not found or incorrect. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

