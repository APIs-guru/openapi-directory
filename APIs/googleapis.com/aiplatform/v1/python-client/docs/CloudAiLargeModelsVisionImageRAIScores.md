# CloudAiLargeModelsVisionImageRAIScores

RAI scores for generated image returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agile_watermark_detection_score** | **float** | Agile watermark score for image. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_image_rai_scores import CloudAiLargeModelsVisionImageRAIScores

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionImageRAIScores from a JSON string
cloud_ai_large_models_vision_image_rai_scores_instance = CloudAiLargeModelsVisionImageRAIScores.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionImageRAIScores.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_image_rai_scores_dict = cloud_ai_large_models_vision_image_rai_scores_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionImageRAIScores from a dict
cloud_ai_large_models_vision_image_rai_scores_from_dict = CloudAiLargeModelsVisionImageRAIScores.from_dict(cloud_ai_large_models_vision_image_rai_scores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


