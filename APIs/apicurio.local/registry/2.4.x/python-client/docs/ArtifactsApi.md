# openapi_client.ArtifactsApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_artifact**](ArtifactsApi.md#create_artifact) | **POST** /groups/{groupId}/artifacts | Create artifact
[**delete_artifact**](ArtifactsApi.md#delete_artifact) | **DELETE** /groups/{groupId}/artifacts/{artifactId} | Delete artifact
[**delete_artifacts_in_group**](ArtifactsApi.md#delete_artifacts_in_group) | **DELETE** /groups/{groupId}/artifacts | Delete artifacts in group
[**get_content_by_global_id**](ArtifactsApi.md#get_content_by_global_id) | **GET** /ids/globalIds/{globalId} | Get artifact by global ID
[**get_content_by_hash**](ArtifactsApi.md#get_content_by_hash) | **GET** /ids/contentHashes/{contentHash}/ | Get artifact content by SHA-256 hash
[**get_content_by_id**](ArtifactsApi.md#get_content_by_id) | **GET** /ids/contentIds/{contentId}/ | Get artifact content by ID
[**get_latest_artifact**](ArtifactsApi.md#get_latest_artifact) | **GET** /groups/{groupId}/artifacts/{artifactId} | Get latest artifact
[**list_artifacts_in_group**](ArtifactsApi.md#list_artifacts_in_group) | **GET** /groups/{groupId}/artifacts | List artifacts in group
[**references_by_content_hash**](ArtifactsApi.md#references_by_content_hash) | **GET** /ids/contentHashes/{contentHash}/references | List artifact references by hash
[**references_by_content_id**](ArtifactsApi.md#references_by_content_id) | **GET** /ids/contentIds/{contentId}/references | List artifact references by content ID
[**references_by_global_id**](ArtifactsApi.md#references_by_global_id) | **GET** /ids/globalIds/{globalId}/references | List artifact references by global ID
[**search_artifacts_0**](ArtifactsApi.md#search_artifacts_0) | **GET** /search/artifacts | Search for artifacts
[**search_artifacts_by_content_0**](ArtifactsApi.md#search_artifacts_by_content_0) | **POST** /search/artifacts | Search for artifacts by content
[**update_artifact**](ArtifactsApi.md#update_artifact) | **PUT** /groups/{groupId}/artifacts/{artifactId} | Update artifact
[**update_artifact_state**](ArtifactsApi.md#update_artifact_state) | **PUT** /groups/{groupId}/artifacts/{artifactId}/state | Update artifact state


# **create_artifact**
> ArtifactMetaData create_artifact(group_id, body, x_registry_artifact_type=x_registry_artifact_type, x_registry_artifact_id=x_registry_artifact_id, x_registry_version=x_registry_version, if_exists=if_exists, canonical=canonical, x_registry_description=x_registry_description, x_registry_description_encoded=x_registry_description_encoded, x_registry_name=x_registry_name, x_registry_name_encoded=x_registry_name_encoded, x_registry_content_hash=x_registry_content_hash, x_registry_hash_algorithm=x_registry_hash_algorithm)

Create artifact

Creates a new artifact by posting the artifact content.  The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the  supported types, but may be in another format for a few (for example, `PROTOBUF`).  The registry attempts to figure out what kind of artifact is being added from the following supported list:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`)  Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`  HTTP request header, or include a hint in the request's `Content-Type`.  For example:  ``` Content-Type: application/json; artifactType=AVRO ```  An artifact is created using the content provided in the body of the request.  This content is created under a unique artifact ID that can be provided in the request using the `X-Registry-ArtifactId` request header.  If not provided in the request, the server generates a unique ID for the artifact.  It is typically recommended that callers provide the ID, because this is typically a meaningful identifier,  and for most use cases should be supplied by the caller.  If an artifact with the provided artifact ID already exists, the default behavior is for the server to reject the content with a 409 error.  However, the caller can supply the `ifExists` query parameter to alter this default behavior. The `ifExists` query parameter can have one of the following values:  * `FAIL` (*default*) - server rejects the content with a 409 error * `UPDATE` - server updates the existing artifact and returns the new metadata * `RETURN` - server does not create or add content to the server, but instead  returns the metadata for the existing artifact * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the  provided content if such a version exists, otherwise a new version is created  This operation may fail for one of the following reasons:  * An invalid `ArtifactType` was indicated (HTTP error `400`) * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`) * Provided content (request body) was empty (HTTP error `400`) * An artifact with the provided ID already exists (HTTP error `409`) * The content violates one of the configured global rules (HTTP error `409`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.artifact_meta_data import ArtifactMetaData
from openapi_client.models.if_exists import IfExists
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    body = {"components":{"schemas":{"Widget":{"description":"A sample data type.","example":{"property-1":"value1","property-2":true},"properties":{"property-1":{"type":"string"},"property-2":{"type":"boolean"}},"title":"Root Type for Widget","type":"object"}}},"info":{"description":"An example API design using OpenAPI.","title":"Empty API","version":"1.0.7"},"openapi":"3.0.2","paths":{"/widgets":{"get":{"responses":{"200":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"description":"All widgets"}},"summary":"Get widgets"}}}} # bytearray | The content of the artifact being created. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`) 
    x_registry_artifact_type = 'x_registry_artifact_type_example' # str | Specifies the type of the artifact being added. Possible values include:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`) (optional)
    x_registry_artifact_id = 'x_registry_artifact_id_example' # str | A client-provided, globally unique identifier for the new artifact. (optional)
    x_registry_version = 'x_registry_version_example' # str | Specifies the version number of this initial version of the artifact content.  This would typically be a simple integer or a SemVer value.  If not provided, the server will assign a version number automatically (starting with version `1`). (optional)
    if_exists = openapi_client.IfExists() # IfExists | Set this option to instruct the server on what to do if the artifact already exists. (optional)
    canonical = True # bool | Used only when the `ifExists` query parameter is set to `RETURN_OR_UPDATE`, this parameter can be set to `true` to indicate that the server should \"canonicalize\" the content when searching for a matching version.  The canonicalization algorithm is unique to each artifact type, but typically involves removing extra whitespace and formatting the content in a consistent manner. (optional)
    x_registry_description = 'x_registry_description_example' # str | Specifies the description of artifact being added. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content. (optional)
    x_registry_description_encoded = 'x_registry_description_encoded_example' # str | Specifies the description of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content. (optional)
    x_registry_name = 'x_registry_name_example' # str | Specifies the name of artifact being added. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content. (optional)
    x_registry_name_encoded = 'x_registry_name_encoded_example' # str | Specifies the name of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content. (optional)
    x_registry_content_hash = 'x_registry_content_hash_example' # str | Specifies the (optional) hash of the artifact to be verified. (optional)
    x_registry_hash_algorithm = 'x_registry_hash_algorithm_example' # str | The algorithm to use when checking the content validity. (available: SHA256, MD5; default: SHA256) (optional)

    try:
        # Create artifact
        api_response = api_instance.create_artifact(group_id, body, x_registry_artifact_type=x_registry_artifact_type, x_registry_artifact_id=x_registry_artifact_id, x_registry_version=x_registry_version, if_exists=if_exists, canonical=canonical, x_registry_description=x_registry_description, x_registry_description_encoded=x_registry_description_encoded, x_registry_name=x_registry_name, x_registry_name_encoded=x_registry_name_encoded, x_registry_content_hash=x_registry_content_hash, x_registry_hash_algorithm=x_registry_hash_algorithm)
        print("The response of ArtifactsApi->create_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->create_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **body** | **bytearray**| The content of the artifact being created. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;)  | 
 **x_registry_artifact_type** | **str**| Specifies the type of the artifact being added. Possible values include:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;) | [optional] 
 **x_registry_artifact_id** | **str**| A client-provided, globally unique identifier for the new artifact. | [optional] 
 **x_registry_version** | **str**| Specifies the version number of this initial version of the artifact content.  This would typically be a simple integer or a SemVer value.  If not provided, the server will assign a version number automatically (starting with version &#x60;1&#x60;). | [optional] 
 **if_exists** | [**IfExists**](.md)| Set this option to instruct the server on what to do if the artifact already exists. | [optional] 
 **canonical** | **bool**| Used only when the &#x60;ifExists&#x60; query parameter is set to &#x60;RETURN_OR_UPDATE&#x60;, this parameter can be set to &#x60;true&#x60; to indicate that the server should \&quot;canonicalize\&quot; the content when searching for a matching version.  The canonicalization algorithm is unique to each artifact type, but typically involves removing extra whitespace and formatting the content in a consistent manner. | [optional] 
 **x_registry_description** | **str**| Specifies the description of artifact being added. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content. | [optional] 
 **x_registry_description_encoded** | **str**| Specifies the description of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content. | [optional] 
 **x_registry_name** | **str**| Specifies the name of artifact being added. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content. | [optional] 
 **x_registry_name_encoded** | **str**| Specifies the name of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content. | [optional] 
 **x_registry_content_hash** | **str**| Specifies the (optional) hash of the artifact to be verified. | [optional] 
 **x_registry_hash_algorithm** | **str**| The algorithm to use when checking the content validity. (available: SHA256, MD5; default: SHA256) | [optional] 

### Return type

[**ArtifactMetaData**](ArtifactMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/create.extended+json, application/vnd.create.extended+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Artifact was successfully created. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_artifact**
> delete_artifact(group_id, artifact_id)

Delete artifact

Deletes an artifact completely, resulting in all versions of the artifact also being deleted.  This may fail for one of the following reasons:  * No artifact with the `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.

    try:
        # Delete artifact
        api_instance.delete_artifact(group_id, artifact_id)
    except Exception as e:
        print("Exception when calling ArtifactsApi->delete_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 

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
**204** | Returned when the artifact was successfully deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_artifacts_in_group**
> delete_artifacts_in_group(group_id)

Delete artifacts in group

Deletes all of the artifacts that exist in a given group.

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.

    try:
        # Delete artifacts in group
        api_instance.delete_artifacts_in_group(group_id)
    except Exception as e:
        print("Exception when calling ArtifactsApi->delete_artifacts_in_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 

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
**204** | When the delete operation is successful, a simple 204 is returned. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_content_by_global_id**
> bytearray get_content_by_global_id(global_id, dereference=dereference)

Get artifact by global ID

Gets the content for an artifact version in the registry using its globally unique identifier.  This operation may fail for one of the following reasons:  * No artifact version with this `globalId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    global_id = 56 # int | Global identifier for an artifact version.
    dereference = True # bool | Allows the user to specify if the content should be dereferenced when being returned (optional)

    try:
        # Get artifact by global ID
        api_response = api_instance.get_content_by_global_id(global_id, dereference=dereference)
        print("The response of ArtifactsApi->get_content_by_global_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_content_by_global_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_id** | **int**| Global identifier for an artifact version. | 
 **dereference** | **bool**| Allows the user to specify if the content should be dereferenced when being returned | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content of one version of one artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_content_by_hash**
> bytearray get_content_by_hash(content_hash)

Get artifact content by SHA-256 hash

Gets the content for an artifact version in the registry using the  SHA-256 hash of the content.  This content hash may be shared by multiple artifact versions in the case where the artifact versions have identical content.  This operation may fail for one of the following reasons:  * No content with this `contentHash` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    content_hash = 'content_hash_example' # str | SHA-256 content hash for a single artifact content.

    try:
        # Get artifact content by SHA-256 hash
        api_response = api_instance.get_content_by_hash(content_hash)
        print("The response of ArtifactsApi->get_content_by_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_content_by_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_hash** | **str**| SHA-256 content hash for a single artifact content. | 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content of one version of one artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_content_by_id**
> bytearray get_content_by_id(content_id)

Get artifact content by ID

Gets the content for an artifact version in the registry using the unique content identifier for that content.  This content ID may be shared by multiple artifact versions in the case where the artifact versions are identical.  This operation may fail for one of the following reasons:  * No content with this `contentId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    content_id = 56 # int | Global identifier for a single artifact content.

    try:
        # Get artifact content by ID
        api_response = api_instance.get_content_by_id(content_id)
        print("The response of ArtifactsApi->get_content_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_content_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **int**| Global identifier for a single artifact content. | 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content of one version of one artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_artifact**
> bytearray get_latest_artifact(group_id, artifact_id, dereference=dereference)

Get latest artifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but  for some types it may be different (for example, `PROTOBUF`). If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.  This operation may fail for one of the following reasons:  * No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    dereference = True # bool | Allows the user to specify if the content should be dereferenced when being returned (optional)

    try:
        # Get latest artifact
        api_response = api_instance.get_latest_artifact(group_id, artifact_id, dereference=dereference)
        print("The response of ArtifactsApi->get_latest_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_latest_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **dereference** | **bool**| Allows the user to specify if the content should be dereferenced when being returned | [optional] 

### Return type

**bytearray**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content of one version of one artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_artifacts_in_group**
> ArtifactSearchResults list_artifacts_in_group(group_id, limit=limit, offset=offset, order=order, orderby=orderby)

List artifacts in group

Returns a list of all artifacts in the group.  This list is paged.

### Example


```python
import openapi_client
from openapi_client.models.artifact_search_results import ArtifactSearchResults
from openapi_client.models.sort_by import SortBy
from openapi_client.models.sort_order import SortOrder
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    limit = 56 # int | The number of artifacts to return.  Defaults to 20. (optional)
    offset = 56 # int | The number of artifacts to skip before starting the result set.  Defaults to 0. (optional)
    order = openapi_client.SortOrder() # SortOrder | Sort order, ascending (`asc`) or descending (`desc`). (optional)
    orderby = openapi_client.SortBy() # SortBy | The field to sort by.  Can be one of:  * `name` * `createdOn`  (optional)

    try:
        # List artifacts in group
        api_response = api_instance.list_artifacts_in_group(group_id, limit=limit, offset=offset, order=order, orderby=orderby)
        print("The response of ArtifactsApi->list_artifacts_in_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->list_artifacts_in_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **limit** | **int**| The number of artifacts to return.  Defaults to 20. | [optional] 
 **offset** | **int**| The number of artifacts to skip before starting the result set.  Defaults to 0. | [optional] 
 **order** | [**SortOrder**](.md)| Sort order, ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;). | [optional] 
 **orderby** | [**SortBy**](.md)| The field to sort by.  Can be one of:  * &#x60;name&#x60; * &#x60;createdOn&#x60;  | [optional] 

### Return type

[**ArtifactSearchResults**](ArtifactSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a bounded set of artifacts. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_by_content_hash**
> List[ArtifactReference] references_by_content_hash(content_hash)

List artifact references by hash

Returns a list containing all the artifact references using the artifact content hash.  This operation may fail for one of the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.artifact_reference import ArtifactReference
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    content_hash = 'content_hash_example' # str | SHA-256 content hash for a single artifact content.

    try:
        # List artifact references by hash
        api_response = api_instance.references_by_content_hash(content_hash)
        print("The response of ArtifactsApi->references_by_content_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->references_by_content_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_hash** | **str**| SHA-256 content hash for a single artifact content. | 

### Return type

[**List[ArtifactReference]**](ArtifactReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing all the references for the artifact with the given content hash. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_by_content_id**
> List[ArtifactReference] references_by_content_id(content_id)

List artifact references by content ID

Returns a list containing all the artifact references using the artifact content ID.  This operation may fail for one of the following reasons:  * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.artifact_reference import ArtifactReference
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    content_id = 56 # int | Global identifier for a single artifact content.

    try:
        # List artifact references by content ID
        api_response = api_instance.references_by_content_id(content_id)
        print("The response of ArtifactsApi->references_by_content_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->references_by_content_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_id** | **int**| Global identifier for a single artifact content. | 

### Return type

[**List[ArtifactReference]**](ArtifactReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing all the references for the artifact with the given content id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **references_by_global_id**
> List[ArtifactReference] references_by_global_id(global_id)

List artifact references by global ID

Returns a list containing all the artifact references using the artifact global ID.  This operation may fail for one of the following reasons:  * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.artifact_reference import ArtifactReference
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    global_id = 56 # int | Global identifier for an artifact version.

    try:
        # List artifact references by global ID
        api_response = api_instance.references_by_global_id(global_id)
        print("The response of ArtifactsApi->references_by_global_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->references_by_global_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_id** | **int**| Global identifier for an artifact version. | 

### Return type

[**List[ArtifactReference]**](ArtifactReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing all the references for the artifact with the given global id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_artifacts_0**
> ArtifactSearchResults search_artifacts_0(name=name, offset=offset, limit=limit, order=order, orderby=orderby, labels=labels, properties=properties, description=description, group=group, global_id=global_id, content_id=content_id)

Search for artifacts

Returns a paginated list of all artifacts that match the provided filter criteria. 

### Example


```python
import openapi_client
from openapi_client.models.artifact_search_results import ArtifactSearchResults
from openapi_client.models.sort_by import SortBy
from openapi_client.models.sort_order import SortOrder
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    name = 'name_example' # str | Filter by artifact name. (optional)
    offset = 0 # int | The number of artifacts to skip before starting to collect the result set.  Defaults to 0. (optional) (default to 0)
    limit = 20 # int | The number of artifacts to return.  Defaults to 20. (optional) (default to 20)
    order = openapi_client.SortOrder() # SortOrder | Sort order, ascending (`asc`) or descending (`desc`). (optional)
    orderby = openapi_client.SortBy() # SortBy | The field to sort by.  Can be one of:  * `name` * `createdOn`  (optional)
    labels = ['labels_example'] # List[str] | Filter by label.  Include one or more label to only return artifacts containing all of the specified labels. (optional)
    properties = ['properties_example'] # List[str] | Filter by one or more name/value property.  Separate each name/value pair using a colon.  For example `properties=foo:bar` will return only artifacts with a custom property named `foo` and value `bar`. (optional)
    description = 'description_example' # str | Filter by description. (optional)
    group = 'group_example' # str | Filter by artifact group. (optional)
    global_id = 56 # int | Filter by globalId. (optional)
    content_id = 56 # int | Filter by contentId. (optional)

    try:
        # Search for artifacts
        api_response = api_instance.search_artifacts_0(name=name, offset=offset, limit=limit, order=order, orderby=orderby, labels=labels, properties=properties, description=description, group=group, global_id=global_id, content_id=content_id)
        print("The response of ArtifactsApi->search_artifacts_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->search_artifacts_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Filter by artifact name. | [optional] 
 **offset** | **int**| The number of artifacts to skip before starting to collect the result set.  Defaults to 0. | [optional] [default to 0]
 **limit** | **int**| The number of artifacts to return.  Defaults to 20. | [optional] [default to 20]
 **order** | [**SortOrder**](.md)| Sort order, ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;). | [optional] 
 **orderby** | [**SortBy**](.md)| The field to sort by.  Can be one of:  * &#x60;name&#x60; * &#x60;createdOn&#x60;  | [optional] 
 **labels** | [**List[str]**](str.md)| Filter by label.  Include one or more label to only return artifacts containing all of the specified labels. | [optional] 
 **properties** | [**List[str]**](str.md)| Filter by one or more name/value property.  Separate each name/value pair using a colon.  For example &#x60;properties&#x3D;foo:bar&#x60; will return only artifacts with a custom property named &#x60;foo&#x60; and value &#x60;bar&#x60;. | [optional] 
 **description** | **str**| Filter by description. | [optional] 
 **group** | **str**| Filter by artifact group. | [optional] 
 **global_id** | **int**| Filter by globalId. | [optional] 
 **content_id** | **int**| Filter by contentId. | [optional] 

### Return type

[**ArtifactSearchResults**](ArtifactSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a result set of artifacts - one for each artifact in the registry that matches the criteria. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_artifacts_by_content_0**
> ArtifactSearchResults search_artifacts_by_content_0(body, canonical=canonical, artifact_type=artifact_type, offset=offset, limit=limit, order=order, orderby=orderby)

Search for artifacts by content

Returns a paginated list of all artifacts with at least one version that matches the posted content. 

### Example


```python
import openapi_client
from openapi_client.models.artifact_search_results import ArtifactSearchResults
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
    api_instance = openapi_client.ArtifactsApi(api_client)
    body = None # bytearray | The content to search for.
    canonical = True # bool | Parameter that can be set to `true` to indicate that the server should \"canonicalize\" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter. (optional)
    artifact_type = 'artifact_type_example' # str | Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts. (optional)
    offset = 0 # int | The number of artifacts to skip before starting to collect the result set.  Defaults to 0. (optional) (default to 0)
    limit = 20 # int | The number of artifacts to return.  Defaults to 20. (optional) (default to 20)
    order = 'order_example' # str | Sort order, ascending (`asc`) or descending (`desc`). (optional)
    orderby = 'orderby_example' # str | The field to sort by.  Can be one of:  * `name` * `createdOn`  (optional)

    try:
        # Search for artifacts by content
        api_response = api_instance.search_artifacts_by_content_0(body, canonical=canonical, artifact_type=artifact_type, offset=offset, limit=limit, order=order, orderby=orderby)
        print("The response of ArtifactsApi->search_artifacts_by_content_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->search_artifacts_by_content_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **bytearray**| The content to search for. | 
 **canonical** | **bool**| Parameter that can be set to &#x60;true&#x60; to indicate that the server should \&quot;canonicalize\&quot; the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the &#x60;artifactType&#x60; query parameter. | [optional] 
 **artifact_type** | **str**| Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the &#x60;canonical&#x60; query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts. | [optional] 
 **offset** | **int**| The number of artifacts to skip before starting to collect the result set.  Defaults to 0. | [optional] [default to 0]
 **limit** | **int**| The number of artifacts to return.  Defaults to 20. | [optional] [default to 20]
 **order** | **str**| Sort order, ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;). | [optional] 
 **orderby** | **str**| The field to sort by.  Can be one of:  * &#x60;name&#x60; * &#x60;createdOn&#x60;  | [optional] 

### Return type

[**ArtifactSearchResults**](ArtifactSearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a result set of artifacts - one for each artifact in the registry that matches the criteria. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact**
> ArtifactMetaData update_artifact(group_id, artifact_id, body, x_registry_version=x_registry_version, x_registry_name=x_registry_name, x_registry_name_encoded=x_registry_name_encoded, x_registry_description=x_registry_description, x_registry_description_encoded=x_registry_description_encoded)

Update artifact

Updates an artifact by uploading new content.  The body of the request can be the raw content of the artifact or a JSON object containing both the raw content and a set of references to other artifacts..  This is typically in JSON format for *most* of the supported types, but may be in another format for a few (for example, `PROTOBUF`). The type of the content should be compatible with the artifact's type (it would be an error to update an `AVRO` artifact with new `OPENAPI` content, for example).  The update could fail for a number of reasons including:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * The new content violates one of the rules configured for the artifact (HTTP error `409`) * A server error occurred (HTTP error `500`)  When successful, this creates a new version of the artifact, making it the most recent (and therefore official) version of the artifact.

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    body = {"components":{"schemas":{"Widget":{"description":"A sample data type.","example":{"property-1":"value1","property-2":true},"properties":{"property-1":{"type":"string"},"property-2":{"type":"boolean"}},"title":"Root Type for Widget","type":"object"}}},"info":{"description":"An example API design using OpenAPI.","title":"Empty API","version":"1.0.7"},"openapi":"3.0.2","paths":{"/widgets":{"get":{"responses":{"200":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"description":"All widgets"}},"summary":"Get widgets"}}}} # bytearray | The new content of the artifact being updated. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`) 
    x_registry_version = 'x_registry_version_example' # str | Specifies the version number of this new version of the artifact content.  This would typically be a simple integer or a SemVer value.  If not provided, the server will assign a version number automatically. (optional)
    x_registry_name = 'x_registry_name_example' # str | Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content. (optional)
    x_registry_name_encoded = 'x_registry_name_encoded_example' # str | Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content. (optional)
    x_registry_description = 'x_registry_description_example' # str | Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content. (optional)
    x_registry_description_encoded = 'x_registry_description_encoded_example' # str | Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content. (optional)

    try:
        # Update artifact
        api_response = api_instance.update_artifact(group_id, artifact_id, body, x_registry_version=x_registry_version, x_registry_name=x_registry_name, x_registry_name_encoded=x_registry_name_encoded, x_registry_description=x_registry_description, x_registry_description_encoded=x_registry_description_encoded)
        print("The response of ArtifactsApi->update_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->update_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **body** | **bytearray**| The new content of the artifact being updated. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;)  | 
 **x_registry_version** | **str**| Specifies the version number of this new version of the artifact content.  This would typically be a simple integer or a SemVer value.  If not provided, the server will assign a version number automatically. | [optional] 
 **x_registry_name** | **str**| Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content. | [optional] 
 **x_registry_name_encoded** | **str**| Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content. | [optional] 
 **x_registry_description** | **str**| Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content. | [optional] 
 **x_registry_description_encoded** | **str**| Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content. | [optional] 

### Return type

[**ArtifactMetaData**](ArtifactMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/create.extended+json, application/vnd.create.extended+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | When successful, returns the updated artifact metadata. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_state**
> update_artifact_state(group_id, artifact_id, update_state)

Update artifact state

Updates the state of the artifact.  For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    update_state = openapi_client.UpdateState() # UpdateState | 

    try:
        # Update artifact state
        api_instance.update_artifact_state(group_id, artifact_id, update_state)
    except Exception as e:
        print("Exception when calling ArtifactsApi->update_artifact_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
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
**204** | Returned when the operation was successful. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

