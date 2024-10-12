# CloudAiLargeModelsVisionGenerateVideoResponse

Generate video response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_samples** | [**List[CloudAiLargeModelsVisionMedia]**](CloudAiLargeModelsVisionMedia.md) | The generates samples. | [optional] 
**rai_media_filtered_count** | **int** | Returns if any videos were filtered due to RAI policies. | [optional] 
**rai_media_filtered_reasons** | **List[str]** | Returns rai failure reasons if any. | [optional] 
**rai_text_filtered_reason** | [**CloudAiLargeModelsVisionFilteredText**](CloudAiLargeModelsVisionFilteredText.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_generate_video_response import CloudAiLargeModelsVisionGenerateVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionGenerateVideoResponse from a JSON string
cloud_ai_large_models_vision_generate_video_response_instance = CloudAiLargeModelsVisionGenerateVideoResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionGenerateVideoResponse.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_generate_video_response_dict = cloud_ai_large_models_vision_generate_video_response_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionGenerateVideoResponse from a dict
cloud_ai_large_models_vision_generate_video_response_from_dict = CloudAiLargeModelsVisionGenerateVideoResponse.from_dict(cloud_ai_large_models_vision_generate_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


