# CloudFunction

Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automatic_update_policy** | **object** | Security patches are applied automatically to the runtime without requiring the function to be redeployed. | [optional] 
**available_memory_mb** | **int** | The amount of memory in MB available for a function. Defaults to 256MB. | [optional] 
**build_environment_variables** | **Dict[str, str]** | Build environment variables that shall be available during build time. | [optional] 
**build_id** | **str** | Output only. The Cloud Build ID of the latest successful deployment of the function. | [optional] [readonly] 
**build_name** | **str** | Output only. The Cloud Build Name of the function deployment. &#x60;projects//locations//builds/&#x60;. | [optional] [readonly] 
**build_service_account** | **str** | Optional. A service account the user provides for use with Cloud Build. | [optional] 
**build_worker_pool** | **str** | Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is &#x60;projects/{project}/locations/{region}/workerPools/{workerPool}&#x60; where &#x60;{project}&#x60; and &#x60;{region}&#x60; are the project id and region respectively where the worker pool is defined and &#x60;{workerPool}&#x60; is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (&#x60;service-@gcf-admin-robot.iam.gserviceaccount.com&#x60;) must be granted the role Cloud Build Custom Workers Builder (&#x60;roles/cloudbuild.customworkers.builder&#x60;) in the project. | [optional] 
**description** | **str** | User-provided description of a function. | [optional] 
**docker_registry** | **str** | Docker Registry to use for this deployment. If unspecified, it defaults to &#x60;ARTIFACT_REGISTRY&#x60;. If &#x60;docker_repository&#x60; field is specified, this field should either be left unspecified or set to &#x60;ARTIFACT_REGISTRY&#x60;. | [optional] 
**docker_repository** | **str** | User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry. If unspecified and the deployment is eligible to use Artifact Registry, GCF will create and use a repository named &#39;gcf-artifacts&#39; for every deployed region. This is the repository to which the function docker image will be pushed after it is built by Cloud Build. It must match the pattern &#x60;projects/{project}/locations/{location}/repositories/{repository}&#x60;. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be &#39;DOCKER&#39;. | [optional] 
**entry_point** | **str** | The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix (ID of the function), if not specified. | [optional] 
**environment_variables** | **Dict[str, str]** | Environment variables that shall be available during function execution. | [optional] 
**event_trigger** | [**EventTrigger**](EventTrigger.md) |  | [optional] 
**https_trigger** | [**HttpsTrigger**](HttpsTrigger.md) |  | [optional] 
**ingress_settings** | **str** | The ingress settings for the function, controlling what traffic can reach it. | [optional] 
**kms_key_name** | **str** | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern &#x60;projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}&#x60;. If specified, you must also provide an artifact registry repository using the &#x60;docker_repository&#x60; field that was created with the same KMS crypto key. The following service accounts need to be granted the role &#39;Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)&#39; on the Key/KeyRing/Project/Organization (least access preferred). 1. Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) - Required to protect the function&#39;s image. 2. Google Storage service account (service-{project_number}@gs-project-accounts.iam.gserviceaccount.com) - Required to protect the function&#39;s source code. If this service account does not exist, deploying a function without a KMS key or retrieving the service agent name provisions it. For more information, see https://cloud.google.com/storage/docs/projects#service-agents and https://cloud.google.com/storage/docs/getting-service-agent#gsutil. Google Cloud Functions delegates access to service agents to protect function resources in internal projects that are not accessible by the end user. | [optional] 
**labels** | **Dict[str, str]** | Labels associated with this Cloud Function. | [optional] 
**max_instances** | **int** | The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details. | [optional] 
**min_instances** | **int** | A lower bound for the number function instances that may coexist at a given time. | [optional] 
**name** | **str** | A user-defined name of the function. Function names must be unique globally and match pattern &#x60;projects/*/locations/*/functions/*&#x60; | [optional] 
**network** | **str** | Deprecated: use vpc_connector | [optional] 
**on_deploy_update_policy** | [**OnDeployUpdatePolicy**](OnDeployUpdatePolicy.md) |  | [optional] 
**runtime** | **str** | The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [&#x60;gcloud&#x60; command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime). | [optional] 
**secret_environment_variables** | [**List[SecretEnvVar]**](SecretEnvVar.md) | Secret environment variables configuration. | [optional] 
**secret_volumes** | [**List[SecretVolume]**](SecretVolume.md) | Secret volumes configuration. | [optional] 
**service_account_email** | **str** | The email of the function&#39;s service account. If empty, defaults to &#x60;{project_id}@appspot.gserviceaccount.com&#x60;. | [optional] 
**source_archive_url** | **str** | The Google Cloud Storage URL, starting with &#x60;gs://&#x60;, pointing to the zip archive which contains the function. | [optional] 
**source_repository** | [**SourceRepository**](SourceRepository.md) |  | [optional] 
**source_token** | **str** | Input only. An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. | [optional] 
**source_upload_url** | **str** | The Google Cloud Storage signed URL used for source uploading, generated by calling [google.cloud.functions.v1.GenerateUploadUrl]. The signature is validated on write methods (Create, Update) The signature is stripped from the Function object on read methods (Get, List) | [optional] 
**status** | **str** | Output only. Status of the function deployment. | [optional] [readonly] 
**timeout** | **str** | The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a Cloud Function. | [optional] [readonly] 
**version_id** | **str** | Output only. The version identifier of the Cloud Function. Each deployment attempt results in a new version of a function being created. | [optional] [readonly] 
**vpc_connector** | **str** | The VPC Network Connector that this cloud function can connect to. It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is &#x60;projects/*/locations/*/connectors/*&#x60; This field is mutually exclusive with &#x60;network&#x60; field and will eventually replace it. See [the VPC documentation](https://cloud.google.com/compute/docs/vpc) for more information on connecting Cloud projects. | [optional] 
**vpc_connector_egress_settings** | **str** | The egress settings for the connector, controlling what traffic is diverted through it. | [optional] 

## Example

```python
from openapi_client.models.cloud_function import CloudFunction

# TODO update the JSON string below
json = "{}"
# create an instance of CloudFunction from a JSON string
cloud_function_instance = CloudFunction.from_json(json)
# print the JSON string representation of the object
print(CloudFunction.to_json())

# convert the object into a dict
cloud_function_dict = cloud_function_instance.to_dict()
# create an instance of CloudFunction from a dict
cloud_function_from_dict = CloudFunction.from_dict(cloud_function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


