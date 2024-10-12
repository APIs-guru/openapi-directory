# openapi_client.ConfigurationApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_configurations**](ConfigurationApi.md#add_configurations) | **POST** /configurations.{content_type} | Create user configurations
[**delete_configurations**](ConfigurationApi.md#delete_configurations) | **DELETE** /configurations.{content_type} | Remove user configurations
[**get_configurations**](ConfigurationApi.md#get_configurations) | **GET** /configurations.{content_type} | Retrieve user configurations
[**update_configurations**](ConfigurationApi.md#update_configurations) | **PUT** /configurations.{content_type} | Update user configurations


# **add_configurations**
> List[ConfigurationResponseVersion] add_configurations(content_type, configurations)

Create user configurations

This method creates configurations on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.configuration_response_version import ConfigurationResponseVersion
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    content_type = 'content_type_example' # str | 
    configurations = None # object | List of parametrized JSON or XML objects.

    try:
        # Create user configurations
        api_response = api_instance.add_configurations(content_type, configurations)
        print("The response of ConfigurationApi->add_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->add_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **configurations** | **object**| List of parametrized JSON or XML objects. | 

### Return type

[**List[ConfigurationResponseVersion]**](ConfigurationResponseVersion.md)

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
**406** | Number of allowed configurations for user subscription is reached. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_configurations**
> delete_configurations(content_type, configuration_ids)

Remove user configurations

This method removes certain configuration by unique ID on Semantria side.

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
    api_instance = openapi_client.ConfigurationApi(api_client)
    content_type = 'content_type_example' # str | 
    configuration_ids = ['configuration_ids_example'] # List[str] | List of configuration identifiers.

    try:
        # Remove user configurations
        api_instance.delete_configurations(content_type, configuration_ids)
    except Exception as e:
        print("Exception when calling ConfigurationApi->delete_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **configuration_ids** | [**List[str]**](str.md)| List of configuration identifiers. | 

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

# **get_configurations**
> List[ConfigurationResponseVersion] get_configurations(content_type)

Retrieve user configurations

This method retrieves all user configurations available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.configuration_response_version import ConfigurationResponseVersion
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    content_type = 'content_type_example' # str | 

    try:
        # Retrieve user configurations
        api_response = api_instance.get_configurations(content_type)
        print("The response of ConfigurationApi->get_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->get_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 

### Return type

[**List[ConfigurationResponseVersion]**](ConfigurationResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted. Server responds with status object. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_configurations**
> List[ConfigurationResponseVersion] update_configurations(content_type, configurations)

Update user configurations

This method updates specific configurations by unique IDs on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.configuration_response_version import ConfigurationResponseVersion
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
    api_instance = openapi_client.ConfigurationApi(api_client)
    content_type = 'content_type_example' # str | 
    configurations = None # object | List of parametrized JSON or XML objects.

    try:
        # Update user configurations
        api_response = api_instance.update_configurations(content_type, configurations)
        print("The response of ConfigurationApi->update_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigurationApi->update_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **configurations** | **object**| List of parametrized JSON or XML objects. | 

### Return type

[**List[ConfigurationResponseVersion]**](ConfigurationResponseVersion.md)

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
**406** | Number of allowed configurations for user subscription is reached. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

