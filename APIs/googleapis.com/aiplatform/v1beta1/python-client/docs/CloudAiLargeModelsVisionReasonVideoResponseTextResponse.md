# CloudAiLargeModelsVisionReasonVideoResponseTextResponse

Contains text that is the response of the video captioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relative_temporal_partition** | [**CloudAiLargeModelsVisionRelativeTemporalPartition**](CloudAiLargeModelsVisionRelativeTemporalPartition.md) |  | [optional] 
**text** | **str** | Text information | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_reason_video_response_text_response import CloudAiLargeModelsVisionReasonVideoResponseTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionReasonVideoResponseTextResponse from a JSON string
cloud_ai_large_models_vision_reason_video_response_text_response_instance = CloudAiLargeModelsVisionReasonVideoResponseTextResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionReasonVideoResponseTextResponse.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_reason_video_response_text_response_dict = cloud_ai_large_models_vision_reason_video_response_text_response_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionReasonVideoResponseTextResponse from a dict
cloud_ai_large_models_vision_reason_video_response_text_response_from_dict = CloudAiLargeModelsVisionReasonVideoResponseTextResponse.from_dict(cloud_ai_large_models_vision_reason_video_response_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


