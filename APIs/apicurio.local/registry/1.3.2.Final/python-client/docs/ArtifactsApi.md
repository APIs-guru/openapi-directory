# openapi_client.ArtifactsApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_artifact**](ArtifactsApi.md#create_artifact) | **POST** /artifacts | Create artifact
[**delete_artifact**](ArtifactsApi.md#delete_artifact) | **DELETE** /artifacts/{artifactId} | Delete artifact
[**get_artifact_by_global_id**](ArtifactsApi.md#get_artifact_by_global_id) | **GET** /ids/{globalId} | Get artifact by global ID
[**get_latest_artifact**](ArtifactsApi.md#get_latest_artifact) | **GET** /artifacts/{artifactId} | Get latest artifact
[**list_artifacts**](ArtifactsApi.md#list_artifacts) | **GET** /artifacts | List all artifact IDs
[**search_artifacts_0**](ArtifactsApi.md#search_artifacts_0) | **GET** /search/artifacts | Search for artifacts
[**update_artifact**](ArtifactsApi.md#update_artifact) | **PUT** /artifacts/{artifactId} | Update artifact
[**update_artifact_state**](ArtifactsApi.md#update_artifact_state) | **PUT** /artifacts/{artifactId}/state | Update artifact state


# **create_artifact**
> ArtifactMetaData create_artifact(x_registry_artifact_type=x_registry_artifact_type, x_registry_artifact_id=x_registry_artifact_id, if_exists=if_exists)

Create artifact

Creates a new artifact by posting the artifact content.  The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the  supported types, but may be in another format for a few (for example, `PROTOBUF`).  The registry attempts to figure out what kind of artifact is being added from the following supported list:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * Protobuf File Descriptor (`PROTOBUF_FD`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`)  Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`  HTTP request header, or include a hint in the request's `Content-Type`.  For example:  ``` Content-Type: application/json; artifactType=AVRO ```  An artifact is created using the content provided in the body of the request.  This content is created under a unique artifact ID that can be provided in the request using the `X-Registry-ArtifactId` request header.  If not provided in the request, the server generates a unique ID for the artifact.  It is typically recommended that callers provide the ID, because this is typically a meaningful identifier,  and for most use cases should be supplied by the caller.  If an artifact with the provided artifact ID already exists, the default behavior is for the server to reject the content with a 409 error.  However, the caller can supply the `ifExists` query parameter to alter this default behavior. The `ifExists` query parameter can have one of the following values:  * `FAIL` (*default*) - server rejects the content with a 409 error * `UPDATE` - server updates the existing artifact and returns the new metadata * `RETURN` - server does not create or add content to the server, but instead  returns the metadata for the existing artifact * `RETURN_OR_UPDATE` - server returns an existing **version** that matches the  provided content if such a version exists, otherwise a new version is created  This operation may fail for one of the following reasons:  * An invalid `ArtifactType` was indicated (HTTP error `400`) * No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`) * Provided content (request body) was empty (HTTP error `400`) * An artifact with the provided ID already exists (HTTP error `409`) * The content violates one of the configured global rules (HTTP error `409`) * A server error occurred (HTTP error `500`) 

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
    x_registry_artifact_type = 'x_registry_artifact_type_example' # str | Specifies the type of the artifact being added. Possible values include:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * Protobuf File Descriptor (`PROTOBUF_FD`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`) (optional)
    x_registry_artifact_id = 'x_registry_artifact_id_example' # str | A client-provided, globally unique identifier for the new artifact. (optional)
    if_exists = 'if_exists_example' # str | Set this option to instruct the server on what to do if the artifact already exists. (optional)

    try:
        # Create artifact
        api_response = api_instance.create_artifact(x_registry_artifact_type=x_registry_artifact_type, x_registry_artifact_id=x_registry_artifact_id, if_exists=if_exists)
        print("The response of ArtifactsApi->create_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->create_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_registry_artifact_type** | **str**| Specifies the type of the artifact being added. Possible values include:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * Protobuf File Descriptor (&#x60;PROTOBUF_FD&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;) | [optional] 
 **x_registry_artifact_id** | **str**| A client-provided, globally unique identifier for the new artifact. | [optional] 
 **if_exists** | **str**| Set this option to instruct the server on what to do if the artifact already exists. | [optional] 

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
**200** | Artifact was successfully created. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_artifact**
> delete_artifact(artifact_id)

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
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Delete artifact
        api_instance.delete_artifact(artifact_id)
    except Exception as e:
        print("Exception when calling ArtifactsApi->delete_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**204** | Returned when the artifact was successfully deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_by_global_id**
> get_artifact_by_global_id(global_id)

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

    try:
        # Get artifact by global ID
        api_instance.get_artifact_by_global_id(global_id)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_artifact_by_global_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_id** | **int**| Global identifier for an artifact version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-protobuf, application/x-protobuffer

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The content of the artifact version. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_artifact**
> get_latest_artifact(artifact_id)

Get latest artifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the response depends on the artifact type.  In most cases, this is `application/json`, but for some types it may be different (for example, `PROTOBUF`). If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.  This operation may fail for one of the following reasons:  * No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`) * A server error occurred (HTTP error `500`) 

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
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.

    try:
        # Get latest artifact
        api_instance.get_latest_artifact(artifact_id)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_latest_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | The most recent version of the artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_artifacts**
> List[str] list_artifacts()

List all artifact IDs

Returns a list of IDs of all artifacts in the registry as a flat list.  Typically the server is configured to limit the number of artifact IDs returned when a large number  of artifacts exist. In this case, the result of this call may be non-deterministic. The  default limit is typically 1000 artifacts.

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

    try:
        # List all artifact IDs
        api_response = api_instance.list_artifacts()
        print("The response of ArtifactsApi->list_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->list_artifacts: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns an array of artifact IDs - one for each artifact in the registry. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_artifacts_0**
> ArtifactSearchResults search_artifacts_0(offset, limit, search=search, over=over, order=order)

Search for artifacts

Returns a paginated list of all artifacts that match the provided search criteria. 

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
    offset = 0 # int | The number of artifacts to skip before starting to collect the result set. (default to 0)
    limit = 20 # int | The number of artifacts to return. (default to 20)
    search = 'search_example' # str | The text to search. (optional)
    over = 'over_example' # str | What fields to search. (optional)
    order = 'order_example' # str | Sort order, ascending or descending. (optional)

    try:
        # Search for artifacts
        api_response = api_instance.search_artifacts_0(offset, limit, search=search, over=over, order=order)
        print("The response of ArtifactsApi->search_artifacts_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->search_artifacts_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| The number of artifacts to skip before starting to collect the result set. | [default to 0]
 **limit** | **int**| The number of artifacts to return. | [default to 20]
 **search** | **str**| The text to search. | [optional] 
 **over** | **str**| What fields to search. | [optional] 
 **order** | **str**| Sort order, ascending or descending. | [optional] 

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
> ArtifactMetaData update_artifact(artifact_id, x_registry_artifact_type=x_registry_artifact_type)

Update artifact

Updates an artifact by uploading new content.  The body of the request should be the raw content of the artifact.  This is typically in JSON format for *most* of the supported types, but may be in another format for a few (for example, `PROTOBUF`).  The registry attempts to figure out what kind of artifact is being added from the following supported list:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * Protobuf File Descriptor (`PROTOBUF_FD`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`)  Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType`  HTTP request header, or include a hint in the request's `Content-Type`.  For example:  ``` Content-Type: application/json; artifactType=AVRO ```  The update could fail for a number of reasons including:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * The new content violates one of the rules configured for the artifact (HTTP error `409`) * The provided artifact type is not recognized (HTTP error `404`) * A server error occurred (HTTP error `500`)  When successful, this creates a new version of the artifact, making it the most recent (and therefore official) version of the artifact.

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
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    x_registry_artifact_type = 'x_registry_artifact_type_example' # str | Specifies the type of the artifact being added.  Possible values include:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * Protobuf File Descriptor (`PROTOBUF_FD`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`) (optional)

    try:
        # Update artifact
        api_response = api_instance.update_artifact(artifact_id, x_registry_artifact_type=x_registry_artifact_type)
        print("The response of ArtifactsApi->update_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->update_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier. | 
 **x_registry_artifact_type** | **str**| Specifies the type of the artifact being added.  Possible values include:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * Protobuf File Descriptor (&#x60;PROTOBUF_FD&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;) | [optional] 

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
**200** | When successful, returns the updated artifact metadata. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_state**
> update_artifact_state(artifact_id, update_state)

Update artifact state

Updates the state of the artifact. For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.  The following state changes are supported:  * Enabled -> Disabled * Enabled -> Deprecated * Enabled -> Deleted * Disabled -> Enabled * Disabled -> Deleted * Disabled -> Deprecated * Deprecated -> Deleted  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * Artifact cannot transition to the given state (HTTP error `400`) * A server error occurred (HTTP error `500`) 

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
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
    update_state = openapi_client.UpdateState() # UpdateState | 

    try:
        # Update artifact state
        api_instance.update_artifact_state(artifact_id, update_state)
    except Exception as e:
        print("Exception when calling ArtifactsApi->update_artifact_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**204** | Returned when the operation was successful. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

