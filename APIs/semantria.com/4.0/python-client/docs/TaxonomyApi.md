# openapi_client.TaxonomyApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_taxonomy**](TaxonomyApi.md#add_taxonomy) | **POST** /taxonomy.{content_type} | Add taxonomy nodes
[**delete_taxonomy**](TaxonomyApi.md#delete_taxonomy) | **DELETE** /taxonomy.{content_type} | Remove taxonomy nodes
[**get_taxonomy**](TaxonomyApi.md#get_taxonomy) | **GET** /taxonomy.{content_type} | Retrieve taxonomy
[**update_taxonomy**](TaxonomyApi.md#update_taxonomy) | **PUT** /taxonomy.{content_type} | Update taxonomy nodes


# **add_taxonomy**
> List[TaxonomyNodeResponseVersion] add_taxonomy(content_type, taxonomy, config_id=config_id)

Add taxonomy nodes

This method adds taxonomy nodes on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.taxonomy_node_response_version import TaxonomyNodeResponseVersion
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
    api_instance = openapi_client.TaxonomyApi(api_client)
    content_type = 'content_type_example' # str | 
    taxonomy = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Add taxonomy nodes
        api_response = api_instance.add_taxonomy(content_type, taxonomy, config_id=config_id)
        print("The response of TaxonomyApi->add_taxonomy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxonomyApi->add_taxonomy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **taxonomy** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration queries linked to. | [optional] 

### Return type

[**List[TaxonomyNodeResponseVersion]**](TaxonomyNodeResponseVersion.md)

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

# **delete_taxonomy**
> delete_taxonomy(content_type, taxonomy_node_ids, config_id=config_id)

Remove taxonomy nodes

This method removes certain taxonomy nodes by their IDs on Semantria side.

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
    api_instance = openapi_client.TaxonomyApi(api_client)
    content_type = 'content_type_example' # str | 
    taxonomy_node_ids = ['taxonomy_node_ids_example'] # List[str] | List of taxonomy node identifiers.
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Remove taxonomy nodes
        api_instance.delete_taxonomy(content_type, taxonomy_node_ids, config_id=config_id)
    except Exception as e:
        print("Exception when calling TaxonomyApi->delete_taxonomy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **taxonomy_node_ids** | [**List[str]**](str.md)| List of taxonomy node identifiers. | 
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

# **get_taxonomy**
> List[TaxonomyNodeResponseVersion] get_taxonomy(content_type, config_id=config_id)

Retrieve taxonomy

This method retrieves list of taxonomy available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.taxonomy_node_response_version import TaxonomyNodeResponseVersion
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
    api_instance = openapi_client.TaxonomyApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration taxonomy linked to. (optional)

    try:
        # Retrieve taxonomy
        api_response = api_instance.get_taxonomy(content_type, config_id=config_id)
        print("The response of TaxonomyApi->get_taxonomy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxonomyApi->get_taxonomy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration taxonomy linked to. | [optional] 

### Return type

[**List[TaxonomyNodeResponseVersion]**](TaxonomyNodeResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the taxonomy list. |  -  |
**202** | Client request accepted and no taxonomy found. Server responds with empty body. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_taxonomy**
> List[TaxonomyNodeResponseVersion] update_taxonomy(content_type, taxonomy, config_id=config_id)

Update taxonomy nodes

This method updates taxonomy nodes on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.taxonomy_node_response_version import TaxonomyNodeResponseVersion
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
    api_instance = openapi_client.TaxonomyApi(api_client)
    content_type = 'content_type_example' # str | 
    taxonomy = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration queries linked to. (optional)

    try:
        # Update taxonomy nodes
        api_response = api_instance.update_taxonomy(content_type, taxonomy, config_id=config_id)
        print("The response of TaxonomyApi->update_taxonomy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxonomyApi->update_taxonomy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **taxonomy** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration queries linked to. | [optional] 

### Return type

[**List[TaxonomyNodeResponseVersion]**](TaxonomyNodeResponseVersion.md)

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

