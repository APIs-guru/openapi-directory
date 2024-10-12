# openapi_client.AcrMetadataApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_acr_tag_0**](AcrMetadataApi.md#delete_acr_tag_0) | **DELETE** /acr/v1/{name}/_tags/{reference} | 
[**get_acr_manifest_attributes_0**](AcrMetadataApi.md#get_acr_manifest_attributes_0) | **GET** /acr/v1/{name}/_manifests/{reference} | 
[**get_acr_manifests_0**](AcrMetadataApi.md#get_acr_manifests_0) | **GET** /acr/v1/{name}/_manifests | 
[**get_acr_repository_attributes_0**](AcrMetadataApi.md#get_acr_repository_attributes_0) | **GET** /acr/v1/{name} | 
[**get_acr_tag_attributes_0**](AcrMetadataApi.md#get_acr_tag_attributes_0) | **GET** /acr/v1/{name}/_tags/{reference} | 
[**get_acr_tags_0**](AcrMetadataApi.md#get_acr_tags_0) | **GET** /acr/v1/{name}/_tags | 
[**update_acr_manifest_attributes_0**](AcrMetadataApi.md#update_acr_manifest_attributes_0) | **PATCH** /acr/v1/{name}/_manifests/{reference} | 
[**update_acr_repository_attributes_0**](AcrMetadataApi.md#update_acr_repository_attributes_0) | **PATCH** /acr/v1/{name} | 
[**update_acr_tag_attributes_0**](AcrMetadataApi.md#update_acr_tag_attributes_0) | **PATCH** /acr/v1/{name}/_tags/{reference} | 


# **delete_acr_tag_0**
> delete_acr_tag_0(name, reference)



Delete tag

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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | Tag or digest of the target manifest

    try:
        api_instance.delete_acr_tag_0(name, reference)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->delete_acr_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| Tag or digest of the target manifest | 

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
**202** | The tag is deleted |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_manifest_attributes_0**
> AcrManifestAttributes get_acr_manifest_attributes_0(name, reference)



Get manifest attributes

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.acr_manifest_attributes import AcrManifestAttributes
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | A tag or a digest, pointing to a specific image

    try:
        api_response = api_instance.get_acr_manifest_attributes_0(name, reference)
        print("The response of AcrMetadataApi->get_acr_manifest_attributes_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->get_acr_manifest_attributes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| A tag or a digest, pointing to a specific image | 

### Return type

[**AcrManifestAttributes**](AcrManifestAttributes.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of attributes |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_manifests_0**
> AcrManifests get_acr_manifests_0(name, last=last, n=n, orderby=orderby)



List manifests of a repository

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.acr_manifests import AcrManifests
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    last = 'last_example' # str | Query parameter for the last item in previous query. Result set will include values lexically after last. (optional)
    n = 56 # int | query parameter for max number of items (optional)
    orderby = 'orderby_example' # str | orderby query parameter (optional)

    try:
        api_response = api_instance.get_acr_manifests_0(name, last=last, n=n, orderby=orderby)
        print("The response of AcrMetadataApi->get_acr_manifests_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->get_acr_manifests_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **last** | **str**| Query parameter for the last item in previous query. Result set will include values lexically after last. | [optional] 
 **n** | **int**| query parameter for max number of items | [optional] 
 **orderby** | **str**| orderby query parameter | [optional] 

### Return type

[**AcrManifests**](AcrManifests.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of manifests |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_repository_attributes_0**
> RepositoryAttributes get_acr_repository_attributes_0(name)



Get repository attributes

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.repository_attributes import RepositoryAttributes
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)

    try:
        api_response = api_instance.get_acr_repository_attributes_0(name)
        print("The response of AcrMetadataApi->get_acr_repository_attributes_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->get_acr_repository_attributes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 

### Return type

[**RepositoryAttributes**](RepositoryAttributes.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of attributes |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_tag_attributes_0**
> AcrTagAttributes get_acr_tag_attributes_0(name, reference)



Get tag attributes by tag

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.acr_tag_attributes import AcrTagAttributes
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | Tag or digest of the target manifest

    try:
        api_response = api_instance.get_acr_tag_attributes_0(name, reference)
        print("The response of AcrMetadataApi->get_acr_tag_attributes_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->get_acr_tag_attributes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| Tag or digest of the target manifest | 

### Return type

[**AcrTagAttributes**](AcrTagAttributes.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag attributes |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_acr_tags_0**
> AcrRepositoryTags get_acr_tags_0(name, last=last, n=n, orderby=orderby, digest=digest)



List tags of a repository

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.acr_repository_tags import AcrRepositoryTags
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    last = 'last_example' # str | Query parameter for the last item in previous query. Result set will include values lexically after last. (optional)
    n = 56 # int | query parameter for max number of items (optional)
    orderby = 'orderby_example' # str | orderby query parameter (optional)
    digest = 'digest_example' # str | filter by digest (optional)

    try:
        api_response = api_instance.get_acr_tags_0(name, last=last, n=n, orderby=orderby, digest=digest)
        print("The response of AcrMetadataApi->get_acr_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->get_acr_tags_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **last** | **str**| Query parameter for the last item in previous query. Result set will include values lexically after last. | [optional] 
 **n** | **int**| query parameter for max number of items | [optional] 
 **orderby** | **str**| orderby query parameter | [optional] 
 **digest** | **str**| filter by digest | [optional] 

### Return type

[**AcrRepositoryTags**](AcrRepositoryTags.md)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag details of a repository |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_acr_manifest_attributes_0**
> update_acr_manifest_attributes_0(name, reference, value=value)



Update attributes of a manifest

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.changeable_attributes import ChangeableAttributes
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | A tag or a digest, pointing to a specific image
    value = openapi_client.ChangeableAttributes() # ChangeableAttributes | Repository attribute value (optional)

    try:
        api_instance.update_acr_manifest_attributes_0(name, reference, value=value)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->update_acr_manifest_attributes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| A tag or a digest, pointing to a specific image | 
 **value** | [**ChangeableAttributes**](ChangeableAttributes.md)| Repository attribute value | [optional] 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The attributes are updated |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_acr_repository_attributes_0**
> update_acr_repository_attributes_0(name, value=value)



Update the attribute identified by `name` where `reference` is the name of the repository.

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.changeable_attributes import ChangeableAttributes
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    value = openapi_client.ChangeableAttributes() # ChangeableAttributes | Repository attribute value (optional)

    try:
        api_instance.update_acr_repository_attributes_0(name, value=value)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->update_acr_repository_attributes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **value** | [**ChangeableAttributes**](ChangeableAttributes.md)| Repository attribute value | [optional] 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The attributes is updated |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_acr_tag_attributes_0**
> update_acr_tag_attributes_0(name, reference, value=value)



Update tag attributes

### Example

* Api Key Authentication (registry_oauth2):
* Basic Authentication (registry_auth):

```python
import openapi_client
from openapi_client.models.changeable_attributes import ChangeableAttributes
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
    api_instance = openapi_client.AcrMetadataApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    reference = 'reference_example' # str | Tag or digest of the target manifest
    value = openapi_client.ChangeableAttributes() # ChangeableAttributes | Repository attribute value (optional)

    try:
        api_instance.update_acr_tag_attributes_0(name, reference, value=value)
    except Exception as e:
        print("Exception when calling AcrMetadataApi->update_acr_tag_attributes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **reference** | **str**| Tag or digest of the target manifest | 
 **value** | [**ChangeableAttributes**](ChangeableAttributes.md)| Repository attribute value | [optional] 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The attributes are updated |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

