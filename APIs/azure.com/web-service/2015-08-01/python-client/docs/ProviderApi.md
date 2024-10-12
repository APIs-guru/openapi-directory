# openapi_client.ProviderApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provider_get_publishing_user**](ProviderApi.md#provider_get_publishing_user) | **GET** /providers/Microsoft.Web/publishingUsers/web | Gets publishing user
[**provider_get_source_control**](ProviderApi.md#provider_get_source_control) | **GET** /providers/Microsoft.Web/sourcecontrols/{sourceControlType} | Gets source control token
[**provider_get_source_controls**](ProviderApi.md#provider_get_source_controls) | **GET** /providers/Microsoft.Web/sourcecontrols | Gets the source controls available for Azure websites
[**provider_update_publishing_user**](ProviderApi.md#provider_update_publishing_user) | **PUT** /providers/Microsoft.Web/publishingUsers/web | Updates publishing user
[**provider_update_source_control**](ProviderApi.md#provider_update_source_control) | **PUT** /providers/Microsoft.Web/sourcecontrols/{sourceControlType} | Updates source control token


# **provider_get_publishing_user**
> User provider_get_publishing_user(api_version)

Gets publishing user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.ProviderApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets publishing user
        api_response = api_instance.provider_get_publishing_user(api_version)
        print("The response of ProviderApi->provider_get_publishing_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_get_publishing_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_get_source_control**
> SourceControl provider_get_source_control(source_control_type, api_version)

Gets source control token

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control import SourceControl
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
    api_instance = openapi_client.ProviderApi(api_client)
    source_control_type = 'source_control_type_example' # str | Type of source control
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets source control token
        api_response = api_instance.provider_get_source_control(source_control_type, api_version)
        print("The response of ProviderApi->provider_get_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_get_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_control_type** | **str**| Type of source control | 
 **api_version** | **str**| API Version | 

### Return type

[**SourceControl**](SourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_get_source_controls**
> SourceControlCollection provider_get_source_controls(api_version)

Gets the source controls available for Azure websites

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control_collection import SourceControlCollection
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
    api_instance = openapi_client.ProviderApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the source controls available for Azure websites
        api_response = api_instance.provider_get_source_controls(api_version)
        print("The response of ProviderApi->provider_get_source_controls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_get_source_controls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**SourceControlCollection**](SourceControlCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_update_publishing_user**
> User provider_update_publishing_user(api_version, request_message)

Updates publishing user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.ProviderApi(api_client)
    api_version = 'api_version_example' # str | API Version
    request_message = openapi_client.User() # User | Details of publishing user

    try:
        # Updates publishing user
        api_response = api_instance.provider_update_publishing_user(api_version, request_message)
        print("The response of ProviderApi->provider_update_publishing_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_update_publishing_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 
 **request_message** | [**User**](User.md)| Details of publishing user | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_update_source_control**
> SourceControl provider_update_source_control(source_control_type, api_version, request_message)

Updates source control token

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control import SourceControl
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
    api_instance = openapi_client.ProviderApi(api_client)
    source_control_type = 'source_control_type_example' # str | Type of source control
    api_version = 'api_version_example' # str | API Version
    request_message = openapi_client.SourceControl() # SourceControl | Source control token information

    try:
        # Updates source control token
        api_response = api_instance.provider_update_source_control(source_control_type, api_version, request_message)
        print("The response of ProviderApi->provider_update_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->provider_update_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_control_type** | **str**| Type of source control | 
 **api_version** | **str**| API Version | 
 **request_message** | [**SourceControl**](SourceControl.md)| Source control token information | 

### Return type

[**SourceControl**](SourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

