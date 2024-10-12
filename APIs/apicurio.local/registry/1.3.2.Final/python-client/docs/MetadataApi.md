# openapi_client.MetadataApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_artifact_version_meta_data**](MetadataApi.md#delete_artifact_version_meta_data) | **DELETE** /artifacts/{artifactId}/versions/{version}/meta | Delete artifact version metadata
[**get_artifact_meta_data**](MetadataApi.md#get_artifact_meta_data) | **GET** /artifacts/{artifactId}/meta | Get artifact metadata
[**get_artifact_meta_data_by_content**](MetadataApi.md#get_artifact_meta_data_by_content) | **POST** /artifacts/{artifactId}/meta | Get artifact metadata by content
[**get_artifact_meta_data_by_global_id**](MetadataApi.md#get_artifact_meta_data_by_global_id) | **GET** /ids/{globalId}/meta | Get global artifact metadata
[**get_artifact_version_meta_data**](MetadataApi.md#get_artifact_version_meta_data) | **GET** /artifacts/{artifactId}/versions/{version}/meta | Get artifact version metadata
[**update_artifact_meta_data**](MetadataApi.md#update_artifact_meta_data) | **PUT** /artifacts/{artifactId}/meta | Update artifact metadata
[**update_artifact_version_meta_data**](MetadataApi.md#update_artifact_version_meta_data) | **PUT** /artifacts/{artifactId}/versions/{version}/meta | Update artifact version metadata


# **delete_artifact_version_meta_data**
> delete_artifact_version_meta_data(version, artifact_id)

Delete artifact version metadata

Deletes the user-editable metadata properties of the artifact version.  Any properties that are not user-editable are preserved.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No version with this `version` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    version = 56 # int | The unique identifier of a specific version of the artifact content.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Delete artifact version metadata
        api_instance.delete_artifact_version_meta_data(version, artifact_id)
    except Exception as e:
        print("Exception when calling MetadataApi->delete_artifact_version_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **int**| The unique identifier of a specific version of the artifact content. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 

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
**204** | The artifact version&#39;s user-editable metadata was successfully deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_meta_data**
> ArtifactMetaData get_artifact_meta_data(artifact_id)

Get artifact metadata

Gets the metadata for an artifact in the registry, based on the latest version. If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used. The returned metadata includes both generated (read-only) and editable metadata (such as name and description).  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.artifact_meta_data import ArtifactMetaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Get artifact metadata
        api_response = api_instance.get_artifact_meta_data(artifact_id)
        print("The response of MetadataApi->get_artifact_meta_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 

### Return type

[**ArtifactMetaData**](ArtifactMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The artifact&#39;s metadata. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_meta_data_by_content**
> ArtifactMetaData get_artifact_meta_data_by_content(artifact_id)

Get artifact metadata by content

Gets the metadata for an artifact that matches the raw content.  Searches the registry for a version of the given artifact matching the content provided in the body of the POST.  This operation can fail for the following reasons:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * No artifact version matching the provided content exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.artifact_meta_data import ArtifactMetaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Get artifact metadata by content
        api_response = api_instance.get_artifact_meta_data_by_content(artifact_id)
        print("The response of MetadataApi->get_artifact_meta_data_by_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_meta_data_by_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 

### Return type

[**ArtifactMetaData**](ArtifactMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metadata of the artifact version matching the provided content. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_meta_data_by_global_id**
> ArtifactMetaData get_artifact_meta_data_by_global_id(global_id)

Get global artifact metadata

Gets the metadata for an artifact version in the registry using its globally unique identifier.  The returned metadata includes both generated (read-only) and editable metadata (such as name and description).  This operation may fail for one of the following reasons:  * No artifact version with this `globalId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.artifact_meta_data import ArtifactMetaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    global_id = 56 # int | Global identifier for an artifact version.

    try:
        # Get global artifact metadata
        api_response = api_instance.get_artifact_meta_data_by_global_id(global_id)
        print("The response of MetadataApi->get_artifact_meta_data_by_global_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_meta_data_by_global_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_id** | **int**| Global identifier for an artifact version. | 

### Return type

[**ArtifactMetaData**](ArtifactMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The artifact&#39;s metadata. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_version_meta_data**
> VersionMetaData get_artifact_version_meta_data(version, artifact_id)

Get artifact version metadata

Retrieves the metadata for a single version of the artifact.  The version metadata is  a subset of the artifact metadata and only includes the metadata that is specific to the version (for example, this doesn't include `modifiedOn`).  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No version with this `version` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.version_meta_data import VersionMetaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    version = 56 # int | The unique identifier of a specific version of the artifact content.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Get artifact version metadata
        api_response = api_instance.get_artifact_version_meta_data(version, artifact_id)
        print("The response of MetadataApi->get_artifact_version_meta_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_version_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **int**| The unique identifier of a specific version of the artifact content. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 

### Return type

[**VersionMetaData**](VersionMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The artifact version&#39;s metadata. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_meta_data**
> update_artifact_meta_data(artifact_id, editable_meta_data)

Update artifact metadata

Updates the editable parts of the artifact's metadata.  Not all metadata fields can be updated.  For example, `createdOn` and `createdBy` are both read-only properties.  This operation can fail for the following reasons:  * No artifact with the `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.editable_meta_data import EditableMetaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    editable_meta_data = openapi_client.EditableMetaData() # EditableMetaData | Updated artifact metadata.

    try:
        # Update artifact metadata
        api_instance.update_artifact_meta_data(artifact_id, editable_meta_data)
    except Exception as e:
        print("Exception when calling MetadataApi->update_artifact_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **editable_meta_data** | [**EditableMetaData**](EditableMetaData.md)| Updated artifact metadata. | 

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
**204** | The artifact&#39;s metadata was updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_version_meta_data**
> update_artifact_version_meta_data(version, artifact_id, editable_meta_data)

Update artifact version metadata

Updates the user-editable portion of the artifact version's metadata.  Only some of  the metadata fields are editable by the user.  For example, `description` is editable,  but `createdOn` is not.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No version with this `version` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.editable_meta_data import EditableMetaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetadataApi(api_client)
    version = 56 # int | The unique identifier of a specific version of the artifact content.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    editable_meta_data = openapi_client.EditableMetaData() # EditableMetaData | 

    try:
        # Update artifact version metadata
        api_instance.update_artifact_version_meta_data(version, artifact_id, editable_meta_data)
    except Exception as e:
        print("Exception when calling MetadataApi->update_artifact_version_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **int**| The unique identifier of a specific version of the artifact content. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **editable_meta_data** | [**EditableMetaData**](EditableMetaData.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The artifact version&#39;s metadata was successfully updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

