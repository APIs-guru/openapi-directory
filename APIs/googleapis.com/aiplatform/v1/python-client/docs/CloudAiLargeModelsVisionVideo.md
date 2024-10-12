# CloudAiLargeModelsVisionVideo

Video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Path to another storage (typically Google Cloud Storage). | [optional] 
**video** | **bytearray** | Raw bytes. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_video import CloudAiLargeModelsVisionVideo

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionVideo from a JSON string
cloud_ai_large_models_vision_video_instance = CloudAiLargeModelsVisionVideo.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionVideo.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_video_dict = cloud_ai_large_models_vision_video_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionVideo from a dict
cloud_ai_large_models_vision_video_from_dict = CloudAiLargeModelsVisionVideo.from_dict(cloud_ai_large_models_vision_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


