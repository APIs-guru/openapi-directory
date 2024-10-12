# openapi_client.PublishedArtifactApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**published_artifacts_get**](PublishedArtifactApi.md#published_artifacts_get) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}/artifacts/{artifactName} | 
[**published_artifacts_list**](PublishedArtifactApi.md#published_artifacts_list) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/versions/{versionId}/artifacts | 


# **published_artifacts_get**
> Artifact published_artifacts_get(api_version, scope, blueprint_name, version_id, artifact_name)



Get an artifact for a published blueprint definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact import Artifact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublishedArtifactApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.
    version_id = 'version_id_example' # str | Version of the published blueprint definition.
    artifact_name = 'artifact_name_example' # str | Name of the blueprint artifact.

    try:
        api_response = api_instance.published_artifacts_get(api_version, scope, blueprint_name, version_id, artifact_name)
        print("The response of PublishedArtifactApi->published_artifacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishedArtifactApi->published_artifacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 
 **version_id** | **str**| Version of the published blueprint definition. | 
 **artifact_name** | **str**| Name of the blueprint artifact. | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- artifact of published blueprint definition retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **published_artifacts_list**
> ArtifactList published_artifacts_list(api_version, scope, blueprint_name, version_id)



List artifacts for a version of a published blueprint definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.artifact_list import ArtifactList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PublishedArtifactApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.
    version_id = 'version_id_example' # str | Version of the published blueprint definition.

    try:
        api_response = api_instance.published_artifacts_list(api_version, scope, blueprint_name, version_id)
        print("The response of PublishedArtifactApi->published_artifacts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PublishedArtifactApi->published_artifacts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 
 **version_id** | **str**| Version of the published blueprint definition. | 

### Return type

[**ArtifactList**](ArtifactList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- artifacts of a version of published blueprint definition retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

