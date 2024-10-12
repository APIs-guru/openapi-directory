# SnapshotsList

List of Snapshots

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Snapshot]**](Snapshot.md) | A list of Snapshots | [optional] 

## Example

```python
from openapi_client.models.snapshots_list import SnapshotsList

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotsList from a JSON string
snapshots_list_instance = SnapshotsList.from_json(json)
# print the JSON string representation of the object
print(SnapshotsList.to_json())

# convert the object into a dict
snapshots_list_dict = snapshots_list_instance.to_dict()
# create an instance of SnapshotsList from a dict
snapshots_list_from_dict = SnapshotsList.from_dict(snapshots_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


