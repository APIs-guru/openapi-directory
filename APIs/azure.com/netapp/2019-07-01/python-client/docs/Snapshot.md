# Snapshot

Snapshot of a Volume

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**properties** | [**SnapshotProperties**](SnapshotProperties.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.snapshot import Snapshot

# TODO update the JSON string below
json = "{}"
# create an instance of Snapshot from a JSON string
snapshot_instance = Snapshot.from_json(json)
# print the JSON string representation of the object
print(Snapshot.to_json())

# convert the object into a dict
snapshot_dict = snapshot_instance.to_dict()
# create an instance of Snapshot from a dict
snapshot_from_dict = Snapshot.from_dict(snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


