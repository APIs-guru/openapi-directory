# openapi_client.MetadataApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_artifact_version_meta_data**](MetadataApi.md#delete_artifact_version_meta_data) | **DELETE** /groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta | Delete artifact version metadata
[**get_artifact_meta_data**](MetadataApi.md#get_artifact_meta_data) | **GET** /groups/{groupId}/artifacts/{artifactId}/meta | Get artifact metadata
[**get_artifact_owner**](MetadataApi.md#get_artifact_owner) | **GET** /groups/{groupId}/artifacts/{artifactId}/owner | Get artifact owner
[**get_artifact_version_meta_data**](MetadataApi.md#get_artifact_version_meta_data) | **GET** /groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta | Get artifact version metadata
[**get_artifact_version_meta_data_by_content**](MetadataApi.md#get_artifact_version_meta_data_by_content) | **POST** /groups/{groupId}/artifacts/{artifactId}/meta | Get artifact version metadata by content
[**update_artifact_meta_data**](MetadataApi.md#update_artifact_meta_data) | **PUT** /groups/{groupId}/artifacts/{artifactId}/meta | Update artifact metadata
[**update_artifact_owner**](MetadataApi.md#update_artifact_owner) | **PUT** /groups/{groupId}/artifacts/{artifactId}/owner | Update artifact owner
[**update_artifact_version_meta_data**](MetadataApi.md#update_artifact_version_meta_data) | **PUT** /groups/{groupId}/artifacts/{artifactId}/versions/{version}/meta | Update artifact version metadata


# **delete_artifact_version_meta_data**
> delete_artifact_version_meta_data(group_id, artifact_id, version)

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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    version = 'version_example' # str | The unique identifier of a specific version of the artifact content.

    try:
        # Delete artifact version metadata
        api_instance.delete_artifact_version_meta_data(group_id, artifact_id, version)
    except Exception as e:
        print("Exception when calling MetadataApi->delete_artifact_version_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **version** | **str**| The unique identifier of a specific version of the artifact content. | 

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
> ArtifactMetaData get_artifact_meta_data(group_id, artifact_id)

Get artifact metadata

Gets the metadata for an artifact in the registry, based on the latest version. If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used. The returned metadata includes both generated (read-only) and editable metadata (such as name and description).  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists  or all versions are `DISABLED` (HTTP error `404`) * A server error occurred (HTTP error `500`)

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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.

    try:
        # Get artifact metadata
        api_response = api_instance.get_artifact_meta_data(group_id, artifact_id)
        print("The response of MetadataApi->get_artifact_meta_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 

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

# **get_artifact_owner**
> ArtifactOwner get_artifact_owner(group_id, artifact_id)

Get artifact owner

Gets the owner of an artifact in the registry.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.artifact_owner import ArtifactOwner
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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.

    try:
        # Get artifact owner
        api_response = api_instance.get_artifact_owner(group_id, artifact_id)
        print("The response of MetadataApi->get_artifact_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 

### Return type

[**ArtifactOwner**](ArtifactOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The artifact&#39;s owner. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_version_meta_data**
> VersionMetaData get_artifact_version_meta_data(group_id, artifact_id, version)

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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    version = 'version_example' # str | The unique identifier of a specific version of the artifact content.

    try:
        # Get artifact version metadata
        api_response = api_instance.get_artifact_version_meta_data(group_id, artifact_id, version)
        print("The response of MetadataApi->get_artifact_version_meta_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_version_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **version** | **str**| The unique identifier of a specific version of the artifact content. | 

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

# **get_artifact_version_meta_data_by_content**
> VersionMetaData get_artifact_version_meta_data_by_content(group_id, artifact_id, body, canonical=canonical)

Get artifact version metadata by content

Gets the metadata for an artifact that matches the raw content.  Searches the registry for a version of the given artifact matching the content provided in the body of the POST.  This operation can fail for the following reasons:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * No artifact version matching the provided content exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    body = {"components":{"schemas":{"Widget":{"description":"A sample data type.","example":{"property-1":"value1","property-2":true},"properties":{"property-1":{"type":"string"},"property-2":{"type":"boolean"}},"title":"Root Type for Widget","type":"object"}}},"info":{"description":"An example API design using OpenAPI.","title":"Empty API","version":"1.0.7"},"openapi":"3.0.2","paths":{"/widgets":{"get":{"responses":{"200":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"description":"All widgets"}},"summary":"Get widgets"}}}} # bytearray | The content of an artifact version.
    canonical = True # bool | Parameter that can be set to `true` to indicate that the server should \"canonicalize\" the content when searching for a matching version.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner. (optional)

    try:
        # Get artifact version metadata by content
        api_response = api_instance.get_artifact_version_meta_data_by_content(group_id, artifact_id, body, canonical=canonical)
        print("The response of MetadataApi->get_artifact_version_meta_data_by_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->get_artifact_version_meta_data_by_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **body** | **bytearray**| The content of an artifact version. | 
 **canonical** | **bool**| Parameter that can be set to &#x60;true&#x60; to indicate that the server should \&quot;canonicalize\&quot; the content when searching for a matching version.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner. | [optional] 

### Return type

[**VersionMetaData**](VersionMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/get.extended+json, application/vnd.get.extended+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metadata of the artifact version matching the provided content. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_meta_data**
> update_artifact_meta_data(group_id, artifact_id, editable_meta_data)

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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    editable_meta_data = openapi_client.EditableMetaData() # EditableMetaData | Updated artifact metadata.

    try:
        # Update artifact metadata
        api_instance.update_artifact_meta_data(group_id, artifact_id, editable_meta_data)
    except Exception as e:
        print("Exception when calling MetadataApi->update_artifact_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **editable_meta_data** | [**EditableMetaData**](EditableMetaData.md)| Updated artifact metadata. | 

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
**204** | The artifact&#39;s metadata was updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_owner**
> update_artifact_owner(group_id, artifact_id, artifact_owner)

Update artifact owner

Changes the ownership of an artifact.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.artifact_owner import ArtifactOwner
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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    artifact_owner = openapi_client.ArtifactOwner() # ArtifactOwner | 

    try:
        # Update artifact owner
        api_instance.update_artifact_owner(group_id, artifact_id, artifact_owner)
    except Exception as e:
        print("Exception when calling MetadataApi->update_artifact_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **artifact_owner** | [**ArtifactOwner**](ArtifactOwner.md)|  | 

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
**204** | The owner was successfully changed. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_version_meta_data**
> update_artifact_version_meta_data(group_id, artifact_id, version, editable_meta_data)

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
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    version = 'version_example' # str | The unique identifier of a specific version of the artifact content.
    editable_meta_data = openapi_client.EditableMetaData() # EditableMetaData | 

    try:
        # Update artifact version metadata
        api_instance.update_artifact_version_meta_data(group_id, artifact_id, version, editable_meta_data)
    except Exception as e:
        print("Exception when calling MetadataApi->update_artifact_version_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **version** | **str**| The unique identifier of a specific version of the artifact content. | 
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

