# openapi_client.ManifestApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_manifest**](ManifestApi.md#create_manifest) | **PUT** /v2/{name}/manifests/{reference} | 
[**delete_manifest**](ManifestApi.md#delete_manifest) | **DELETE** /v2/{name}/manifests/{reference} | 
[**get_manifest**](ManifestApi.md#get_manifest) | **GET** /v2/{name}/manifests/{reference} | 


# **create_manifest**
> object create_manifest(name, reference, payload)



Put the manifest identified by `name` and `reference` where `reference` can be a tag or digest.

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.manifest import Manifest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | A tag or a digest, pointing to a specific image
    payload = openapi_client.Manifest() # Manifest | Manifest body, can take v1 or v2 values depending on accept header

    try:
        api_response = api_instance.create_manifest(name, reference, payload)
        print("The response of ManifestApi->create_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestApi->create_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| A tag or a digest, pointing to a specific image | 
 **payload** | [**Manifest**](Manifest.md)| Manifest body, can take v1 or v2 values depending on accept header | 

### Return type

**object**

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/vnd.docker.distribution.manifest.v2+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The manifest is updated |  * Content-Length - The canonical location url of the uploaded manifest. <br>  * Docker-Content-Digest - Identifies the docker upload uuid for the current request. <br>  * Location - The canonical location url of the uploaded manifest. <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_manifest**
> delete_manifest(name, reference)



Delete the manifest identified by `name` and `reference`. Note that a manifest can _only_ be deleted by `digest`.

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | A tag or a digest, pointing to a specific image

    try:
        api_instance.delete_manifest(name, reference)
    except Exception as e:
        print("Exception when calling ManifestApi->delete_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| A tag or a digest, pointing to a specific image | 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The manifest has been deleted |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_manifest**
> Manifest get_manifest(name, reference, accept=accept)



Pulls the image manifest file associated with the specified name and reference. Reference may be a tag or a digest

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.manifest import Manifest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: registry_oauth2
configuration.api_key['registry_oauth2'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['registry_oauth2'] = 'Bearer'

# Configure HTTP basic authorization: registry_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | A tag or a digest, pointing to a specific image
    accept = 'accept_example' # str | Accept header string delimited by comma. For example, application/vnd.docker.distribution.manifest.v2+json (optional)

    try:
        api_response = api_instance.get_manifest(name, reference, accept=accept)
        print("The response of ManifestApi->get_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestApi->get_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| A tag or a digest, pointing to a specific image | 
 **accept** | **str**| Accept header string delimited by comma. For example, application/vnd.docker.distribution.manifest.v2+json | [optional] 

### Return type

[**Manifest**](Manifest.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the requested manifest file |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

