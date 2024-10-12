# openapi_client.LayerApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blob_cancel_upload**](LayerApi.md#blob_cancel_upload) | **DELETE** /{nextBlobUuidLink} | 
[**blob_check**](LayerApi.md#blob_check) | **HEAD** /v2/{name}/blobs/{digest} | 
[**blob_delete**](LayerApi.md#blob_delete) | **DELETE** /v2/{name}/blobs/{digest} | 
[**blob_end_upload**](LayerApi.md#blob_end_upload) | **PUT** /{nextBlobUuidLink} | 
[**blob_get**](LayerApi.md#blob_get) | **GET** /v2/{name}/blobs/{digest} | 
[**blob_get_status**](LayerApi.md#blob_get_status) | **GET** /{nextBlobUuidLink} | 
[**blob_mount**](LayerApi.md#blob_mount) | **POST** /v2/{name}/blobs/uploads/ | 
[**blob_upload**](LayerApi.md#blob_upload) | **PATCH** /{nextBlobUuidLink} | 


# **blob_cancel_upload**
> blob_cancel_upload(next_blob_uuid_link)



Cancel outstanding upload processes, releasing associated resources. If this is not called, the unfinished uploads will eventually timeout.

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
    api_instance = openapi_client.LayerApi(api_client)
    next_blob_uuid_link = 'next_blob_uuid_link_example' # str | Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )

    try:
        api_instance.blob_cancel_upload(next_blob_uuid_link)
    except Exception as e:
        print("Exception when calling LayerApi->blob_cancel_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next_blob_uuid_link** | **str**| Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) ) | 

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
**204** | The upload has been successfully deleted. |  -  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_check**
> blob_check(name, digest)



Same as GET, except only the headers are returned.

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
    api_instance = openapi_client.LayerApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    digest = 'digest_example' # str | Digest of a BLOB

    try:
        api_instance.blob_check(name, digest)
    except Exception as e:
        print("Exception when calling LayerApi->blob_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **digest** | **str**| Digest of a BLOB | 

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
**200** | The blob identified by digest is available. The blob content will be present in the body of the response. |  * Content-Length - The length of the requested blob content. <br>  * Docker-Content-Digest - Digest of the targeted content for the request. <br>  |
**307** | The blob identified by digest is available at the provided location. |  * Location - Provided location for blob <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_delete**
> bytearray blob_delete(name, digest)



Removes an already uploaded blob.

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
    api_instance = openapi_client.LayerApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    digest = 'digest_example' # str | Digest of a BLOB

    try:
        api_response = api_instance.blob_delete(name, digest)
        print("The response of LayerApi->blob_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayerApi->blob_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **digest** | **str**| Digest of a BLOB | 

### Return type

**bytearray**

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The blob identified by digest is available. The blob content will be present in the body of the response. |  * Docker-Content-Digest - Digest of the targeted content for the request. <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_end_upload**
> blob_end_upload(digest, next_blob_uuid_link, value=value)



Complete the upload, providing all the data in the body, if necessary. A request without a body will just complete the upload with previously uploaded content.

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
    api_instance = openapi_client.LayerApi(api_client)
    digest = 'digest_example' # str | Digest of a BLOB
    next_blob_uuid_link = 'next_blob_uuid_link_example' # str | Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )
    value = None # object | Optional raw data of blob (optional)

    try:
        api_instance.blob_end_upload(digest, next_blob_uuid_link, value=value)
    except Exception as e:
        print("Exception when calling LayerApi->blob_end_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **digest** | **str**| Digest of a BLOB | 
 **next_blob_uuid_link** | **str**| Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) ) | 
 **value** | **object**| Optional raw data of blob | [optional] 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The upload has been completed and accepted by the registry. |  * Range - Range indicating the current progress of the upload. <br>  * Docker-Content-Digest - Digest of the targeted content for the request. <br>  * Location - Provided location for blob <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_get**
> bytearray blob_get(name, digest)



Retrieve the blob from the registry identified by digest.

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
    api_instance = openapi_client.LayerApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    digest = 'digest_example' # str | Digest of a BLOB

    try:
        api_response = api_instance.blob_get(name, digest)
        print("The response of LayerApi->blob_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LayerApi->blob_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **digest** | **str**| Digest of a BLOB | 

### Return type

**bytearray**

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The blob identified by digest is available. The blob content will be present in the body of the response. |  * Content-Length - The length of the requested blob content. <br>  * Docker-Content-Digest - Digest of the targeted content for the request. <br>  |
**307** | The blob identified by digest is available at the provided location. |  * Location - Provided location for blob <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_get_status**
> blob_get_status(next_blob_uuid_link)



Retrieve status of upload identified by uuid. The primary purpose of this endpoint is to resolve the current status of a resumable upload.

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
    api_instance = openapi_client.LayerApi(api_client)
    next_blob_uuid_link = 'next_blob_uuid_link_example' # str | Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )

    try:
        api_instance.blob_get_status(next_blob_uuid_link)
    except Exception as e:
        print("Exception when calling LayerApi->blob_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next_blob_uuid_link** | **str**| Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) ) | 

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
**204** | The upload is known and in progress. The last received offset is available in the Range header. |  * Docker-Upload-UUID - Identifies the docker upload uuid for the current request. <br>  * Range - Range indicating the current progress of the upload. <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_mount**
> blob_mount(name, var_from, mount)



Mount a blob identified by the `mount` parameter from another repository.

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
    api_instance = openapi_client.LayerApi(api_client)
    name = 'name_example' # str | Name of the image (including the namespace)
    var_from = 'var_from_example' # str | Name of the source repository.
    mount = 'mount_example' # str | Digest of blob to mount from the source repository.

    try:
        api_instance.blob_mount(name, var_from, mount)
    except Exception as e:
        print("Exception when calling LayerApi->blob_mount: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the image (including the namespace) | 
 **var_from** | **str**| Name of the source repository. | 
 **mount** | **str**| Digest of blob to mount from the source repository. | 

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
**201** | The blob has been created in the registry and is available at the provided location. |  * Docker-Upload-UUID - Identifies the docker upload uuid for the current request. <br>  * Docker-Content-Digest - Digest of the targeted content for the request. <br>  * Location - Provided location for blob <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **blob_upload**
> blob_upload(next_blob_uuid_link, value)



Upload a stream of data without completing the upload.

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
    api_instance = openapi_client.LayerApi(api_client)
    next_blob_uuid_link = 'next_blob_uuid_link_example' # str | Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) )
    value = None # object | Raw data of blob

    try:
        api_instance.blob_upload(next_blob_uuid_link, value)
    except Exception as e:
        print("Exception when calling LayerApi->blob_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **next_blob_uuid_link** | **str**| Link acquired from upload start or previous chunk. Note, do not include initial / (must do substring(1) ) | 
 **value** | **object**| Raw data of blob | 

### Return type

void (empty response body)

### Authorization

[registry_oauth2](../README.md#registry_oauth2), [registry_auth](../README.md#registry_auth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The stream of data has been accepted and the current progress is available in the range header. The updated upload location is available in the Location header. |  * Docker-Upload-UUID - Identifies the docker upload uuid for the current request. <br>  * Range - Range indicating the current progress of the upload. <br>  * Location - Provided location for blob <br>  |
**0** | ACR error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

