# openapi_client.InstanceApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_instance_collection**](InstanceApi.md#get_instance_collection) | **GET** /instances | Retrieves the collection of Instance resources.
[**get_instance_item**](InstanceApi.md#get_instance_item) | **GET** /instances/{id} | Retrieves a Instance resource.
[**live_instance_item**](InstanceApi.md#live_instance_item) | **PUT** /instances/{id}/live | Replaces the Instance resource.
[**logging_instance_item**](InstanceApi.md#logging_instance_item) | **PUT** /instances/{id} | Replaces the Instance resource.
[**post_instance_collection**](InstanceApi.md#post_instance_collection) | **POST** /agent-instance-updates | Creates a Instance resource.
[**put_instance_item**](InstanceApi.md#put_instance_item) | **PUT** /agent-instance-updates/{id} | Replaces the Instance resource.


# **get_instance_collection**
> List[InstanceRead] get_instance_collection(project_id)

Retrieves the collection of Instance resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.instance_read import InstanceRead
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
    api_instance = openapi_client.InstanceApi(api_client)
    project_id = 'project_id_example' # str | 

    try:
        # Retrieves the collection of Instance resources.
        api_response = api_instance.get_instance_collection(project_id)
        print("The response of InstanceApi->get_instance_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->get_instance_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**|  | 

### Return type

[**List[InstanceRead]**](InstanceRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Instance collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_instance_item**
> InstanceRead get_instance_item(id)

Retrieves a Instance resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.instance_read import InstanceRead
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
    api_instance = openapi_client.InstanceApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Instance resource.
        api_response = api_instance.get_instance_item(id)
        print("The response of InstanceApi->get_instance_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->get_instance_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**InstanceRead**](InstanceRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Instance resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **live_instance_item**
> InstanceRead live_instance_item(id, instance=instance)

Replaces the Instance resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.instance_read import InstanceRead
from openapi_client.models.instance_write import InstanceWrite
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
    api_instance = openapi_client.InstanceApi(api_client)
    id = 'id_example' # str | 
    instance = openapi_client.InstanceWrite() # InstanceWrite | The updated Instance resource (optional)

    try:
        # Replaces the Instance resource.
        api_response = api_instance.live_instance_item(id, instance=instance)
        print("The response of InstanceApi->live_instance_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->live_instance_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **instance** | [**InstanceWrite**](InstanceWrite.md)| The updated Instance resource | [optional] 

### Return type

[**InstanceRead**](InstanceRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Instance resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logging_instance_item**
> InstanceRead logging_instance_item(id, instance=instance)

Replaces the Instance resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.instance_read import InstanceRead
from openapi_client.models.instance_write import InstanceWrite
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
    api_instance = openapi_client.InstanceApi(api_client)
    id = 'id_example' # str | 
    instance = openapi_client.InstanceWrite() # InstanceWrite | The updated Instance resource (optional)

    try:
        # Replaces the Instance resource.
        api_response = api_instance.logging_instance_item(id, instance=instance)
        print("The response of InstanceApi->logging_instance_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->logging_instance_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **instance** | [**InstanceWrite**](InstanceWrite.md)| The updated Instance resource | [optional] 

### Return type

[**InstanceRead**](InstanceRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Instance resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_instance_collection**
> InstanceRead post_instance_collection(instance=instance)

Creates a Instance resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.instance_read import InstanceRead
from openapi_client.models.instance_write import InstanceWrite
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
    api_instance = openapi_client.InstanceApi(api_client)
    instance = openapi_client.InstanceWrite() # InstanceWrite | The new Instance resource (optional)

    try:
        # Creates a Instance resource.
        api_response = api_instance.post_instance_collection(instance=instance)
        print("The response of InstanceApi->post_instance_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->post_instance_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance** | [**InstanceWrite**](InstanceWrite.md)| The new Instance resource | [optional] 

### Return type

[**InstanceRead**](InstanceRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Instance resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_instance_item**
> InstanceRead put_instance_item(id, instance=instance)

Replaces the Instance resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.instance_read import InstanceRead
from openapi_client.models.instance_write import InstanceWrite
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
    api_instance = openapi_client.InstanceApi(api_client)
    id = 'id_example' # str | 
    instance = openapi_client.InstanceWrite() # InstanceWrite | The updated Instance resource (optional)

    try:
        # Replaces the Instance resource.
        api_response = api_instance.put_instance_item(id, instance=instance)
        print("The response of InstanceApi->put_instance_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceApi->put_instance_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **instance** | [**InstanceWrite**](InstanceWrite.md)| The updated Instance resource | [optional] 

### Return type

[**InstanceRead**](InstanceRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Instance resource updated |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

