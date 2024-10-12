# Snapshot

Snapshot object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Azure Cognitive Service Face account id of the subscriber who created the snapshot by Snapshot - Take. | 
**apply_scope** | **List[str]** | Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it. | 
**created_time** | **datetime** | A combined UTC date and time string that describes the created time of the snapshot. E.g. 2018-12-25T11:41:02.2331413Z. | 
**id** | **str** | Snapshot id. | 
**last_update_time** | **datetime** | A combined UTC date and time string that describes the last time when the snapshot was created or updated by Snapshot - Update. E.g. 2018-12-25T11:51:27.8705696Z. | 
**type** | **str** | Type of the source object in the snapshot, specified by the subscriber who created the snapshot when calling Snapshot - Take. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported. | 
**user_data** | **str** | User specified data about the snapshot for any purpose. Length should not exceed 16KB. | [optional] 

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


