# GoogleCloudAiplatformV1CustomJobSpec

Represents the spec of a CustomJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_output_directory** | [**GoogleCloudAiplatformV1GcsDestination**](GoogleCloudAiplatformV1GcsDestination.md) |  | [optional] 
**enable_dashboard_access** | **bool** | Optional. Whether you want Vertex AI to enable access to the customized dashboard in training chief container. If set to &#x60;true&#x60;, you can access the dashboard at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials). | [optional] 
**enable_web_access** | **bool** | Optional. Whether you want Vertex AI to enable [interactive shell access](https://cloud.google.com/vertex-ai/docs/training/monitor-debug-interactive-shell) to training containers. If set to &#x60;true&#x60;, you can access interactive shells at the URIs given by CustomJob.web_access_uris or Trial.web_access_uris (within HyperparameterTuningJob.trials). | [optional] 
**experiment** | **str** | Optional. The Experiment associated with this job. Format: &#x60;projects/{project}/locations/{location}/metadataStores/{metadataStores}/contexts/{experiment-name}&#x60; | [optional] 
**experiment_run** | **str** | Optional. The Experiment Run associated with this job. Format: &#x60;projects/{project}/locations/{location}/metadataStores/{metadataStores}/contexts/{experiment-name}-{experiment-run-name}&#x60; | [optional] 
**models** | **List[str]** | Optional. The name of the Model resources for which to generate a mapping to artifact URIs. Applicable only to some of the Google-provided custom jobs. Format: &#x60;projects/{project}/locations/{location}/models/{model}&#x60; In order to retrieve a specific version of the model, also provide the version ID or version alias. Example: &#x60;projects/{project}/locations/{location}/models/{model}@2&#x60; or &#x60;projects/{project}/locations/{location}/models/{model}@golden&#x60; If no version ID or alias is specified, the \&quot;default\&quot; version will be returned. The \&quot;default\&quot; version alias is created for the first version of the model, and can be moved to other versions later on. There will be exactly one default version. | [optional] 
**network** | **str** | Optional. The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Job should be peered. For example, &#x60;projects/12345/global/networks/myVPC&#x60;. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form &#x60;projects/{project}/global/networks/{network}&#x60;. Where {project} is a project number, as in &#x60;12345&#x60;, and {network} is a network name. To specify this field, you must have already [configured VPC Network Peering for Vertex AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering). If this field is left unspecified, the job is not peered with any network. | [optional] 
**protected_artifact_location_id** | **str** | The ID of the location to store protected artifacts. e.g. us-central1. Populate only when the location is different than CustomJob location. List of supported locations: https://cloud.google.com/vertex-ai/docs/general/locations | [optional] 
**reserved_ip_ranges** | **List[str]** | Optional. A list of names for the reserved ip ranges under the VPC network that can be used for this job. If set, we will deploy the job within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network. Example: [&#39;vertex-ai-ip-range&#39;]. | [optional] 
**scheduling** | [**GoogleCloudAiplatformV1Scheduling**](GoogleCloudAiplatformV1Scheduling.md) |  | [optional] 
**service_account** | **str** | Specifies the service account for workload run-as account. Users submitting jobs must have act-as permission on this run-as account. If unspecified, the [Vertex AI Custom Code Service Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents) for the CustomJob&#39;s project is used. | [optional] 
**tensorboard** | **str** | Optional. The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}&#x60; | [optional] 
**worker_pool_specs** | [**List[GoogleCloudAiplatformV1WorkerPoolSpec]**](GoogleCloudAiplatformV1WorkerPoolSpec.md) | Required. The spec of the worker pools including machine type and Docker image. All worker pools except the first one are optional and can be skipped by providing an empty value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_custom_job_spec import GoogleCloudAiplatformV1CustomJobSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CustomJobSpec from a JSON string
google_cloud_aiplatform_v1_custom_job_spec_instance = GoogleCloudAiplatformV1CustomJobSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CustomJobSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_custom_job_spec_dict = google_cloud_aiplatform_v1_custom_job_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CustomJobSpec from a dict
google_cloud_aiplatform_v1_custom_job_spec_from_dict = GoogleCloudAiplatformV1CustomJobSpec.from_dict(google_cloud_aiplatform_v1_custom_job_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


