# SnapshotCollection

Collection of snapshots which can be used to revert an app to a previous time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SnapshotCollectionValueInner]**](SnapshotCollectionValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.snapshot_collection import SnapshotCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SnapshotCollection from a JSON string
snapshot_collection_instance = SnapshotCollection.from_json(json)
# print the JSON string representation of the object
print(SnapshotCollection.to_json())

# convert the object into a dict
snapshot_collection_dict = snapshot_collection_instance.to_dict()
# create an instance of SnapshotCollection from a dict
snapshot_collection_from_dict = SnapshotCollection.from_dict(snapshot_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


