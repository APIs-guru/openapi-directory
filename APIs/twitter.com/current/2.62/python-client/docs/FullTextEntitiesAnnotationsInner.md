# FullTextEntitiesAnnotationsInner

Annotation for entities based on the Tweet text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | Index (zero-based) at which position this entity ends.  The index is inclusive. | 
**start** | **int** | Index (zero-based) at which position this entity starts.  The index is inclusive. | 
**normalized_text** | **str** | Text used to determine annotation. | [optional] 
**probability** | **float** | Confidence factor for annotation type. | [optional] 
**type** | **str** | Annotation type. | [optional] 

## Example

```python
from openapi_client.models.full_text_entities_annotations_inner import FullTextEntitiesAnnotationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FullTextEntitiesAnnotationsInner from a JSON string
full_text_entities_annotations_inner_instance = FullTextEntitiesAnnotationsInner.from_json(json)
# print the JSON string representation of the object
print(FullTextEntitiesAnnotationsInner.to_json())

# convert the object into a dict
full_text_entities_annotations_inner_dict = full_text_entities_annotations_inner_instance.to_dict()
# create an instance of FullTextEntitiesAnnotationsInner from a dict
full_text_entities_annotations_inner_from_dict = FullTextEntitiesAnnotationsInner.from_dict(full_text_entities_annotations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


