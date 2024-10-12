# PartitionCursor

A pair of a Cursor and the partition it is for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | [**Cursor**](Cursor.md) |  | [optional] 
**partition** | **str** | The partition this is for. | [optional] 

## Example

```python
from openapi_client.models.partition_cursor import PartitionCursor

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionCursor from a JSON string
partition_cursor_instance = PartitionCursor.from_json(json)
# print the JSON string representation of the object
print(PartitionCursor.to_json())

# convert the object into a dict
partition_cursor_dict = partition_cursor_instance.to_dict()
# create an instance of PartitionCursor from a dict
partition_cursor_from_dict = PartitionCursor.from_dict(partition_cursor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


