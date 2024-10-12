# GoogleCloudAiplatformV1PipelineTaskDetailArtifactList

A list of artifact metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[GoogleCloudAiplatformV1Artifact]**](GoogleCloudAiplatformV1Artifact.md) | Output only. A list of artifact metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_pipeline_task_detail_artifact_list import GoogleCloudAiplatformV1PipelineTaskDetailArtifactList

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PipelineTaskDetailArtifactList from a JSON string
google_cloud_aiplatform_v1_pipeline_task_detail_artifact_list_instance = GoogleCloudAiplatformV1PipelineTaskDetailArtifactList.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PipelineTaskDetailArtifactList.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_pipeline_task_detail_artifact_list_dict = google_cloud_aiplatform_v1_pipeline_task_detail_artifact_list_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PipelineTaskDetailArtifactList from a dict
google_cloud_aiplatform_v1_pipeline_task_detail_artifact_list_from_dict = GoogleCloudAiplatformV1PipelineTaskDetailArtifactList.from_dict(google_cloud_aiplatform_v1_pipeline_task_detail_artifact_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


