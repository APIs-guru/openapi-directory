# openapi_client.OrganizationApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_organization_item**](OrganizationApi.md#delete_organization_item) | **DELETE** /organizations/{id} | Removes the Organization resource.
[**get_organization_item**](OrganizationApi.md#get_organization_item) | **GET** /organizations/{id} | Retrieves a Organization resource.
[**post_organization_collection**](OrganizationApi.md#post_organization_collection) | **POST** /organizations | Creates a Organization resource.
[**put_organization_item**](OrganizationApi.md#put_organization_item) | **PUT** /organizations/{id} | Replaces the Organization resource.


# **delete_organization_item**
> delete_organization_item(id)

Removes the Organization resource.

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
    api_instance = openapi_client.OrganizationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the Organization resource.
        api_instance.delete_organization_item(id)
    except Exception as e:
        print("Exception when calling OrganizationApi->delete_organization_item: %s\n" % e)
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
**204** | Organization resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_item**
> OrganizationRead get_organization_item(id)

Retrieves a Organization resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.organization_read import OrganizationRead
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
    api_instance = openapi_client.OrganizationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Organization resource.
        api_response = api_instance.get_organization_item(id)
        print("The response of OrganizationApi->get_organization_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->get_organization_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**OrganizationRead**](OrganizationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organization_collection**
> OrganizationRead post_organization_collection(organization=organization)

Creates a Organization resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.organization_read import OrganizationRead
from openapi_client.models.organization_write import OrganizationWrite
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
    api_instance = openapi_client.OrganizationApi(api_client)
    organization = openapi_client.OrganizationWrite() # OrganizationWrite | The new Organization resource (optional)

    try:
        # Creates a Organization resource.
        api_response = api_instance.post_organization_collection(organization=organization)
        print("The response of OrganizationApi->post_organization_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->post_organization_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | [**OrganizationWrite**](OrganizationWrite.md)| The new Organization resource | [optional] 

### Return type

[**OrganizationRead**](OrganizationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Organization resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organization_item**
> OrganizationRead put_organization_item(id, organization=organization)

Replaces the Organization resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.organization_read import OrganizationRead
from openapi_client.models.organization_write import OrganizationWrite
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
    api_instance = openapi_client.OrganizationApi(api_client)
    id = 'id_example' # str | 
    organization = openapi_client.OrganizationWrite() # OrganizationWrite | The updated Organization resource (optional)

    try:
        # Replaces the Organization resource.
        api_response = api_instance.put_organization_item(id, organization=organization)
        print("The response of OrganizationApi->put_organization_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->put_organization_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **organization** | [**OrganizationWrite**](OrganizationWrite.md)| The updated Organization resource | [optional] 

### Return type

[**OrganizationRead**](OrganizationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

