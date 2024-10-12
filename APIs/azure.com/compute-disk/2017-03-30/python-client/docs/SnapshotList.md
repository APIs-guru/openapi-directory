# SnapshotList

The List Snapshots operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of snapshots. Call ListNext() with this to fetch the next page of snapshots. | [optional] 
**value** | [**List[Snapshot]**](Snapshot.md) | A list of snapshots. | 

## Example

```python
from openapi_client.models.snapshot_list import SnapshotList

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotList from a JSON string
snapshot_list_instance = SnapshotList.from_json(json)
# print the JSON string representation of the object
print(SnapshotList.to_json())

# convert the object into a dict
snapshot_list_dict = snapshot_list_instance.to_dict()
# create an instance of SnapshotList from a dict
snapshot_list_from_dict = SnapshotList.from_dict(snapshot_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


