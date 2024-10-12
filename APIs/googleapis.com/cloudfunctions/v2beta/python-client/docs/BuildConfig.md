# BuildConfig

Describes the Build step of the function that builds a container from the given source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_update_policy** | **object** | Security patches are applied automatically to the runtime without requiring the function to be redeployed. | [optional] 
**build** | **str** | Output only. The Cloud Build name of the latest successful deployment of the function. | [optional] [readonly] 
**docker_registry** | **str** | Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If &#x60;docker_repository&#x60; field is specified, this field will be automatically set as &#x60;ARTIFACT_REGISTRY&#x60;. If unspecified, it currently defaults to &#x60;CONTAINER_REGISTRY&#x60;. This field may be overridden by the backend for eligible deployments. | [optional] 
**docker_repository** | **str** | Repository in Artifact Registry to which the function docker image will be pushed after it is built by Cloud Build. If specified by user, it is created and managed by user with a customer managed encryption key. Otherwise, GCF will create and use a repository named &#39;gcf-artifacts&#39; for every deployed region. It must match the pattern &#x60;projects/{project}/locations/{location}/repositories/{repository}&#x60;. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be &#39;DOCKER&#39;. | [optional] 
**entry_point** | **str** | The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named \&quot;function\&quot;. For Node.js this is name of a function exported by the module specified in &#x60;source_location&#x60;. | [optional] 
**environment_variables** | **Dict[str, str]** | User-provided build-time environment variables for the function | [optional] 
**on_deploy_update_policy** | [**OnDeployUpdatePolicy**](OnDeployUpdatePolicy.md) |  | [optional] 
**runtime** | **str** | The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [&#x60;gcloud&#x60; command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime). | [optional] 
**service_account** | **str** | [Preview] Service account to be used for building the container | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**source_provenance** | [**SourceProvenance**](SourceProvenance.md) |  | [optional] 
**source_token** | **str** | An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. | [optional] 
**worker_pool** | **str** | Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is &#x60;projects/{project}/locations/{region}/workerPools/{workerPool}&#x60; where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project. | [optional] 

## Example

```python
from openapi_client.models.build_config import BuildConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BuildConfig from a JSON string
build_config_instance = BuildConfig.from_json(json)
# print the JSON string representation of the object
print(BuildConfig.to_json())

# convert the object into a dict
build_config_dict = build_config_instance.to_dict()
# create an instance of BuildConfig from a dict
build_config_from_dict = BuildConfig.from_dict(build_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


