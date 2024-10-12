# openapi_client.QueryApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_query_suggestions**](QueryApi.md#get_query_suggestions) | **GET** /query/suggestions | Retrieve query suggestions
[**get_query_suggestions_name**](QueryApi.md#get_query_suggestions_name) | **GET** /query/suggestions/{name} | Retrieve query suggestions for a branching suggestion
[**post_query**](QueryApi.md#post_query) | **POST** /query | Query InfluxDB
[**post_query_analyze**](QueryApi.md#post_query_analyze) | **POST** /query/analyze | Analyze an InfluxQL or Flux query
[**post_query_ast**](QueryApi.md#post_query_ast) | **POST** /query/ast | Generate an Abstract Syntax Tree (AST) from a query


# **get_query_suggestions**
> FluxSuggestions get_query_suggestions(zap_trace_span=zap_trace_span)

Retrieve query suggestions

### Example


```python
import openapi_client
from openapi_client.models.flux_suggestions import FluxSuggestions
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve query suggestions
        api_response = api_instance.get_query_suggestions(zap_trace_span=zap_trace_span)
        print("The response of QueryApi->get_query_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->get_query_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**FluxSuggestions**](FluxSuggestions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Suggestions for next functions in call chain |  -  |
**0** | Any response other than 200 is an internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_query_suggestions_name**
> FluxSuggestion get_query_suggestions_name(name, zap_trace_span=zap_trace_span)

Retrieve query suggestions for a branching suggestion

### Example


```python
import openapi_client
from openapi_client.models.flux_suggestion import FluxSuggestion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    name = 'name_example' # str | The name of the branching suggestion.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve query suggestions for a branching suggestion
        api_response = api_instance.get_query_suggestions_name(name, zap_trace_span=zap_trace_span)
        print("The response of QueryApi->get_query_suggestions_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->get_query_suggestions_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the branching suggestion. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**FluxSuggestion**](FluxSuggestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Suggestions for next functions in call chain |  -  |
**0** | Any response other than 200 is an internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_query**
> bytearray post_query(zap_trace_span=zap_trace_span, accept_encoding=accept_encoding, content_type=content_type, org=org, org_id=org_id, post_query_request=post_query_request)

Query InfluxDB

### Example


```python
import openapi_client
from openapi_client.models.post_query_request import PostQueryRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    accept_encoding = identity # str | The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. (optional) (default to identity)
    content_type = 'content_type_example' # str |  (optional)
    org = 'org_example' # str | Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence. (optional)
    org_id = 'org_id_example' # str | Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence. (optional)
    post_query_request = openapi_client.PostQueryRequest() # PostQueryRequest | Flux query or specification to execute (optional)

    try:
        # Query InfluxDB
        api_response = api_instance.post_query(zap_trace_span=zap_trace_span, accept_encoding=accept_encoding, content_type=content_type, org=org, org_id=org_id, post_query_request=post_query_request)
        print("The response of QueryApi->post_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->post_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **accept_encoding** | **str**| The Accept-Encoding request HTTP header advertises which content encoding, usually a compression algorithm, the client is able to understand. | [optional] [default to identity]
 **content_type** | **str**|  | [optional] 
 **org** | **str**| Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both &#x60;orgID&#x60; and &#x60;org&#x60; are specified, &#x60;org&#x60; takes precedence. | [optional] 
 **org_id** | **str**| Specifies the ID of the organization executing the query. If both &#x60;orgID&#x60; and &#x60;org&#x60; are specified, &#x60;org&#x60; takes precedence. | [optional] 
 **post_query_request** | [**PostQueryRequest**](PostQueryRequest.md)| Flux query or specification to execute | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.flux
 - **Accept**: application/vnd.influx.arrow, text/csv, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query results |  * Content-Encoding - The Content-Encoding entity header is used to compress the media-type.  When present, its value indicates which encodings were applied to the entity-body <br>  * Trace-Id - The Trace-Id header reports the request&#39;s trace ID, if one was generated. <br>  |
**429** | Token is temporarily over quota. The Retry-After header describes when to try the read again. |  * Retry-After - A non-negative decimal integer indicating the seconds to delay after the response is received. <br>  |
**0** | Error processing query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_query_analyze**
> AnalyzeQueryResponse post_query_analyze(zap_trace_span=zap_trace_span, content_type=content_type, query=query)

Analyze an InfluxQL or Flux query

### Example


```python
import openapi_client
from openapi_client.models.analyze_query_response import AnalyzeQueryResponse
from openapi_client.models.query import Query
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    content_type = 'content_type_example' # str |  (optional)
    query = openapi_client.Query() # Query | Flux or InfluxQL query to analyze (optional)

    try:
        # Analyze an InfluxQL or Flux query
        api_response = api_instance.post_query_analyze(zap_trace_span=zap_trace_span, content_type=content_type, query=query)
        print("The response of QueryApi->post_query_analyze:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->post_query_analyze: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **content_type** | **str**|  | [optional] 
 **query** | [**Query**](Query.md)| Flux or InfluxQL query to analyze | [optional] 

### Return type

[**AnalyzeQueryResponse**](AnalyzeQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Query analyze results. Errors will be empty if the query is valid. |  -  |
**0** | Internal server error |  * X-Influx-Error - Error string describing the problem <br>  * X-Influx-Reference - Reference code unique to the error type <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_query_ast**
> ASTResponse post_query_ast(zap_trace_span=zap_trace_span, content_type=content_type, language_request=language_request)

Generate an Abstract Syntax Tree (AST) from a query

Analyzes flux query and generates a query specification.

### Example


```python
import openapi_client
from openapi_client.models.ast_response import ASTResponse
from openapi_client.models.language_request import LanguageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QueryApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    content_type = 'content_type_example' # str |  (optional)
    language_request = openapi_client.LanguageRequest() # LanguageRequest | Analyzed Flux query to generate abstract syntax tree. (optional)

    try:
        # Generate an Abstract Syntax Tree (AST) from a query
        api_response = api_instance.post_query_ast(zap_trace_span=zap_trace_span, content_type=content_type, language_request=language_request)
        print("The response of QueryApi->post_query_ast:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueryApi->post_query_ast: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **content_type** | **str**|  | [optional] 
 **language_request** | [**LanguageRequest**](LanguageRequest.md)| Analyzed Flux query to generate abstract syntax tree. | [optional] 

### Return type

[**ASTResponse**](ASTResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Abstract syntax tree of the flux query. |  -  |
**0** | Any response other than 200 is an internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

