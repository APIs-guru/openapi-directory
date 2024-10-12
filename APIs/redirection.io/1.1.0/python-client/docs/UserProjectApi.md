# openapi_client.UserProjectApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user_project_item**](UserProjectApi.md#delete_user_project_item) | **DELETE** /user-projects/{id} | Removes the UserProject resource.
[**get_user_project_item**](UserProjectApi.md#get_user_project_item) | **GET** /user-projects/{id} | Retrieves a UserProject resource.
[**post_user_project_collection**](UserProjectApi.md#post_user_project_collection) | **POST** /user-projects | Creates a UserProject resource.
[**put_user_project_item**](UserProjectApi.md#put_user_project_item) | **PUT** /user-projects/{id} | Replaces the UserProject resource.


# **delete_user_project_item**
> delete_user_project_item(id)

Removes the UserProject resource.

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
    api_instance = openapi_client.UserProjectApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the UserProject resource.
        api_instance.delete_user_project_item(id)
    except Exception as e:
        print("Exception when calling UserProjectApi->delete_user_project_item: %s\n" % e)
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
**204** | UserProject resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_project_item**
> UserProjectRead get_user_project_item(id)

Retrieves a UserProject resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_project_read import UserProjectRead
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
    api_instance = openapi_client.UserProjectApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a UserProject resource.
        api_response = api_instance.get_user_project_item(id)
        print("The response of UserProjectApi->get_user_project_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProjectApi->get_user_project_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**UserProjectRead**](UserProjectRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserProject resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_project_collection**
> UserProjectRead post_user_project_collection(user_project=user_project)

Creates a UserProject resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_project_creation_write import UserProjectCreationWrite
from openapi_client.models.user_project_read import UserProjectRead
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
    api_instance = openapi_client.UserProjectApi(api_client)
    user_project = openapi_client.UserProjectCreationWrite() # UserProjectCreationWrite | The new UserProject resource (optional)

    try:
        # Creates a UserProject resource.
        api_response = api_instance.post_user_project_collection(user_project=user_project)
        print("The response of UserProjectApi->post_user_project_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProjectApi->post_user_project_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_project** | [**UserProjectCreationWrite**](UserProjectCreationWrite.md)| The new UserProject resource | [optional] 

### Return type

[**UserProjectRead**](UserProjectRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | UserProject resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_user_project_item**
> UserProjectRead put_user_project_item(id, user_project=user_project)

Replaces the UserProject resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_project_read import UserProjectRead
from openapi_client.models.user_project_write import UserProjectWrite
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
    api_instance = openapi_client.UserProjectApi(api_client)
    id = 'id_example' # str | 
    user_project = openapi_client.UserProjectWrite() # UserProjectWrite | The updated UserProject resource (optional)

    try:
        # Replaces the UserProject resource.
        api_response = api_instance.put_user_project_item(id, user_project=user_project)
        print("The response of UserProjectApi->put_user_project_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserProjectApi->put_user_project_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user_project** | [**UserProjectWrite**](UserProjectWrite.md)| The updated UserProject resource | [optional] 

### Return type

[**UserProjectRead**](UserProjectRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserProject resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

