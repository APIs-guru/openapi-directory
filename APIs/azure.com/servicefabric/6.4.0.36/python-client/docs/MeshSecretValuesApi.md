# openapi_client.MeshSecretValuesApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_secret_value_add_value**](MeshSecretValuesApi.md#mesh_secret_value_add_value) | **PUT** /Resources/Secrets/{secretResourceName}/values/{secretValueResourceName} | Adds the specified value as a new version of the specified secret resource.
[**mesh_secret_value_delete**](MeshSecretValuesApi.md#mesh_secret_value_delete) | **DELETE** /Resources/Secrets/{secretResourceName}/values/{secretValueResourceName} | Deletes the specified  value of the named secret resource.
[**mesh_secret_value_get**](MeshSecretValuesApi.md#mesh_secret_value_get) | **GET** /Resources/Secrets/{secretResourceName}/values/{secretValueResourceName} | Gets the specified secret value resource.
[**mesh_secret_value_list**](MeshSecretValuesApi.md#mesh_secret_value_list) | **GET** /Resources/Secrets/{secretResourceName}/values | List names of all values of the specified secret resource.
[**mesh_secret_value_show**](MeshSecretValuesApi.md#mesh_secret_value_show) | **POST** /Resources/Secrets/{secretResourceName}/values/{secretValueResourceName}/list_value | Lists the specified value of the secret resource.


# **mesh_secret_value_add_value**
> SecretValueResourceDescription mesh_secret_value_add_value(api_version, secret_resource_name, secret_value_resource_name, secret_value_resource_description)

Adds the specified value as a new version of the specified secret resource.

Creates a new value of the specified secret resource. The name of the value is typically the version identifier. Once created the value cannot be changed.

### Example


```python
import openapi_client
from openapi_client.models.secret_value_resource_description import SecretValueResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshSecretValuesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.
    secret_value_resource_description = openapi_client.SecretValueResourceDescription() # SecretValueResourceDescription | Description for creating a value of a secret resource.

    try:
        # Adds the specified value as a new version of the specified secret resource.
        api_response = api_instance.mesh_secret_value_add_value(api_version, secret_resource_name, secret_value_resource_name, secret_value_resource_description)
        print("The response of MeshSecretValuesApi->mesh_secret_value_add_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretValuesApi->mesh_secret_value_add_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 
 **secret_value_resource_description** | [**SecretValueResourceDescription**](SecretValueResourceDescription.md)| Description for creating a value of a secret resource. | 

### Return type

[**SecretValueResourceDescription**](SecretValueResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_secret_value_delete**
> mesh_secret_value_delete(api_version, secret_resource_name, secret_value_resource_name)

Deletes the specified  value of the named secret resource.

Deletes the secret value resource identified by the name. The name of the resource is typically the version associated with that value. Deletion will fail if the specified value is in use.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshSecretValuesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.

    try:
        # Deletes the specified  value of the named secret resource.
        api_instance.mesh_secret_value_delete(api_version, secret_resource_name, secret_value_resource_name)
    except Exception as e:
        print("Exception when calling MeshSecretValuesApi->mesh_secret_value_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content - the specified secret value was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_secret_value_get**
> SecretValueResourceDescription mesh_secret_value_get(api_version, secret_resource_name, secret_value_resource_name)

Gets the specified secret value resource.

Get the information about the specified named secret value resources. The information does not include the actual value of the secret.

### Example


```python
import openapi_client
from openapi_client.models.secret_value_resource_description import SecretValueResourceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshSecretValuesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.

    try:
        # Gets the specified secret value resource.
        api_response = api_instance.mesh_secret_value_get(api_version, secret_resource_name, secret_value_resource_name)
        print("The response of MeshSecretValuesApi->mesh_secret_value_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretValuesApi->mesh_secret_value_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 

### Return type

[**SecretValueResourceDescription**](SecretValueResourceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_secret_value_list**
> PagedSecretValueResourceDescriptionList mesh_secret_value_list(api_version, secret_resource_name)

List names of all values of the specified secret resource.

Gets information about all secret value resources of the specified secret resource. The information includes the names of the secret value resources, but not the actual values.

### Example


```python
import openapi_client
from openapi_client.models.paged_secret_value_resource_description_list import PagedSecretValueResourceDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshSecretValuesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.

    try:
        # List names of all values of the specified secret resource.
        api_response = api_instance.mesh_secret_value_list(api_version, secret_resource_name)
        print("The response of MeshSecretValuesApi->mesh_secret_value_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretValuesApi->mesh_secret_value_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 

### Return type

[**PagedSecretValueResourceDescriptionList**](PagedSecretValueResourceDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_secret_value_show**
> SecretValue mesh_secret_value_show(api_version, secret_resource_name, secret_value_resource_name)

Lists the specified value of the secret resource.

Lists the decrypted value of the specified named value of the secret resource. This is a privileged operation.

### Example


```python
import openapi_client
from openapi_client.models.secret_value import SecretValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MeshSecretValuesApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_value_resource_name = 'secret_value_resource_name_example' # str | The name of the secret resource value which is typically the version identifier for the value.

    try:
        # Lists the specified value of the secret resource.
        api_response = api_instance.mesh_secret_value_show(api_version, secret_resource_name, secret_value_resource_name)
        print("The response of MeshSecretValuesApi->mesh_secret_value_show:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretValuesApi->mesh_secret_value_show: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_value_resource_name** | **str**| The name of the secret resource value which is typically the version identifier for the value. | 

### Return type

[**SecretValue**](SecretValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

