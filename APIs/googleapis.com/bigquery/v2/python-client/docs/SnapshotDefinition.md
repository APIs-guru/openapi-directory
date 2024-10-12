# SnapshotDefinition

Information about base table and snapshot time of the snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_table_reference** | [**TableReference**](TableReference.md) |  | [optional] 
**snapshot_time** | **datetime** | Required. The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format. | [optional] 

## Example

```python
from openapi_client.models.snapshot_definition import SnapshotDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotDefinition from a JSON string
snapshot_definition_instance = SnapshotDefinition.from_json(json)
# print the JSON string representation of the object
print(SnapshotDefinition.to_json())

# convert the object into a dict
snapshot_definition_dict = snapshot_definition_instance.to_dict()
# create an instance of SnapshotDefinition from a dict
snapshot_definition_from_dict = SnapshotDefinition.from_dict(snapshot_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


