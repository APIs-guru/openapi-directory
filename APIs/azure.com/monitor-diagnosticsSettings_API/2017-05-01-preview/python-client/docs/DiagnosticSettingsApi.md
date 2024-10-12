# openapi_client.DiagnosticSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diagnostic_settings_create_or_update**](DiagnosticSettingsApi.md#diagnostic_settings_create_or_update) | **PUT** /{resourceUri}/providers/microsoft.insights/diagnosticSettings/{name} | 
[**diagnostic_settings_delete**](DiagnosticSettingsApi.md#diagnostic_settings_delete) | **DELETE** /{resourceUri}/providers/microsoft.insights/diagnosticSettings/{name} | 
[**diagnostic_settings_get**](DiagnosticSettingsApi.md#diagnostic_settings_get) | **GET** /{resourceUri}/providers/microsoft.insights/diagnosticSettings/{name} | 
[**diagnostic_settings_list**](DiagnosticSettingsApi.md#diagnostic_settings_list) | **GET** /{resourceUri}/providers/microsoft.insights/diagnosticSettings | 


# **diagnostic_settings_create_or_update**
> DiagnosticSettingsResource diagnostic_settings_create_or_update(resource_uri, api_version, name, parameters)



Creates or updates diagnostic settings for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_settings_resource import DiagnosticSettingsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiagnosticSettingsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.
    parameters = openapi_client.DiagnosticSettingsResource() # DiagnosticSettingsResource | Parameters supplied to the operation.

    try:
        api_response = api_instance.diagnostic_settings_create_or_update(resource_uri, api_version, name, parameters)
        print("The response of DiagnosticSettingsApi->diagnostic_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticSettingsApi->diagnostic_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 
 **parameters** | [**DiagnosticSettingsResource**](DiagnosticSettingsResource.md)| Parameters supplied to the operation. | 

### Return type

[**DiagnosticSettingsResource**](DiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to create a diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostic_settings_delete**
> diagnostic_settings_delete(resource_uri, api_version, name)



Deletes existing diagnostic settings for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiagnosticSettingsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.

    try:
        api_instance.diagnostic_settings_delete(resource_uri, api_version, name)
    except Exception as e:
        print("Exception when calling DiagnosticSettingsApi->diagnostic_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to remove a diagnostic setting |  -  |
**204** | Successful request to remove a diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostic_settings_get**
> DiagnosticSettingsResource diagnostic_settings_get(resource_uri, api_version, name)



Gets the active diagnostic settings for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_settings_resource import DiagnosticSettingsResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiagnosticSettingsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    name = 'name_example' # str | The name of the diagnostic setting.

    try:
        api_response = api_instance.diagnostic_settings_get(resource_uri, api_version, name)
        print("The response of DiagnosticSettingsApi->diagnostic_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticSettingsApi->diagnostic_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **name** | **str**| The name of the diagnostic setting. | 

### Return type

[**DiagnosticSettingsResource**](DiagnosticSettingsResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **diagnostic_settings_list**
> DiagnosticSettingsResourceCollection diagnostic_settings_list(resource_uri, api_version)



Gets the active diagnostic settings list for the specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.diagnostic_settings_resource_collection import DiagnosticSettingsResourceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DiagnosticSettingsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.diagnostic_settings_list(resource_uri, api_version)
        print("The response of DiagnosticSettingsApi->diagnostic_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiagnosticSettingsApi->diagnostic_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiagnosticSettingsResourceCollection**](DiagnosticSettingsResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get more information about diagnostic setting |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

