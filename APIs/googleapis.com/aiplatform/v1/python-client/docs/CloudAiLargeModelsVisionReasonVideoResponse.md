# CloudAiLargeModelsVisionReasonVideoResponse

Video reasoning response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[CloudAiLargeModelsVisionReasonVideoResponseTextResponse]**](CloudAiLargeModelsVisionReasonVideoResponseTextResponse.md) | Generated text responses. The generated responses for different segments within the same video. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_reason_video_response import CloudAiLargeModelsVisionReasonVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionReasonVideoResponse from a JSON string
cloud_ai_large_models_vision_reason_video_response_instance = CloudAiLargeModelsVisionReasonVideoResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionReasonVideoResponse.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_reason_video_response_dict = cloud_ai_large_models_vision_reason_video_response_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionReasonVideoResponse from a dict
cloud_ai_large_models_vision_reason_video_response_from_dict = CloudAiLargeModelsVisionReasonVideoResponse.from_dict(cloud_ai_large_models_vision_reason_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


