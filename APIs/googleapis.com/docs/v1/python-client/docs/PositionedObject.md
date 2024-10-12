# PositionedObject

An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The ID of this positioned object. | [optional] 
**positioned_object_properties** | [**PositionedObjectProperties**](PositionedObjectProperties.md) |  | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_id** | **str** | The suggested insertion ID. If empty, then this is not a suggested insertion. | [optional] 
**suggested_positioned_object_properties_changes** | [**Dict[str, SuggestedPositionedObjectProperties]**](SuggestedPositionedObjectProperties.md) | The suggested changes to the positioned object properties, keyed by suggestion ID. | [optional] 

## Example

```python
from openapi_client.models.positioned_object import PositionedObject

# TODO update the JSON string below
json = "{}"
# create an instance of PositionedObject from a JSON string
positioned_object_instance = PositionedObject.from_json(json)
# print the JSON string representation of the object
print(PositionedObject.to_json())

# convert the object into a dict
positioned_object_dict = positioned_object_instance.to_dict()
# create an instance of PositionedObject from a dict
positioned_object_from_dict = PositionedObject.from_dict(positioned_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


