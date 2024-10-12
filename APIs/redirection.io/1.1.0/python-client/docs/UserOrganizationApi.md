# openapi_client.UserOrganizationApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user_organization_item**](UserOrganizationApi.md#delete_user_organization_item) | **DELETE** /user-organizations/{id} | Removes the UserOrganization resource.
[**get_user_organization_item**](UserOrganizationApi.md#get_user_organization_item) | **GET** /user-organizations/{id} | Retrieves a UserOrganization resource.
[**post_user_organization_collection**](UserOrganizationApi.md#post_user_organization_collection) | **POST** /user-organizations | Creates a UserOrganization resource.
[**put_user_organization_item**](UserOrganizationApi.md#put_user_organization_item) | **PUT** /user-organizations/{id} | Replaces the UserOrganization resource.


# **delete_user_organization_item**
> delete_user_organization_item(id)

Removes the UserOrganization resource.

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
    api_instance = openapi_client.UserOrganizationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the UserOrganization resource.
        api_instance.delete_user_organization_item(id)
    except Exception as e:
        print("Exception when calling UserOrganizationApi->delete_user_organization_item: %s\n" % e)
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
**204** | UserOrganization resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_organization_item**
> UserOrganizationRead get_user_organization_item(id)

Retrieves a UserOrganization resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_organization_read import UserOrganizationRead
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
    api_instance = openapi_client.UserOrganizationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a UserOrganization resource.
        api_response = api_instance.get_user_organization_item(id)
        print("The response of UserOrganizationApi->get_user_organization_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserOrganizationApi->get_user_organization_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**UserOrganizationRead**](UserOrganizationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserOrganization resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_user_organization_collection**
> UserOrganizationRead post_user_organization_collection(user_organization=user_organization)

Creates a UserOrganization resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_organization_creation_write import UserOrganizationCreationWrite
from openapi_client.models.user_organization_read import UserOrganizationRead
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
    api_instance = openapi_client.UserOrganizationApi(api_client)
    user_organization = openapi_client.UserOrganizationCreationWrite() # UserOrganizationCreationWrite | The new UserOrganization resource (optional)

    try:
        # Creates a UserOrganization resource.
        api_response = api_instance.post_user_organization_collection(user_organization=user_organization)
        print("The response of UserOrganizationApi->post_user_organization_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserOrganizationApi->post_user_organization_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_organization** | [**UserOrganizationCreationWrite**](UserOrganizationCreationWrite.md)| The new UserOrganization resource | [optional] 

### Return type

[**UserOrganizationRead**](UserOrganizationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | UserOrganization resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_user_organization_item**
> UserOrganizationRead put_user_organization_item(id, user_organization=user_organization)

Replaces the UserOrganization resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.user_organization_read import UserOrganizationRead
from openapi_client.models.user_organization_write import UserOrganizationWrite
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
    api_instance = openapi_client.UserOrganizationApi(api_client)
    id = 'id_example' # str | 
    user_organization = openapi_client.UserOrganizationWrite() # UserOrganizationWrite | The updated UserOrganization resource (optional)

    try:
        # Replaces the UserOrganization resource.
        api_response = api_instance.put_user_organization_item(id, user_organization=user_organization)
        print("The response of UserOrganizationApi->put_user_organization_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserOrganizationApi->put_user_organization_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user_organization** | [**UserOrganizationWrite**](UserOrganizationWrite.md)| The updated UserOrganization resource | [optional] 

### Return type

[**UserOrganizationRead**](UserOrganizationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UserOrganization resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

