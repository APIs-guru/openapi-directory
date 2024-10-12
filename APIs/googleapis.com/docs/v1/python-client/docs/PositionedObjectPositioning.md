# PositionedObjectPositioning

The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout** | **str** | The layout of this positioned object. | [optional] 
**left_offset** | [**Dimension**](Dimension.md) |  | [optional] 
**top_offset** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.positioned_object_positioning import PositionedObjectPositioning

# TODO update the JSON string below
json = "{}"
# create an instance of PositionedObjectPositioning from a JSON string
positioned_object_positioning_instance = PositionedObjectPositioning.from_json(json)
# print the JSON string representation of the object
print(PositionedObjectPositioning.to_json())

# convert the object into a dict
positioned_object_positioning_dict = positioned_object_positioning_instance.to_dict()
# create an instance of PositionedObjectPositioning from a dict
positioned_object_positioning_from_dict = PositionedObjectPositioning.from_dict(positioned_object_positioning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


