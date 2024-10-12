# SyncStatus

The status of a workspace after synchronization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merge_conflict** | **bool** | Synchornization operation detected a merge conflict. | [optional] 
**sync_error** | **bool** | An error occurred during the synchronization operation. | [optional] 

## Example

```python
from openapi_client.models.sync_status import SyncStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SyncStatus from a JSON string
sync_status_instance = SyncStatus.from_json(json)
# print the JSON string representation of the object
print(SyncStatus.to_json())

# convert the object into a dict
sync_status_dict = sync_status_instance.to_dict()
# create an instance of SyncStatus from a dict
sync_status_from_dict = SyncStatus.from_dict(sync_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


