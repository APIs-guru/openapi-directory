# GoogleCloudAiplatformV1PipelineTemplateMetadata

Pipeline template metadata if PipelineJob.template_uri is from supported template registry. Currently, the only supported registry is Artifact Registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The version_name in artifact registry. Will always be presented in output if the PipelineJob.template_uri is from supported template registry. Format is \&quot;sha256:abcdef123456...\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_pipeline_template_metadata import GoogleCloudAiplatformV1PipelineTemplateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PipelineTemplateMetadata from a JSON string
google_cloud_aiplatform_v1_pipeline_template_metadata_instance = GoogleCloudAiplatformV1PipelineTemplateMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PipelineTemplateMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_pipeline_template_metadata_dict = google_cloud_aiplatform_v1_pipeline_template_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PipelineTemplateMetadata from a dict
google_cloud_aiplatform_v1_pipeline_template_metadata_from_dict = GoogleCloudAiplatformV1PipelineTemplateMetadata.from_dict(google_cloud_aiplatform_v1_pipeline_template_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


