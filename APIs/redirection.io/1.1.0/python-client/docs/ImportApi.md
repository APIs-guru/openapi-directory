# openapi_client.ImportApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_import_collection**](ImportApi.md#get_import_collection) | **GET** /imports | Retrieves the collection of Import resources.
[**get_import_item**](ImportApi.md#get_import_item) | **GET** /imports/{id} | Retrieves a Import resource.
[**post_import_collection**](ImportApi.md#post_import_collection) | **POST** /imports | Creates a Import resource.


# **get_import_collection**
> List[ImportRead] get_import_collection(project_id, page=page)

Retrieves the collection of Import resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.import_read import ImportRead
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
    api_instance = openapi_client.ImportApi(api_client)
    project_id = 'project_id_example' # str | 
    page = 56 # int | The collection page number (optional)

    try:
        # Retrieves the collection of Import resources.
        api_response = api_instance.get_import_collection(project_id, page=page)
        print("The response of ImportApi->get_import_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportApi->get_import_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 
 **page** | **int**| The collection page number | [optional] 

### Return type

[**List[ImportRead]**](ImportRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Import collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_import_item**
> ImportRead get_import_item(id)

Retrieves a Import resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.import_read import ImportRead
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
    api_instance = openapi_client.ImportApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Import resource.
        api_response = api_instance.get_import_item(id)
        print("The response of ImportApi->get_import_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportApi->get_import_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ImportRead**](ImportRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Import resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_import_collection**
> ImportRead post_import_collection(var_import=var_import)

Creates a Import resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.import_read import ImportRead
from openapi_client.models.import_write import ImportWrite
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
    api_instance = openapi_client.ImportApi(api_client)
    var_import = openapi_client.ImportWrite() # ImportWrite | The new Import resource (optional)

    try:
        # Creates a Import resource.
        api_response = api_instance.post_import_collection(var_import=var_import)
        print("The response of ImportApi->post_import_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportApi->post_import_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_import** | [**ImportWrite**](ImportWrite.md)| The new Import resource | [optional] 

### Return type

[**ImportRead**](ImportRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Import resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

