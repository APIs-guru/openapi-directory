# InlineObject

An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline_object_properties** | [**InlineObjectProperties**](InlineObjectProperties.md) |  | [optional] 
**object_id** | **str** | The ID of this inline object. Can be used to update an object’s properties. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_inline_object_properties_changes** | [**Dict[str, SuggestedInlineObjectProperties]**](SuggestedInlineObjectProperties.md) | The suggested changes to the inline object properties, keyed by suggestion ID. | [optional] 
**suggested_insertion_id** | **str** | The suggested insertion ID. If empty, then this is not a suggested insertion. | [optional] 

## Example

```python
from openapi_client.models.inline_object import InlineObject

# TODO update the JSON string below
json = "{}"
# create an instance of InlineObject from a JSON string
inline_object_instance = InlineObject.from_json(json)
# print the JSON string representation of the object
print(InlineObject.to_json())

# convert the object into a dict
inline_object_dict = inline_object_instance.to_dict()
# create an instance of InlineObject from a dict
inline_object_from_dict = InlineObject.from_dict(inline_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


