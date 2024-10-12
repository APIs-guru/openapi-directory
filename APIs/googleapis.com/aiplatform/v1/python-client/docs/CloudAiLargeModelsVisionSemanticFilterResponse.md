# CloudAiLargeModelsVisionSemanticFilterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_bounding_boxes** | [**List[CloudAiLargeModelsVisionNamedBoundingBox]**](CloudAiLargeModelsVisionNamedBoundingBox.md) | Class labels of the bounding boxes that failed the semantic filtering. Bounding box coordinates. | [optional] 
**passed_semantic_filter** | **bool** | This response is added when semantic filter config is turned on in EditConfig. It reports if this image is passed semantic filter response. If passed_semantic_filter is false, the bounding box information will be populated for user to check what caused the semantic filter to fail. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_semantic_filter_response import CloudAiLargeModelsVisionSemanticFilterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionSemanticFilterResponse from a JSON string
cloud_ai_large_models_vision_semantic_filter_response_instance = CloudAiLargeModelsVisionSemanticFilterResponse.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionSemanticFilterResponse.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_semantic_filter_response_dict = cloud_ai_large_models_vision_semantic_filter_response_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionSemanticFilterResponse from a dict
cloud_ai_large_models_vision_semantic_filter_response_from_dict = CloudAiLargeModelsVisionSemanticFilterResponse.from_dict(cloud_ai_large_models_vision_semantic_filter_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


