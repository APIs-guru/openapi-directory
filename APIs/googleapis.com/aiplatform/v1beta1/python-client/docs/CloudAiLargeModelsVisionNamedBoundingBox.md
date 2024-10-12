# CloudAiLargeModelsVisionNamedBoundingBox


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classes** | **List[str]** |  | [optional] 
**entities** | **List[str]** |  | [optional] 
**scores** | **List[float]** |  | [optional] 
**x1** | **float** |  | [optional] 
**x2** | **float** |  | [optional] 
**y1** | **float** |  | [optional] 
**y2** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_named_bounding_box import CloudAiLargeModelsVisionNamedBoundingBox

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionNamedBoundingBox from a JSON string
cloud_ai_large_models_vision_named_bounding_box_instance = CloudAiLargeModelsVisionNamedBoundingBox.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionNamedBoundingBox.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_named_bounding_box_dict = cloud_ai_large_models_vision_named_bounding_box_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionNamedBoundingBox from a dict
cloud_ai_large_models_vision_named_bounding_box_from_dict = CloudAiLargeModelsVisionNamedBoundingBox.from_dict(cloud_ai_large_models_vision_named_bounding_box_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


