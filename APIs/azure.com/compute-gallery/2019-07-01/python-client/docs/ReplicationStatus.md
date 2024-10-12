# ReplicationStatus

This is the replication status of the gallery Image Version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_state** | **str** | This is the aggregated replication status based on all the regional replication status flags. | [optional] [readonly] 
**summary** | [**List[RegionalReplicationStatus]**](RegionalReplicationStatus.md) | This is a summary of replication status for each region. | [optional] [readonly] 

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


