# AnnotationsSummaryLayersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_character_count** | **int** |  | [optional] 
**layer_id** | **str** |  | [optional] 
**limit_type** | **str** |  | [optional] 
**remaining_character_count** | **int** |  | [optional] 
**updated** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.annotations_summary_layers_inner import AnnotationsSummaryLayersInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationsSummaryLayersInner from a JSON string
annotations_summary_layers_inner_instance = AnnotationsSummaryLayersInner.from_json(json)
# print the JSON string representation of the object
print(AnnotationsSummaryLayersInner.to_json())

# convert the object into a dict
annotations_summary_layers_inner_dict = annotations_summary_layers_inner_instance.to_dict()
# create an instance of AnnotationsSummaryLayersInner from a dict
annotations_summary_layers_inner_from_dict = AnnotationsSummaryLayersInner.from_dict(annotations_summary_layers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


