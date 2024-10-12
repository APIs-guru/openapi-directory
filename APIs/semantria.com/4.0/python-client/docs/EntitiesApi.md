# openapi_client.EntitiesApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_entities**](EntitiesApi.md#add_entities) | **POST** /entities.{content_type} | Add user entities
[**delete_entities**](EntitiesApi.md#delete_entities) | **DELETE** /entities.{content_type} | Remove user entities
[**get_entities**](EntitiesApi.md#get_entities) | **GET** /entities.{content_type} | Retrieve user entities
[**update_entities**](EntitiesApi.md#update_entities) | **PUT** /entities.{content_type} | Update user entities


# **add_entities**
> List[EntityResponseVersion] add_entities(content_type, user_entities, config_id=config_id)

Add user entities

This method adds user entities on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.entity_response_version import EntityResponseVersion
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
    api_instance = openapi_client.EntitiesApi(api_client)
    content_type = 'content_type_example' # str | 
    user_entities = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration user entities linked to. (optional)

    try:
        # Add user entities
        api_response = api_instance.add_entities(content_type, user_entities, config_id=config_id)
        print("The response of EntitiesApi->add_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntitiesApi->add_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **user_entities** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration user entities linked to. | [optional] 

### Return type

[**List[EntityResponseVersion]**](EntityResponseVersion.md)

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
**406** | Number of allowed entities per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_entities**
> delete_entities(content_type)

Remove user entities

This method removes certain user entities by their names on Semantria side.

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
    api_instance = openapi_client.EntitiesApi(api_client)
    content_type = 'content_type_example' # str | 

    try:
        # Remove user entities
        api_instance.delete_entities(content_type)
    except Exception as e:
        print("Exception when calling EntitiesApi->delete_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 

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

# **get_entities**
> List[EntityResponseVersion] get_entities(content_type, config_id=config_id)

Retrieve user entities

This method retrieves list of user entities available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.entity_response_version import EntityResponseVersion
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
    api_instance = openapi_client.EntitiesApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration user entities linked to. (optional)

    try:
        # Retrieve user entities
        api_response = api_instance.get_entities(content_type, config_id=config_id)
        print("The response of EntitiesApi->get_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntitiesApi->get_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration user entities linked to. | [optional] 

### Return type

[**List[EntityResponseVersion]**](EntityResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the entities list. |  -  |
**202** | Client request accepted and no entities found. Server responds with empty body. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_entities**
> List[EntityResponseVersion] update_entities(content_type, user_entities, config_id=config_id)

Update user entities

This method updates user entities by unique IDs on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.entity_response_version import EntityResponseVersion
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
    api_instance = openapi_client.EntitiesApi(api_client)
    content_type = 'content_type_example' # str | 
    user_entities = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration user entities linked to. (optional)

    try:
        # Update user entities
        api_response = api_instance.update_entities(content_type, user_entities, config_id=config_id)
        print("The response of EntitiesApi->update_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntitiesApi->update_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **user_entities** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration user entities linked to. | [optional] 

### Return type

[**List[EntityResponseVersion]**](EntityResponseVersion.md)

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
**406** | Number of allowed entities per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

