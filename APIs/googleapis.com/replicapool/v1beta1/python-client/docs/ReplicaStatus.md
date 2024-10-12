# ReplicaStatus

The current status of a Replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | [Output Only] Human-readable details about the current state of the replica | [optional] 
**state** | **str** | [Output Only] The state of the Replica. | [optional] 
**template_version** | **str** | [Output Only] The template used to build the replica. | [optional] 
**vm_link** | **str** | [Output Only] Link to the virtual machine that this Replica represents. | [optional] 
**vm_start_time** | **str** | [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned. | [optional] 

## Example

```python
from openapi_client.models.replica_status import ReplicaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaStatus from a JSON string
replica_status_instance = ReplicaStatus.from_json(json)
# print the JSON string representation of the object
print(ReplicaStatus.to_json())

# convert the object into a dict
replica_status_dict = replica_status_instance.to_dict()
# create an instance of ReplicaStatus from a dict
replica_status_from_dict = ReplicaStatus.from_dict(replica_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


