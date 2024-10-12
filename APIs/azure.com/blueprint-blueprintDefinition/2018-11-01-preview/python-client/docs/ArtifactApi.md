# openapi_client.ArtifactApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**artifacts_create_or_update**](ArtifactApi.md#artifacts_create_or_update) | **PUT** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts/{artifactName} | 
[**artifacts_delete**](ArtifactApi.md#artifacts_delete) | **DELETE** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts/{artifactName} | 
[**artifacts_get**](ArtifactApi.md#artifacts_get) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts/{artifactName} | 
[**artifacts_list**](ArtifactApi.md#artifacts_list) | **GET** /{scope}/providers/Microsoft.Blueprint/blueprints/{blueprintName}/artifacts | 


# **artifacts_create_or_update**
> Artifact artifacts_create_or_update(api_version, scope, blueprint_name, artifact_name, artifact)



Create or update blueprint artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.
    artifact_name = 'artifact_name_example' # str | Name of the blueprint artifact.
    artifact = openapi_client.Artifact() # Artifact | Blueprint artifact to create or update.

    try:
        api_response = api_instance.artifacts_create_or_update(api_version, scope, blueprint_name, artifact_name, artifact)
        print("The response of ArtifactApi->artifacts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 
 **artifact_name** | **str**| Name of the blueprint artifact. | 
 **artifact** | [**Artifact**](Artifact.md)| Blueprint artifact to create or update. | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created -- blueprint artifact created/updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_delete**
> Artifact artifacts_delete(api_version, scope, blueprint_name, artifact_name)



Delete a blueprint artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.
    artifact_name = 'artifact_name_example' # str | Name of the blueprint artifact.

    try:
        api_response = api_instance.artifacts_delete(api_version, scope, blueprint_name, artifact_name)
        print("The response of ArtifactApi->artifacts_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 
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
**200** | OK -- blueprint artifact deleted. |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_get**
> Artifact artifacts_get(api_version, scope, blueprint_name, artifact_name)



Get a blueprint artifact.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.
    artifact_name = 'artifact_name_example' # str | Name of the blueprint artifact.

    try:
        api_response = api_instance.artifacts_get(api_version, scope, blueprint_name, artifact_name)
        print("The response of ArtifactApi->artifacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 
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
**200** | OK -- blueprint artifact retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **artifacts_list**
> ArtifactList artifacts_list(api_version, scope, blueprint_name)



List artifacts for a given blueprint definition.

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
    api_instance = openapi_client.ArtifactApi(api_client)
    api_version = 'api_version_example' # str | Client API Version.
    scope = 'scope_example' # str | The scope of the resource. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'). For blueprint assignments management group scope is reserved for future use.
    blueprint_name = 'blueprint_name_example' # str | Name of the blueprint definition.

    try:
        api_response = api_instance.artifacts_list(api_version, scope, blueprint_name)
        print("The response of ArtifactApi->artifacts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactApi->artifacts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API Version. | 
 **scope** | **str**| The scope of the resource. Valid scopes are: management group (format: &#39;/providers/Microsoft.Management/managementGroups/{managementGroup}&#39;), subscription (format: &#39;/subscriptions/{subscriptionId}&#39;). For blueprint assignments management group scope is reserved for future use. | 
 **blueprint_name** | **str**| Name of the blueprint definition. | 

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
**200** | OK -- blueprint artifacts retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

