# openapi_client.ProjectApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_project_item**](ProjectApi.md#delete_project_item) | **DELETE** /projects/{id} | Removes the Project resource.
[**get_project_collection**](ProjectApi.md#get_project_collection) | **GET** /projects | Retrieves the collection of Project resources.
[**get_project_item**](ProjectApi.md#get_project_item) | **GET** /projects/{id} | Retrieves a Project resource.
[**post_project_collection**](ProjectApi.md#post_project_collection) | **POST** /projects | Creates a Project resource.
[**put_project_item**](ProjectApi.md#put_project_item) | **PUT** /projects/{id} | Replaces the Project resource.


# **delete_project_item**
> delete_project_item(id)

Removes the Project resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the Project resource.
        api_instance.delete_project_item(id)
    except Exception as e:
        print("Exception when calling ProjectApi->delete_project_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Project resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_collection**
> List[ProjectList] get_project_collection()

Retrieves the collection of Project resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.project_list import ProjectList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)

    try:
        # Retrieves the collection of Project resources.
        api_response = api_instance.get_project_collection()
        print("The response of ProjectApi->get_project_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->get_project_collection: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ProjectList]**](ProjectList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_item**
> ProjectRead get_project_item(id)

Retrieves a Project resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.project_read import ProjectRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Project resource.
        api_response = api_instance.get_project_item(id)
        print("The response of ProjectApi->get_project_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->get_project_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ProjectRead**](ProjectRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_project_collection**
> ProjectRead post_project_collection(project=project)

Creates a Project resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.project_creation_write import ProjectCreationWrite
from openapi_client.models.project_read import ProjectRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    project = openapi_client.ProjectCreationWrite() # ProjectCreationWrite | The new Project resource (optional)

    try:
        # Creates a Project resource.
        api_response = api_instance.post_project_collection(project=project)
        print("The response of ProjectApi->post_project_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->post_project_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**ProjectCreationWrite**](ProjectCreationWrite.md)| The new Project resource | [optional] 

### Return type

[**ProjectRead**](ProjectRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Project resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_project_item**
> ProjectRead put_project_item(id, project=project)

Replaces the Project resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.project_read import ProjectRead
from openapi_client.models.project_write import ProjectWrite
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    id = 'id_example' # str | 
    project = openapi_client.ProjectWrite() # ProjectWrite | The updated Project resource (optional)

    try:
        # Replaces the Project resource.
        api_response = api_instance.put_project_item(id, project=project)
        print("The response of ProjectApi->put_project_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->put_project_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **project** | [**ProjectWrite**](ProjectWrite.md)| The updated Project resource | [optional] 

### Return type

[**ProjectRead**](ProjectRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

