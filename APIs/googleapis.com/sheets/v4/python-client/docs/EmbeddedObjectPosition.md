# EmbeddedObjectPosition

The position of an embedded object such as a chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_sheet** | **bool** | If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing. | [optional] 
**overlay_position** | [**OverlayPosition**](OverlayPosition.md) |  | [optional] 
**sheet_id** | **int** | The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative. | [optional] 

## Example

```python
from openapi_client.models.embedded_object_position import EmbeddedObjectPosition

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedObjectPosition from a JSON string
embedded_object_position_instance = EmbeddedObjectPosition.from_json(json)
# print the JSON string representation of the object
print(EmbeddedObjectPosition.to_json())

# convert the object into a dict
embedded_object_position_dict = embedded_object_position_instance.to_dict()
# create an instance of EmbeddedObjectPosition from a dict
embedded_object_position_from_dict = EmbeddedObjectPosition.from_dict(embedded_object_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


