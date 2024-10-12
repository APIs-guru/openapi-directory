# ReplicationStatus

Replication status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Displays error message if the replication is in an error state | [optional] 
**healthy** | **bool** | Replication health check | [optional] 
**mirror_state** | **str** | The status of the replication | [optional] 
**relationship_status** | **str** | Status of the mirror relationship | [optional] 
**total_progress** | **str** | The progress of the replication | [optional] 

## Example

```python
from openapi_client.models.replication_status import ReplicationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationStatus from a JSON string
replication_status_instance = ReplicationStatus.from_json(json)
# print the JSON string representation of the object
print(ReplicationStatus.to_json())

# convert the object into a dict
replication_status_dict = replication_status_instance.to_dict()
# create an instance of ReplicationStatus from a dict
replication_status_from_dict = ReplicationStatus.from_dict(replication_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


