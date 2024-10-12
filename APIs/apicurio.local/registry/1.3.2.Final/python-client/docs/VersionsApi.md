# openapi_client.VersionsApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_artifact_version**](VersionsApi.md#create_artifact_version) | **POST** /artifacts/{artifactId}/versions | Create artifact version
[**get_artifact_version**](VersionsApi.md#get_artifact_version) | **GET** /artifacts/{artifactId}/versions/{version} | Get artifact version
[**list_artifact_versions**](VersionsApi.md#list_artifact_versions) | **GET** /artifacts/{artifactId}/versions | List artifact versions
[**search_versions_0**](VersionsApi.md#search_versions_0) | **GET** /search/artifacts/{artifactId}/versions | Search artifact versions
[**update_artifact_version_state**](VersionsApi.md#update_artifact_version_state) | **PUT** /artifacts/{artifactId}/versions/{version}/state | Update artifact version state


# **create_artifact_version**
> VersionMetaData create_artifact_version(artifact_id, x_registry_artifact_type=x_registry_artifact_type)

Create artifact version

Creates a new version of the artifact by uploading new content.  The configured rules for the artifact are applied, and if they all pass, the new content is added as the most recent  version of the artifact.  If any of the rules fail, an error is returned.  The body of the request should be the raw content of the new artifact version.  This  is typically in JSON format for *most* of the supported types, but may be in another  format for a few (for example, `PROTOBUF`).  The registry attempts to figure out what kind of artifact is being added from the following supported list:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * Protobuf File Descriptor (`PROTOBUF_FD`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`)  Alternatively, you can explicitly specify the artifact type using the `X-Registry-ArtifactType`  HTTP request header, or by including a hint in the request's `Content-Type`.  For example:  ``` Content-Type: application/json; artifactType=AVRO ```  This operation can fail for the following reasons:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with this `artifactId` exists (HTTP error `404`) * The new content violates one of the rules configured for the artifact (HTTP error `409`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.VersionsApi(api_client)
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    x_registry_artifact_type = 'x_registry_artifact_type_example' # str | This header parameter can be used to indicate the type of the artifact being added. Possible values include:  * Avro (`AVRO`)    * Protobuf (`PROTOBUF`)   * Protobuf File Descriptor (`PROTOBUF_FD`)    * JSON Schema (`JSON`)    * Kafka Connect (`KCONNECT`)    * OpenAPI (`OPENAPI`)    * AsyncAPI (`ASYNCAPI`)   * GraphQL (`GRAPHQL`)    * Web Services Description Language (`WSDL`)    * XML Schema (`XSD`) (optional)

    try:
        # Create artifact version
        api_response = api_instance.create_artifact_version(artifact_id, x_registry_artifact_type=x_registry_artifact_type)
        print("The response of VersionsApi->create_artifact_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VersionsApi->create_artifact_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **x_registry_artifact_type** | **str**| This header parameter can be used to indicate the type of the artifact being added. Possible values include:  * Avro (&#x60;AVRO&#x60;)    * Protobuf (&#x60;PROTOBUF&#x60;)   * Protobuf File Descriptor (&#x60;PROTOBUF_FD&#x60;)    * JSON Schema (&#x60;JSON&#x60;)    * Kafka Connect (&#x60;KCONNECT&#x60;)    * OpenAPI (&#x60;OPENAPI&#x60;)    * AsyncAPI (&#x60;ASYNCAPI&#x60;)   * GraphQL (&#x60;GRAPHQL&#x60;)    * Web Services Description Language (&#x60;WSDL&#x60;)    * XML Schema (&#x60;XSD&#x60;) | [optional] 

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
**200** | The artifact version was successfully created. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_version**
> get_artifact_version(version, artifact_id)

Get artifact version

Retrieves a single version of the artifact content.  Both the `artifactId` and the unique `version` number must be provided.  The `Content-Type` of the response depends  on the artifact type.  In most cases, this is `application/json`, but for some types  it may be different (for example, `PROTOBUF`).  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No version with this `version` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.VersionsApi(api_client)
    version = 56 # int | The unique identifier of a specific version of the artifact content.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Get artifact version
        api_instance.get_artifact_version(version, artifact_id)
    except Exception as e:
        print("Exception when calling VersionsApi->get_artifact_version: %s\n" % e)
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
 - **Accept**: application/graphql, application/json, application/x-protobuf, application/x-protobuffer

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content of the artifact version. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_artifact_versions**
> List[int] list_artifact_versions(artifact_id)

List artifact versions

Returns a list of all version numbers for the artifact.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.VersionsApi(api_client)
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # List artifact versions
        api_response = api_instance.list_artifact_versions(artifact_id)
        print("The response of VersionsApi->list_artifact_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VersionsApi->list_artifact_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 

### Return type

**List[int]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all artifact versions (just the version IDs). |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_versions_0**
> VersionSearchResults search_versions_0(artifact_id, offset, limit)

Search artifact versions

Searches for versions of a specific artifact.  This is typically used to get a listing of all versions of an artifact (for example, in a user interface).

### Example


```python
import openapi_client
from openapi_client.models.version_search_results import VersionSearchResults
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
    api_instance = openapi_client.VersionsApi(api_client)
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    offset = 56 # int | The number of versions to skip before starting to collect the result set.
    limit = 56 # int | The number of versions to return.

    try:
        # Search artifact versions
        api_response = api_instance.search_versions_0(artifact_id, offset, limit)
        print("The response of VersionsApi->search_versions_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VersionsApi->search_versions_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **offset** | **int**| The number of versions to skip before starting to collect the result set. | 
 **limit** | **int**| The number of versions to return. | 

### Return type

[**VersionSearchResults**](VersionSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a result set of versions - one for each version of the artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_version_state**
> update_artifact_version_state(version, artifact_id, update_state)

Update artifact version state

Updates the state of a specific version of an artifact.  For example, you can use  this operation to disable a specific version.  The following state changes are supported:  * Enabled -> Disabled * Enabled -> Deprecated * Enabled -> Deleted * Disabled -> Enabled * Disabled -> Deleted * Disabled -> Deprecated * Deprecated -> Deleted  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No version with this `version` exists (HTTP error `404`) * Artifact version cannot transition to the given state (HTTP error `400`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.update_state import UpdateState
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
    api_instance = openapi_client.VersionsApi(api_client)
    version = 56 # int | The unique identifier of a specific version of the artifact content.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    update_state = openapi_client.UpdateState() # UpdateState | 

    try:
        # Update artifact version state
        api_instance.update_artifact_version_state(version, artifact_id, update_state)
    except Exception as e:
        print("Exception when calling VersionsApi->update_artifact_version_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **int**| The unique identifier of a specific version of the artifact content. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **update_state** | [**UpdateState**](UpdateState.md)|  | 

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
**204** | Returned when the update was successful. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

