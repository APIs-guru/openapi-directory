# openapi_client.CategoriesApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_categories**](CategoriesApi.md#add_categories) | **POST** /categories.{content_type} | Add user categories
[**delete_categories**](CategoriesApi.md#delete_categories) | **DELETE** /categories.{content_type} | Remove user categories
[**get_categories**](CategoriesApi.md#get_categories) | **GET** /categories.{content_type} | Retrieve user categories
[**update_categories**](CategoriesApi.md#update_categories) | **PUT** /categories.{content_type} | Updates user categories


# **add_categories**
> List[CategoryResponseVersion] add_categories(content_type, categories, config_id=config_id)

Add user categories

This method adds user categories on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.category_response_version import CategoryResponseVersion
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
    api_instance = openapi_client.CategoriesApi(api_client)
    content_type = 'content_type_example' # str | 
    categories = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration user categories linked to. (optional)

    try:
        # Add user categories
        api_response = api_instance.add_categories(content_type, categories, config_id=config_id)
        print("The response of CategoriesApi->add_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->add_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **categories** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration user categories linked to. | [optional] 

### Return type

[**List[CategoryResponseVersion]**](CategoryResponseVersion.md)

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
**406** | Number of allowed categories per configuration or samples per category achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_categories**
> delete_categories(content_type, category_ids, config_id=config_id)

Remove user categories

This method removes certain user categories by their IDs on Semantria side.

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
    api_instance = openapi_client.CategoriesApi(api_client)
    content_type = 'content_type_example' # str | 
    category_ids = ['category_ids_example'] # List[str] | List of user category identifiers.
    config_id = 'config_id_example' # str | Identifier of configuration user categories linked to. (optional)

    try:
        # Remove user categories
        api_instance.delete_categories(content_type, category_ids, config_id=config_id)
    except Exception as e:
        print("Exception when calling CategoriesApi->delete_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **category_ids** | [**List[str]**](str.md)| List of user category identifiers. | 
 **config_id** | **str**| Identifier of configuration user categories linked to. | [optional] 

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

# **get_categories**
> List[CategoryResponseVersion] get_categories(content_type, config_id=config_id)

Retrieve user categories

This method retrieves list of user categories available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.category_response_version import CategoryResponseVersion
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
    api_instance = openapi_client.CategoriesApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration user categories linked to. (optional)

    try:
        # Retrieve user categories
        api_response = api_instance.get_categories(content_type, config_id=config_id)
        print("The response of CategoriesApi->get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->get_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration user categories linked to. | [optional] 

### Return type

[**List[CategoryResponseVersion]**](CategoryResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the categories list. |  -  |
**202** | Client request accepted, no categories found. Server responds with empty body. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_categories**
> List[CategoryResponseVersion] update_categories(content_type, categories, config_id=config_id)

Updates user categories

This method updates user categories by unique IDs on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.category_response_version import CategoryResponseVersion
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
    api_instance = openapi_client.CategoriesApi(api_client)
    content_type = 'content_type_example' # str | 
    categories = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration user categories linked to. (optional)

    try:
        # Updates user categories
        api_response = api_instance.update_categories(content_type, categories, config_id=config_id)
        print("The response of CategoriesApi->update_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->update_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **categories** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration user categories linked to. | [optional] 

### Return type

[**List[CategoryResponseVersion]**](CategoryResponseVersion.md)

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
**406** | Number of allowed categories per configuration or samples per category achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

