# SnapshotProperties

Snapshot properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** | The creation date of the snapshot | [optional] [readonly] 
**file_system_id** | **str** | UUID v4 used to identify the FileSystem | 
**provisioning_state** | **str** | Azure lifecycle management | [optional] [readonly] 
**snapshot_id** | **str** | UUID v4 used to identify the Snapshot | [optional] [readonly] 

## Example

```python
from openapi_client.models.snapshot_properties import SnapshotProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotProperties from a JSON string
snapshot_properties_instance = SnapshotProperties.from_json(json)
# print the JSON string representation of the object
print(SnapshotProperties.to_json())

# convert the object into a dict
snapshot_properties_dict = snapshot_properties_instance.to_dict()
# create an instance of SnapshotProperties from a dict
snapshot_properties_from_dict = SnapshotProperties.from_dict(snapshot_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


