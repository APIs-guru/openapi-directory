# openapi_client.MeshSecretsApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mesh_secret_create_or_update**](MeshSecretsApi.md#mesh_secret_create_or_update) | **PUT** /Resources/Secrets/{secretResourceName} | Creates or updates a Secret resource.
[**mesh_secret_delete**](MeshSecretsApi.md#mesh_secret_delete) | **DELETE** /Resources/Secrets/{secretResourceName} | Deletes the Secret resource.
[**mesh_secret_get**](MeshSecretsApi.md#mesh_secret_get) | **GET** /Resources/Secrets/{secretResourceName} | Gets the Secret resource with the given name.
[**mesh_secret_list**](MeshSecretsApi.md#mesh_secret_list) | **GET** /Resources/Secrets | Lists all the secret resources.


# **mesh_secret_create_or_update**
> SecretResourceDescription mesh_secret_create_or_update(api_version, secret_resource_name, secret_resource_description)

Creates or updates a Secret resource.

Creates a Secret resource with the specified name, description and properties. If Secret resource with the same name exists, then it is updated with the specified description and properties. Once created, the kind and contentType of a secret resource cannot be updated.

### Example


```python
import openapi_client
from openapi_client.models.secret_resource_description import SecretResourceDescription
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
    api_instance = openapi_client.MeshSecretsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.
    secret_resource_description = openapi_client.SecretResourceDescription() # SecretResourceDescription | Description for creating a secret resource.

    try:
        # Creates or updates a Secret resource.
        api_response = api_instance.mesh_secret_create_or_update(api_version, secret_resource_name, secret_resource_description)
        print("The response of MeshSecretsApi->mesh_secret_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretsApi->mesh_secret_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 
 **secret_resource_description** | [**SecretResourceDescription**](SecretResourceDescription.md)| Description for creating a secret resource. | 

### Return type

[**SecretResourceDescription**](SecretResourceDescription.md)

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

# **mesh_secret_delete**
> mesh_secret_delete(api_version, secret_resource_name)

Deletes the Secret resource.

Deletes the specified Secret resource and all of its named values.

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
    api_instance = openapi_client.MeshSecretsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.

    try:
        # Deletes the Secret resource.
        api_instance.mesh_secret_delete(api_version, secret_resource_name)
    except Exception as e:
        print("Exception when calling MeshSecretsApi->mesh_secret_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 

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
**204** | No Content - the specified secret was not found. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mesh_secret_get**
> SecretResourceDescription mesh_secret_get(api_version, secret_resource_name)

Gets the Secret resource with the given name.

Gets the information about the Secret resource with the given name. The information include the description and other properties of the Secret.

### Example


```python
import openapi_client
from openapi_client.models.secret_resource_description import SecretResourceDescription
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
    api_instance = openapi_client.MeshSecretsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)
    secret_resource_name = 'secret_resource_name_example' # str | The name of the secret resource.

    try:
        # Gets the Secret resource with the given name.
        api_response = api_instance.mesh_secret_get(api_version, secret_resource_name)
        print("The response of MeshSecretsApi->mesh_secret_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretsApi->mesh_secret_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]
 **secret_resource_name** | **str**| The name of the secret resource. | 

### Return type

[**SecretResourceDescription**](SecretResourceDescription.md)

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

# **mesh_secret_list**
> PagedSecretResourceDescriptionList mesh_secret_list(api_version)

Lists all the secret resources.

Gets the information about all secret resources in a given resource group. The information include the description and other properties of the Secret.

### Example


```python
import openapi_client
from openapi_client.models.paged_secret_resource_description_list import PagedSecretResourceDescriptionList
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
    api_instance = openapi_client.MeshSecretsApi(api_client)
    api_version = 6.4-preview # str | The version of the API. This parameter is required and its value must be '6.4-preview'. (default to 6.4-preview)

    try:
        # Lists all the secret resources.
        api_response = api_instance.mesh_secret_list(api_version)
        print("The response of MeshSecretsApi->mesh_secret_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeshSecretsApi->mesh_secret_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.4-preview&#39;. | [default to 6.4-preview]

### Return type

[**PagedSecretResourceDescriptionList**](PagedSecretResourceDescriptionList.md)

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

