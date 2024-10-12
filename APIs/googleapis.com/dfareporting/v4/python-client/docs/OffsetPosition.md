# OffsetPosition

Offset Position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left** | **int** | Offset distance from left side of an asset or a window. | [optional] 
**top** | **int** | Offset distance from top side of an asset or a window. | [optional] 

## Example

```python
from openapi_client.models.offset_position import OffsetPosition

# TODO update the JSON string below
json = "{}"
# create an instance of OffsetPosition from a JSON string
offset_position_instance = OffsetPosition.from_json(json)
# print the JSON string representation of the object
print(OffsetPosition.to_json())

# convert the object into a dict
offset_position_dict = offset_position_instance.to_dict()
# create an instance of OffsetPosition from a dict
offset_position_from_dict = OffsetPosition.from_dict(offset_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


