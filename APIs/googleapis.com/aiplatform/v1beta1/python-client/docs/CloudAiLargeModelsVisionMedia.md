# CloudAiLargeModelsVisionMedia

Media.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**CloudAiLargeModelsVisionImage**](CloudAiLargeModelsVisionImage.md) |  | [optional] 
**video** | [**CloudAiLargeModelsVisionVideo**](CloudAiLargeModelsVisionVideo.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_media import CloudAiLargeModelsVisionMedia

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionMedia from a JSON string
cloud_ai_large_models_vision_media_instance = CloudAiLargeModelsVisionMedia.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionMedia.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_media_dict = cloud_ai_large_models_vision_media_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionMedia from a dict
cloud_ai_large_models_vision_media_from_dict = CloudAiLargeModelsVisionMedia.from_dict(cloud_ai_large_models_vision_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


