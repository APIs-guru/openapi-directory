# ContextAnnotationEntityFields

Represents the data for the context annotation entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the context annotation entity. | [optional] 
**id** | **str** | The unique id for a context annotation entity. | 
**name** | **str** | Name of the context annotation entity. | [optional] 

## Example

```python
from openapi_client.models.context_annotation_entity_fields import ContextAnnotationEntityFields

# TODO update the JSON string below
json = "{}"
# create an instance of ContextAnnotationEntityFields from a JSON string
context_annotation_entity_fields_instance = ContextAnnotationEntityFields.from_json(json)
# print the JSON string representation of the object
print(ContextAnnotationEntityFields.to_json())

# convert the object into a dict
context_annotation_entity_fields_dict = context_annotation_entity_fields_instance.to_dict()
# create an instance of ContextAnnotationEntityFields from a dict
context_annotation_entity_fields_from_dict = ContextAnnotationEntityFields.from_dict(context_annotation_entity_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


