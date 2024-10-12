# CloudAiLargeModelsVisionImage

Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | Image encoding, encoded as \&quot;image/png\&quot; or \&quot;image/jpg\&quot;. | [optional] 
**image** | **bytearray** | Raw bytes. | [optional] 
**image_rai_scores** | [**CloudAiLargeModelsVisionImageRAIScores**](CloudAiLargeModelsVisionImageRAIScores.md) |  | [optional] 
**rai_info** | [**CloudAiLargeModelsVisionRaiInfo**](CloudAiLargeModelsVisionRaiInfo.md) |  | [optional] 
**semantic_filter_response** | [**CloudAiLargeModelsVisionSemanticFilterResponse**](CloudAiLargeModelsVisionSemanticFilterResponse.md) |  | [optional] 
**text** | **str** | Text/Expanded text input for imagen. | [optional] 
**uri** | **str** | Path to another storage (typically Google Cloud Storage). | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_image import CloudAiLargeModelsVisionImage

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionImage from a JSON string
cloud_ai_large_models_vision_image_instance = CloudAiLargeModelsVisionImage.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionImage.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_image_dict = cloud_ai_large_models_vision_image_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionImage from a dict
cloud_ai_large_models_vision_image_from_dict = CloudAiLargeModelsVisionImage.from_dict(cloud_ai_large_models_vision_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


