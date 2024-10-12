# CloudAiLargeModelsVisionEmbedVideoResponse

Video embedding response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_embeddings** | **List[object]** | The embedding vector for the video. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_embed_video_response import CloudAiLargeModelsVisionEmbedVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionEmbedVideoResponse from a JSON string
cloud_ai_large_models_vision_embed_video_response_instance = CloudAiLargeModelsVisionEmbedVideoResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionEmbedVideoResponse.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_embed_video_response_dict = cloud_ai_large_models_vision_embed_video_response_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionEmbedVideoResponse from a dict
cloud_ai_large_models_vision_embed_video_response_from_dict = CloudAiLargeModelsVisionEmbedVideoResponse.from_dict(cloud_ai_large_models_vision_embed_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


