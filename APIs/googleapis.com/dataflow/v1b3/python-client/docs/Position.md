# Position

Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_offset** | **str** | Position is a byte offset. | [optional] 
**concat_position** | [**ConcatPosition**](ConcatPosition.md) |  | [optional] 
**end** | **bool** | Position is past all other positions. Also useful for the end position of an unbounded range. | [optional] 
**key** | **str** | Position is a string key, ordered lexicographically. | [optional] 
**record_index** | **str** | Position is a record index. | [optional] 
**shuffle_position** | **str** | CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding). | [optional] 

## Example

```python
from openapi_client.models.position import Position

# TODO update the JSON string below
json = "{}"
# create an instance of Position from a JSON string
position_instance = Position.from_json(json)
# print the JSON string representation of the object
print(Position.to_json())

# convert the object into a dict
position_dict = position_instance.to_dict()
# create an instance of Position from a dict
position_from_dict = Position.from_dict(position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


