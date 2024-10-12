# GoogleCloudAiplatformV1beta1PipelineJob

An instance of a machine learning PipelineJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Pipeline creation time. | [optional] [readonly] 
**display_name** | **str** | The display name of the Pipeline. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**end_time** | **str** | Output only. Pipeline end time. | [optional] [readonly] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**job_detail** | [**GoogleCloudAiplatformV1beta1PipelineJobDetail**](GoogleCloudAiplatformV1beta1PipelineJobDetail.md) |  | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize PipelineJob. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. Note there is some reserved label key for Vertex AI Pipelines. - &#x60;vertex-ai-pipelines-run-billing-id&#x60;, user set value will get overrided. | [optional] 
**name** | **str** | Output only. The resource name of the PipelineJob. | [optional] [readonly] 
**network** | **str** | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the Pipeline Job&#39;s workload should be peered. For example, &#x60;projects/12345/global/networks/myVPC&#x60;. [Format](/compute/docs/reference/rest/v1/networks/insert) is of the form &#x60;projects/{project}/global/networks/{network}&#x60;. Where {project} is a project number, as in &#x60;12345&#x60;, and {network} is a network name. Private services access must already be configured for the network. Pipeline job will apply the network configuration to the Google Cloud resources being launched, if applied, such as Vertex AI Training or Dataflow job. If left unspecified, the workload is not peered with any network. | [optional] 
**pipeline_spec** | **Dict[str, object]** | The spec of the pipeline. | [optional] 
**preflight_validations** | **bool** | Optional. Whether to do component level validations before job creation. | [optional] 
**reserved_ip_ranges** | **List[str]** | A list of names for the reserved ip ranges under the VPC network that can be used for this Pipeline Job&#39;s workload. If set, we will deploy the Pipeline Job&#39;s workload within the provided ip ranges. Otherwise, the job will be deployed to any ip ranges under the provided VPC network. Example: [&#39;vertex-ai-ip-range&#39;]. | [optional] 
**runtime_config** | [**GoogleCloudAiplatformV1beta1PipelineJobRuntimeConfig**](GoogleCloudAiplatformV1beta1PipelineJobRuntimeConfig.md) |  | [optional] 
**schedule_name** | **str** | Output only. The schedule resource name. Only returned if the Pipeline is created by Schedule API. | [optional] [readonly] 
**service_account** | **str** | The service account that the pipeline workload runs as. If not specified, the Compute Engine default service account in the project will be used. See https://cloud.google.com/compute/docs/access/service-accounts#default_service_account Users starting the pipeline must have the &#x60;iam.serviceAccounts.actAs&#x60; permission on this service account. | [optional] 
**start_time** | **str** | Output only. Pipeline start time. | [optional] [readonly] 
**state** | **str** | Output only. The detailed state of the job. | [optional] [readonly] 
**template_metadata** | [**GoogleCloudAiplatformV1beta1PipelineTemplateMetadata**](GoogleCloudAiplatformV1beta1PipelineTemplateMetadata.md) |  | [optional] 
**template_uri** | **str** | A template uri from where the PipelineJob.pipeline_spec, if empty, will be downloaded. Currently, only uri from Vertex Template Registry &amp; Gallery is supported. Reference to https://cloud.google.com/vertex-ai/docs/pipelines/create-pipeline-template. | [optional] 
**update_time** | **str** | Output only. Timestamp when this PipelineJob was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_pipeline_job import GoogleCloudAiplatformV1beta1PipelineJob

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PipelineJob from a JSON string
google_cloud_aiplatform_v1beta1_pipeline_job_instance = GoogleCloudAiplatformV1beta1PipelineJob.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PipelineJob.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_pipeline_job_dict = google_cloud_aiplatform_v1beta1_pipeline_job_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PipelineJob from a dict
google_cloud_aiplatform_v1beta1_pipeline_job_from_dict = GoogleCloudAiplatformV1beta1PipelineJob.from_dict(google_cloud_aiplatform_v1beta1_pipeline_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


