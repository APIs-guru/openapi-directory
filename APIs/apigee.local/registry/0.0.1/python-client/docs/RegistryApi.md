# openapi_client.RegistryApi

All URIs are relative to *http://apigee.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registry_create_api**](RegistryApi.md#registry_create_api) | **POST** /v1/projects/{project}/locations/{location}/apis | 
[**registry_create_api_deployment**](RegistryApi.md#registry_create_api_deployment) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/deployments | 
[**registry_create_api_spec**](RegistryApi.md#registry_create_api_spec) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs | 
[**registry_create_api_version**](RegistryApi.md#registry_create_api_version) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/versions | 
[**registry_create_artifact**](RegistryApi.md#registry_create_artifact) | **POST** /v1/projects/{project}/locations/{location}/artifacts | 
[**registry_delete_api**](RegistryApi.md#registry_delete_api) | **DELETE** /v1/projects/{project}/locations/{location}/apis/{api} | 
[**registry_delete_api_deployment**](RegistryApi.md#registry_delete_api_deployment) | **DELETE** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment} | 
[**registry_delete_api_deployment_revision**](RegistryApi.md#registry_delete_api_deployment_revision) | **DELETE** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:deleteRevision | 
[**registry_delete_api_spec**](RegistryApi.md#registry_delete_api_spec) | **DELETE** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec} | 
[**registry_delete_api_spec_revision**](RegistryApi.md#registry_delete_api_spec_revision) | **DELETE** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:deleteRevision | 
[**registry_delete_api_version**](RegistryApi.md#registry_delete_api_version) | **DELETE** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version} | 
[**registry_delete_artifact**](RegistryApi.md#registry_delete_artifact) | **DELETE** /v1/projects/{project}/locations/{location}/artifacts/{artifact} | 
[**registry_get_api**](RegistryApi.md#registry_get_api) | **GET** /v1/projects/{project}/locations/{location}/apis/{api} | 
[**registry_get_api_deployment**](RegistryApi.md#registry_get_api_deployment) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment} | 
[**registry_get_api_spec**](RegistryApi.md#registry_get_api_spec) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec} | 
[**registry_get_api_spec_contents**](RegistryApi.md#registry_get_api_spec_contents) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:getContents | 
[**registry_get_api_version**](RegistryApi.md#registry_get_api_version) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version} | 
[**registry_get_artifact**](RegistryApi.md#registry_get_artifact) | **GET** /v1/projects/{project}/locations/{location}/artifacts/{artifact} | 
[**registry_get_artifact_contents**](RegistryApi.md#registry_get_artifact_contents) | **GET** /v1/projects/{project}/locations/{location}/artifacts/{artifact}:getContents | 
[**registry_list_api_deployment_revisions**](RegistryApi.md#registry_list_api_deployment_revisions) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:listRevisions | 
[**registry_list_api_deployments**](RegistryApi.md#registry_list_api_deployments) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/deployments | 
[**registry_list_api_spec_revisions**](RegistryApi.md#registry_list_api_spec_revisions) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:listRevisions | 
[**registry_list_api_specs**](RegistryApi.md#registry_list_api_specs) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs | 
[**registry_list_api_versions**](RegistryApi.md#registry_list_api_versions) | **GET** /v1/projects/{project}/locations/{location}/apis/{api}/versions | 
[**registry_list_apis**](RegistryApi.md#registry_list_apis) | **GET** /v1/projects/{project}/locations/{location}/apis | 
[**registry_list_artifacts**](RegistryApi.md#registry_list_artifacts) | **GET** /v1/projects/{project}/locations/{location}/artifacts | 
[**registry_replace_artifact**](RegistryApi.md#registry_replace_artifact) | **PUT** /v1/projects/{project}/locations/{location}/artifacts/{artifact} | 
[**registry_rollback_api_deployment**](RegistryApi.md#registry_rollback_api_deployment) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:rollback | 
[**registry_rollback_api_spec**](RegistryApi.md#registry_rollback_api_spec) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:rollback | 
[**registry_tag_api_deployment_revision**](RegistryApi.md#registry_tag_api_deployment_revision) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:tagRevision | 
[**registry_tag_api_spec_revision**](RegistryApi.md#registry_tag_api_spec_revision) | **POST** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:tagRevision | 
[**registry_update_api**](RegistryApi.md#registry_update_api) | **PATCH** /v1/projects/{project}/locations/{location}/apis/{api} | 
[**registry_update_api_deployment**](RegistryApi.md#registry_update_api_deployment) | **PATCH** /v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment} | 
[**registry_update_api_spec**](RegistryApi.md#registry_update_api_spec) | **PATCH** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec} | 
[**registry_update_api_version**](RegistryApi.md#registry_update_api_version) | **PATCH** /v1/projects/{project}/locations/{location}/apis/{api}/versions/{version} | 


# **registry_create_api**
> Api registry_create_api(project, location, api, api_id=api_id)



CreateApi creates a specified API.

### Example


```python
import openapi_client
from openapi_client.models.api import Api
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = openapi_client.Api() # Api | 
    api_id = 'api_id_example' # str | Required. The ID to use for the api, which will become the final component of the api's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. (optional)

    try:
        api_response = api_instance.registry_create_api(project, location, api, api_id=api_id)
        print("The response of RegistryApi->registry_create_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_create_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | [**Api**](Api.md)|  | 
 **api_id** | **str**| Required. The ID to use for the api, which will become the final component of the api&#39;s resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. | [optional] 

### Return type

[**Api**](Api.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_create_api_deployment**
> ApiDeployment registry_create_api_deployment(project, location, api, api_deployment, api_deployment_id=api_deployment_id)



CreateApiDeployment creates a specified deployment.

### Example


```python
import openapi_client
from openapi_client.models.api_deployment import ApiDeployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    api_deployment = openapi_client.ApiDeployment() # ApiDeployment | 
    api_deployment_id = 'api_deployment_id_example' # str | Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. (optional)

    try:
        api_response = api_instance.registry_create_api_deployment(project, location, api, api_deployment, api_deployment_id=api_deployment_id)
        print("The response of RegistryApi->registry_create_api_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_create_api_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **api_deployment** | [**ApiDeployment**](ApiDeployment.md)|  | 
 **api_deployment_id** | **str**| Required. The ID to use for the deployment, which will become the final component of the deployment&#39;s resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. | [optional] 

### Return type

[**ApiDeployment**](ApiDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_create_api_spec**
> ApiSpec registry_create_api_spec(project, location, api, version, api_spec, api_spec_id=api_spec_id)



CreateApiSpec creates a specified spec.

### Example


```python
import openapi_client
from openapi_client.models.api_spec import ApiSpec
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    api_spec = openapi_client.ApiSpec() # ApiSpec | 
    api_spec_id = 'api_spec_id_example' # str | Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. (optional)

    try:
        api_response = api_instance.registry_create_api_spec(project, location, api, version, api_spec, api_spec_id=api_spec_id)
        print("The response of RegistryApi->registry_create_api_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_create_api_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **api_spec** | [**ApiSpec**](ApiSpec.md)|  | 
 **api_spec_id** | **str**| Required. The ID to use for the spec, which will become the final component of the spec&#39;s resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. | [optional] 

### Return type

[**ApiSpec**](ApiSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_create_api_version**
> ApiVersion registry_create_api_version(project, location, api, api_version, api_version_id=api_version_id)



CreateApiVersion creates a specified version.

### Example


```python
import openapi_client
from openapi_client.models.api_version import ApiVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    api_version = openapi_client.ApiVersion() # ApiVersion | 
    api_version_id = 'api_version_id_example' # str | Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. (optional)

    try:
        api_response = api_instance.registry_create_api_version(project, location, api, api_version, api_version_id=api_version_id)
        print("The response of RegistryApi->registry_create_api_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_create_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **api_version** | [**ApiVersion**](ApiVersion.md)|  | 
 **api_version_id** | **str**| Required. The ID to use for the version, which will become the final component of the version&#39;s resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. | [optional] 

### Return type

[**ApiVersion**](ApiVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_create_artifact**
> Artifact registry_create_artifact(project, location, artifact, artifact_id=artifact_id)



CreateArtifact creates a specified artifact.

### Example


```python
import openapi_client
from openapi_client.models.artifact import Artifact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    artifact = openapi_client.Artifact() # Artifact | 
    artifact_id = 'artifact_id_example' # str | Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. (optional)

    try:
        api_response = api_instance.registry_create_artifact(project, location, artifact, artifact_id=artifact_id)
        print("The response of RegistryApi->registry_create_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_create_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **artifact** | [**Artifact**](Artifact.md)|  | 
 **artifact_id** | **str**| Required. The ID to use for the artifact, which will become the final component of the artifact&#39;s resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID. | [optional] 

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_api**
> registry_delete_api(project, location, api, force=force)



DeleteApi removes a specified API and all of the resources that it  owns.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    force = True # bool | If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) (optional)

    try:
        api_instance.registry_delete_api(project, location, api, force=force)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **force** | **bool**| If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) | [optional] 

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
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_api_deployment**
> registry_delete_api_deployment(project, location, api, deployment, force=force)



DeleteApiDeployment removes a specified deployment, all revisions, and all  child resources (e.g. artifacts).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.
    force = True # bool | If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) (optional)

    try:
        api_instance.registry_delete_api_deployment(project, location, api, deployment, force=force)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_api_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 
 **force** | **bool**| If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) | [optional] 

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
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_api_deployment_revision**
> ApiDeployment registry_delete_api_deployment_revision(project, location, api, deployment)



DeleteApiDeploymentRevision deletes a revision of a deployment.

### Example


```python
import openapi_client
from openapi_client.models.api_deployment import ApiDeployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.

    try:
        api_response = api_instance.registry_delete_api_deployment_revision(project, location, api, deployment)
        print("The response of RegistryApi->registry_delete_api_deployment_revision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_api_deployment_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 

### Return type

[**ApiDeployment**](ApiDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_api_spec**
> registry_delete_api_spec(project, location, api, version, spec, force=force)



DeleteApiSpec removes a specified spec, all revisions, and all child  resources (e.g. artifacts).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.
    force = True # bool | If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) (optional)

    try:
        api_instance.registry_delete_api_spec(project, location, api, version, spec, force=force)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_api_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 
 **force** | **bool**| If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) | [optional] 

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
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_api_spec_revision**
> ApiSpec registry_delete_api_spec_revision(project, location, api, version, spec)



DeleteApiSpecRevision deletes a revision of a spec.

### Example


```python
import openapi_client
from openapi_client.models.api_spec import ApiSpec
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.

    try:
        api_response = api_instance.registry_delete_api_spec_revision(project, location, api, version, spec)
        print("The response of RegistryApi->registry_delete_api_spec_revision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_api_spec_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 

### Return type

[**ApiSpec**](ApiSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_api_version**
> registry_delete_api_version(project, location, api, version, force=force)



DeleteApiVersion removes a specified version and all of the resources that  it owns.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    force = True # bool | If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) (optional)

    try:
        api_instance.registry_delete_api_version(project, location, api, version, force=force)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **force** | **bool**| If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.) | [optional] 

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
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_delete_artifact**
> registry_delete_artifact(project, location, artifact)



DeleteArtifact removes a specified artifact.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    artifact = 'artifact_example' # str | The artifact id.

    try:
        api_instance.registry_delete_artifact(project, location, artifact)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_delete_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **artifact** | **str**| The artifact id. | 

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
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_api**
> Api registry_get_api(project, location, api)



GetApi returns a specified API.

### Example


```python
import openapi_client
from openapi_client.models.api import Api
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.

    try:
        api_response = api_instance.registry_get_api(project, location, api)
        print("The response of RegistryApi->registry_get_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 

### Return type

[**Api**](Api.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_api_deployment**
> ApiDeployment registry_get_api_deployment(project, location, api, deployment)



GetApiDeployment returns a specified deployment.

### Example


```python
import openapi_client
from openapi_client.models.api_deployment import ApiDeployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.

    try:
        api_response = api_instance.registry_get_api_deployment(project, location, api, deployment)
        print("The response of RegistryApi->registry_get_api_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_api_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 

### Return type

[**ApiDeployment**](ApiDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_api_spec**
> ApiSpec registry_get_api_spec(project, location, api, version, spec)



GetApiSpec returns a specified spec.

### Example


```python
import openapi_client
from openapi_client.models.api_spec import ApiSpec
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.

    try:
        api_response = api_instance.registry_get_api_spec(project, location, api, version, spec)
        print("The response of RegistryApi->registry_get_api_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_api_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 

### Return type

[**ApiSpec**](ApiSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_api_spec_contents**
> registry_get_api_spec_contents(project, location, api, version, spec)



GetApiSpecContents returns the contents of a specified spec.  If specs are stored with GZip compression, the default behavior  is to return the spec uncompressed (the mime_type response field  indicates the exact format returned).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.

    try:
        api_instance.registry_get_api_spec_contents(project, location, api, version, spec)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_api_spec_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_api_version**
> ApiVersion registry_get_api_version(project, location, api, version)



GetApiVersion returns a specified version.

### Example


```python
import openapi_client
from openapi_client.models.api_version import ApiVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.

    try:
        api_response = api_instance.registry_get_api_version(project, location, api, version)
        print("The response of RegistryApi->registry_get_api_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 

### Return type

[**ApiVersion**](ApiVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_artifact**
> Artifact registry_get_artifact(project, location, artifact)



GetArtifact returns a specified artifact.

### Example


```python
import openapi_client
from openapi_client.models.artifact import Artifact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    artifact = 'artifact_example' # str | The artifact id.

    try:
        api_response = api_instance.registry_get_artifact(project, location, artifact)
        print("The response of RegistryApi->registry_get_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **artifact** | **str**| The artifact id. | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_get_artifact_contents**
> registry_get_artifact_contents(project, location, artifact)



GetArtifactContents returns the contents of a specified artifact.  If artifacts are stored with GZip compression, the default behavior  is to return the artifact uncompressed (the mime_type response field  indicates the exact format returned).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    artifact = 'artifact_example' # str | The artifact id.

    try:
        api_instance.registry_get_artifact_contents(project, location, artifact)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_get_artifact_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **artifact** | **str**| The artifact id. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_api_deployment_revisions**
> ListApiDeploymentRevisionsResponse registry_list_api_deployment_revisions(project, location, api, deployment, page_size=page_size, page_token=page_token)



ListApiDeploymentRevisions lists all revisions of a deployment.  Revisions are returned in descending order of revision creation time.

### Example


```python
import openapi_client
from openapi_client.models.list_api_deployment_revisions_response import ListApiDeploymentRevisionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.
    page_size = 56 # int | The maximum number of revisions to return per page. (optional)
    page_token = 'page_token_example' # str | The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.registry_list_api_deployment_revisions(project, location, api, deployment, page_size=page_size, page_token=page_token)
        print("The response of RegistryApi->registry_list_api_deployment_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_api_deployment_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 
 **page_size** | **int**| The maximum number of revisions to return per page. | [optional] 
 **page_token** | **str**| The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**ListApiDeploymentRevisionsResponse**](ListApiDeploymentRevisionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_api_deployments**
> ListApiDeploymentsResponse registry_list_api_deployments(project, location, api, page_size=page_size, page_token=page_token, filter=filter)



ListApiDeployments returns matching deployments.

### Example


```python
import openapi_client
from openapi_client.models.list_api_deployments_response import ListApiDeploymentsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    page_size = 56 # int | The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token. (optional)
    filter = 'filter_example' # str | An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields. (optional)

    try:
        api_response = api_instance.registry_list_api_deployments(project, location, api, page_size=page_size, page_token=page_token, filter=filter)
        print("The response of RegistryApi->registry_list_api_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_api_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **page_size** | **int**| The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListApiDeployments&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListApiDeployments&#x60; must match the call that provided the page token. | [optional] 
 **filter** | **str**| An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields. | [optional] 

### Return type

[**ListApiDeploymentsResponse**](ListApiDeploymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_api_spec_revisions**
> ListApiSpecRevisionsResponse registry_list_api_spec_revisions(project, location, api, version, spec, page_size=page_size, page_token=page_token)



ListApiSpecRevisions lists all revisions of a spec.  Revisions are returned in descending order of revision creation time.

### Example


```python
import openapi_client
from openapi_client.models.list_api_spec_revisions_response import ListApiSpecRevisionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.
    page_size = 56 # int | The maximum number of revisions to return per page. (optional)
    page_token = 'page_token_example' # str | The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page. (optional)

    try:
        api_response = api_instance.registry_list_api_spec_revisions(project, location, api, version, spec, page_size=page_size, page_token=page_token)
        print("The response of RegistryApi->registry_list_api_spec_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_api_spec_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 
 **page_size** | **int**| The maximum number of revisions to return per page. | [optional] 
 **page_token** | **str**| The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page. | [optional] 

### Return type

[**ListApiSpecRevisionsResponse**](ListApiSpecRevisionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_api_specs**
> ListApiSpecsResponse registry_list_api_specs(project, location, api, version, page_size=page_size, page_token=page_token, filter=filter)



ListApiSpecs returns matching specs.

### Example


```python
import openapi_client
from openapi_client.models.list_api_specs_response import ListApiSpecsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    page_size = 56 # int | The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token. (optional)
    filter = 'filter_example' # str | An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents. (optional)

    try:
        api_response = api_instance.registry_list_api_specs(project, location, api, version, page_size=page_size, page_token=page_token, filter=filter)
        print("The response of RegistryApi->registry_list_api_specs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_api_specs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **page_size** | **int**| The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListApiSpecs&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListApiSpecs&#x60; must match the call that provided the page token. | [optional] 
 **filter** | **str**| An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents. | [optional] 

### Return type

[**ListApiSpecsResponse**](ListApiSpecsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_api_versions**
> ListApiVersionsResponse registry_list_api_versions(project, location, api, page_size=page_size, page_token=page_token, filter=filter)



ListApiVersions returns matching versions.

### Example


```python
import openapi_client
from openapi_client.models.list_api_versions_response import ListApiVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    page_size = 56 # int | The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token. (optional)
    filter = 'filter_example' # str | An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields. (optional)

    try:
        api_response = api_instance.registry_list_api_versions(project, location, api, page_size=page_size, page_token=page_token, filter=filter)
        print("The response of RegistryApi->registry_list_api_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_api_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **page_size** | **int**| The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListApiVersions&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListApiVersions&#x60; must match the call that provided the page token. | [optional] 
 **filter** | **str**| An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields. | [optional] 

### Return type

[**ListApiVersionsResponse**](ListApiVersionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_apis**
> ListApisResponse registry_list_apis(project, location, page_size=page_size, page_token=page_token, filter=filter)



ListApis returns matching APIs.

### Example


```python
import openapi_client
from openapi_client.models.list_apis_response import ListApisResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    page_size = 56 # int | The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token. (optional)
    filter = 'filter_example' # str | An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields. (optional)

    try:
        api_response = api_instance.registry_list_apis(project, location, page_size=page_size, page_token=page_token, filter=filter)
        print("The response of RegistryApi->registry_list_apis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_apis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **page_size** | **int**| The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListApis&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListApis&#x60; must match the call that provided the page token. | [optional] 
 **filter** | **str**| An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields. | [optional] 

### Return type

[**ListApisResponse**](ListApisResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_list_artifacts**
> ListArtifactsResponse registry_list_artifacts(project, location, page_size=page_size, page_token=page_token, filter=filter)



ListArtifacts returns matching artifacts.

### Example


```python
import openapi_client
from openapi_client.models.list_artifacts_response import ListArtifactsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    page_size = 56 # int | The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token. (optional)
    filter = 'filter_example' # str | An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents. (optional)

    try:
        api_response = api_instance.registry_list_artifacts(project, location, page_size=page_size, page_token=page_token, filter=filter)
        print("The response of RegistryApi->registry_list_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_list_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **page_size** | **int**| The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;ListArtifacts&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListArtifacts&#x60; must match the call that provided the page token. | [optional] 
 **filter** | **str**| An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents. | [optional] 

### Return type

[**ListArtifactsResponse**](ListArtifactsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_replace_artifact**
> Artifact registry_replace_artifact(project, location, artifact, artifact2)



ReplaceArtifact can be used to replace a specified artifact.

### Example


```python
import openapi_client
from openapi_client.models.artifact import Artifact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    artifact = 'artifact_example' # str | The artifact id.
    artifact2 = openapi_client.Artifact() # Artifact | 

    try:
        api_response = api_instance.registry_replace_artifact(project, location, artifact, artifact2)
        print("The response of RegistryApi->registry_replace_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_replace_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **artifact** | **str**| The artifact id. | 
 **artifact2** | [**Artifact**](Artifact.md)|  | 

### Return type

[**Artifact**](Artifact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_rollback_api_deployment**
> ApiDeployment registry_rollback_api_deployment(project, location, api, deployment, rollback_api_deployment_request)



RollbackApiDeployment sets the current revision to a specified prior  revision. Note that this creates a new revision with a new revision ID.

### Example


```python
import openapi_client
from openapi_client.models.api_deployment import ApiDeployment
from openapi_client.models.rollback_api_deployment_request import RollbackApiDeploymentRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.
    rollback_api_deployment_request = openapi_client.RollbackApiDeploymentRequest() # RollbackApiDeploymentRequest | 

    try:
        api_response = api_instance.registry_rollback_api_deployment(project, location, api, deployment, rollback_api_deployment_request)
        print("The response of RegistryApi->registry_rollback_api_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_rollback_api_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 
 **rollback_api_deployment_request** | [**RollbackApiDeploymentRequest**](RollbackApiDeploymentRequest.md)|  | 

### Return type

[**ApiDeployment**](ApiDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_rollback_api_spec**
> ApiSpec registry_rollback_api_spec(project, location, api, version, spec, rollback_api_spec_request)



RollbackApiSpec sets the current revision to a specified prior revision.  Note that this creates a new revision with a new revision ID.

### Example


```python
import openapi_client
from openapi_client.models.api_spec import ApiSpec
from openapi_client.models.rollback_api_spec_request import RollbackApiSpecRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.
    rollback_api_spec_request = openapi_client.RollbackApiSpecRequest() # RollbackApiSpecRequest | 

    try:
        api_response = api_instance.registry_rollback_api_spec(project, location, api, version, spec, rollback_api_spec_request)
        print("The response of RegistryApi->registry_rollback_api_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_rollback_api_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 
 **rollback_api_spec_request** | [**RollbackApiSpecRequest**](RollbackApiSpecRequest.md)|  | 

### Return type

[**ApiSpec**](ApiSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_tag_api_deployment_revision**
> ApiDeployment registry_tag_api_deployment_revision(project, location, api, deployment, tag_api_deployment_revision_request)



TagApiDeploymentRevision adds a tag to a specified revision of a  deployment.

### Example


```python
import openapi_client
from openapi_client.models.api_deployment import ApiDeployment
from openapi_client.models.tag_api_deployment_revision_request import TagApiDeploymentRevisionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.
    tag_api_deployment_revision_request = openapi_client.TagApiDeploymentRevisionRequest() # TagApiDeploymentRevisionRequest | 

    try:
        api_response = api_instance.registry_tag_api_deployment_revision(project, location, api, deployment, tag_api_deployment_revision_request)
        print("The response of RegistryApi->registry_tag_api_deployment_revision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_tag_api_deployment_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 
 **tag_api_deployment_revision_request** | [**TagApiDeploymentRevisionRequest**](TagApiDeploymentRevisionRequest.md)|  | 

### Return type

[**ApiDeployment**](ApiDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_tag_api_spec_revision**
> ApiSpec registry_tag_api_spec_revision(project, location, api, version, spec, tag_api_spec_revision_request)



TagApiSpecRevision adds a tag to a specified revision of a spec.

### Example


```python
import openapi_client
from openapi_client.models.api_spec import ApiSpec
from openapi_client.models.tag_api_spec_revision_request import TagApiSpecRevisionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.
    tag_api_spec_revision_request = openapi_client.TagApiSpecRevisionRequest() # TagApiSpecRevisionRequest | 

    try:
        api_response = api_instance.registry_tag_api_spec_revision(project, location, api, version, spec, tag_api_spec_revision_request)
        print("The response of RegistryApi->registry_tag_api_spec_revision:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_tag_api_spec_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 
 **tag_api_spec_revision_request** | [**TagApiSpecRevisionRequest**](TagApiSpecRevisionRequest.md)|  | 

### Return type

[**ApiSpec**](ApiSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_update_api**
> Api registry_update_api(project, location, api, api2, update_mask=update_mask, allow_missing=allow_missing)



UpdateApi can be used to modify a specified API.

### Example


```python
import openapi_client
from openapi_client.models.api import Api
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    api2 = openapi_client.Api() # Api | 
    update_mask = 'update_mask_example' # str | The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \"*\" is specified, all fields are updated, including fields that are unspecified/default in the request. (optional)
    allow_missing = True # bool | If set to true, and the api is not found, a new api_versions will be created. In this situation, `update_mask` is ignored. (optional)

    try:
        api_response = api_instance.registry_update_api(project, location, api, api2, update_mask=update_mask, allow_missing=allow_missing)
        print("The response of RegistryApi->registry_update_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_update_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **api2** | [**Api**](Api.md)|  | 
 **update_mask** | **str**| The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \&quot;*\&quot; is specified, all fields are updated, including fields that are unspecified/default in the request. | [optional] 
 **allow_missing** | **bool**| If set to true, and the api is not found, a new api_versions will be created. In this situation, &#x60;update_mask&#x60; is ignored. | [optional] 

### Return type

[**Api**](Api.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_update_api_deployment**
> ApiDeployment registry_update_api_deployment(project, location, api, deployment, api_deployment, update_mask=update_mask, allow_missing=allow_missing)



UpdateApiDeployment can be used to modify a specified deployment.

### Example


```python
import openapi_client
from openapi_client.models.api_deployment import ApiDeployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    deployment = 'deployment_example' # str | The deployment id.
    api_deployment = openapi_client.ApiDeployment() # ApiDeployment | 
    update_mask = 'update_mask_example' # str | The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \"*\" is specified, all fields are updated, including fields that are unspecified/default in the request. (optional)
    allow_missing = True # bool | If set to true, and the deployment is not found, a new deployment will be created. In this situation, `update_mask` is ignored. (optional)

    try:
        api_response = api_instance.registry_update_api_deployment(project, location, api, deployment, api_deployment, update_mask=update_mask, allow_missing=allow_missing)
        print("The response of RegistryApi->registry_update_api_deployment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_update_api_deployment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **deployment** | **str**| The deployment id. | 
 **api_deployment** | [**ApiDeployment**](ApiDeployment.md)|  | 
 **update_mask** | **str**| The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \&quot;*\&quot; is specified, all fields are updated, including fields that are unspecified/default in the request. | [optional] 
 **allow_missing** | **bool**| If set to true, and the deployment is not found, a new deployment will be created. In this situation, &#x60;update_mask&#x60; is ignored. | [optional] 

### Return type

[**ApiDeployment**](ApiDeployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_update_api_spec**
> ApiSpec registry_update_api_spec(project, location, api, version, spec, api_spec, update_mask=update_mask, allow_missing=allow_missing)



UpdateApiSpec can be used to modify a specified spec.

### Example


```python
import openapi_client
from openapi_client.models.api_spec import ApiSpec
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    spec = 'spec_example' # str | The spec id.
    api_spec = openapi_client.ApiSpec() # ApiSpec | 
    update_mask = 'update_mask_example' # str | The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \"*\" is specified, all fields are updated, including fields that are unspecified/default in the request. (optional)
    allow_missing = True # bool | If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored. (optional)

    try:
        api_response = api_instance.registry_update_api_spec(project, location, api, version, spec, api_spec, update_mask=update_mask, allow_missing=allow_missing)
        print("The response of RegistryApi->registry_update_api_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_update_api_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **spec** | **str**| The spec id. | 
 **api_spec** | [**ApiSpec**](ApiSpec.md)|  | 
 **update_mask** | **str**| The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \&quot;*\&quot; is specified, all fields are updated, including fields that are unspecified/default in the request. | [optional] 
 **allow_missing** | **bool**| If set to true, and the spec is not found, a new spec will be created. In this situation, &#x60;update_mask&#x60; is ignored. | [optional] 

### Return type

[**ApiSpec**](ApiSpec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registry_update_api_version**
> ApiVersion registry_update_api_version(project, location, api, version, api_version, update_mask=update_mask, allow_missing=allow_missing)



UpdateApiVersion can be used to modify a specified version.

### Example


```python
import openapi_client
from openapi_client.models.api_version import ApiVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apigee.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apigee.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RegistryApi(api_client)
    project = 'project_example' # str | The project id.
    location = 'location_example' # str | The location id.
    api = 'api_example' # str | The api id.
    version = 'version_example' # str | The version id.
    api_version = openapi_client.ApiVersion() # ApiVersion | 
    update_mask = 'update_mask_example' # str | The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \"*\" is specified, all fields are updated, including fields that are unspecified/default in the request. (optional)
    allow_missing = True # bool | If set to true, and the version is not found, a new version will be created. In this situation, `update_mask` is ignored. (optional)

    try:
        api_response = api_instance.registry_update_api_version(project, location, api, version, api_version, update_mask=update_mask, allow_missing=allow_missing)
        print("The response of RegistryApi->registry_update_api_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistryApi->registry_update_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **str**| The project id. | 
 **location** | **str**| The location id. | 
 **api** | **str**| The api id. | 
 **version** | **str**| The version id. | 
 **api_version** | [**ApiVersion**](ApiVersion.md)|  | 
 **update_mask** | **str**| The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a \&quot;*\&quot; is specified, all fields are updated, including fields that are unspecified/default in the request. | [optional] 
 **allow_missing** | **bool**| If set to true, and the version is not found, a new version will be created. In this situation, &#x60;update_mask&#x60; is ignored. | [optional] 

### Return type

[**ApiVersion**](ApiVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

