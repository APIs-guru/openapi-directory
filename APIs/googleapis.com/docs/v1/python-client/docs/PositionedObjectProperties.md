# PositionedObjectProperties

Properties of a PositionedObject.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded_object** | [**EmbeddedObject**](EmbeddedObject.md) |  | [optional] 
**positioning** | [**PositionedObjectPositioning**](PositionedObjectPositioning.md) |  | [optional] 

## Example

```python
from openapi_client.models.positioned_object_properties import PositionedObjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PositionedObjectProperties from a JSON string
positioned_object_properties_instance = PositionedObjectProperties.from_json(json)
# print the JSON string representation of the object
print(PositionedObjectProperties.to_json())

# convert the object into a dict
positioned_object_properties_dict = positioned_object_properties_instance.to_dict()
# create an instance of PositionedObjectProperties from a dict
positioned_object_properties_from_dict = PositionedObjectProperties.from_dict(positioned_object_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


