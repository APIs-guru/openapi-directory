# GoogleCloudAiplatformV1ListTrainingPipelinesResponse

Response message for PipelineService.ListTrainingPipelines

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListTrainingPipelinesRequest.page_token to obtain that page. | [optional] 
**training_pipelines** | [**List[GoogleCloudAiplatformV1TrainingPipeline]**](GoogleCloudAiplatformV1TrainingPipeline.md) | List of TrainingPipelines in the requested page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_training_pipelines_response import GoogleCloudAiplatformV1ListTrainingPipelinesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListTrainingPipelinesResponse from a JSON string
google_cloud_aiplatform_v1_list_training_pipelines_response_instance = GoogleCloudAiplatformV1ListTrainingPipelinesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListTrainingPipelinesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_training_pipelines_response_dict = google_cloud_aiplatform_v1_list_training_pipelines_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListTrainingPipelinesResponse from a dict
google_cloud_aiplatform_v1_list_training_pipelines_response_from_dict = GoogleCloudAiplatformV1ListTrainingPipelinesResponse.from_dict(google_cloud_aiplatform_v1_list_training_pipelines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


