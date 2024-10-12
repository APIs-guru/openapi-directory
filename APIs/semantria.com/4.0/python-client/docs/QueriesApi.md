# openapi_client.QueriesApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_queries**](QueriesApi.md#add_queries) | **POST** /queries.{content_type} | Add or update queries
[**delete_queries**](QueriesApi.md#delete_queries) | **DELETE** /queries.{content_type} | Remove queries
[**get_queries**](QueriesApi.md#get_queries) | **GET** /queries.{content_type} | Retrieve queries
[**update_queries**](QueriesApi.md#update_queries) | **PUT** /queries.{content_type} | Update queries


# **add_queries**
> List[QueryResponseVersion] add_queries(content_type, queries, config_id=config_id)

Add or update queries

This method adds queries on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.query_response_version import QueryResponseVersion
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
    api_instance = openapi_client.QueriesApi(api_client)
    content_type = 'content_type_example' # str | 
    queries = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Add or update queries
        api_response = api_instance.add_queries(content_type, queries, config_id=config_id)
        print("The response of QueriesApi->add_queries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueriesApi->add_queries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **queries** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration queries linked to. | [optional] 

### Return type

[**List[QueryResponseVersion]**](QueryResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Number of allowed queries per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_queries**
> delete_queries(content_type, query_ids, config_id=config_id)

Remove queries

This method removes certain queries by their IDs on Semantria side.

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
    api_instance = openapi_client.QueriesApi(api_client)
    content_type = 'content_type_example' # str | 
    query_ids = ['query_ids_example'] # List[str] | List of query identifiers.
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Remove queries
        api_instance.delete_queries(content_type, query_ids, config_id=config_id)
    except Exception as e:
        print("Exception when calling QueriesApi->delete_queries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **query_ids** | [**List[str]**](str.md)| List of query identifiers. | 
 **config_id** | **str**| Identifier of configuration queries linked to. | [optional] 

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
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**403** | Forbidden. Server responds if client tries to remove primary configuration. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_queries**
> List[QueryResponseVersion] get_queries(content_type, config_id=config_id)

Retrieve queries

This method retrieves list of queries available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.query_response_version import QueryResponseVersion
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
    api_instance = openapi_client.QueriesApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Retrieve queries
        api_response = api_instance.get_queries(content_type, config_id=config_id)
        print("The response of QueriesApi->get_queries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueriesApi->get_queries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration queries linked to. | [optional] 

### Return type

[**List[QueryResponseVersion]**](QueryResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the queries list. |  -  |
**202** | Client request accepted and no queries found. Server responds with empty body. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_queries**
> List[QueryResponseVersion] update_queries(content_type, queries, config_id=config_id)

Update queries

This method updates queries by unique IDs on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.query_response_version import QueryResponseVersion
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
    api_instance = openapi_client.QueriesApi(api_client)
    content_type = 'content_type_example' # str | 
    queries = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Update queries
        api_response = api_instance.update_queries(content_type, queries, config_id=config_id)
        print("The response of QueriesApi->update_queries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueriesApi->update_queries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **queries** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration queries linked to. | [optional] 

### Return type

[**List[QueryResponseVersion]**](QueryResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Number of allowed queries per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

