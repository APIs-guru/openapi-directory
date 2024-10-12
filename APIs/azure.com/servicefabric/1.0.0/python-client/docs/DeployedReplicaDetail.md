# DeployedReplicaDetail

The detail of the deployed replica

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_replicator_operation** | **int** |  | [optional] 
**current_service_operation** | **int** |  | [optional] 
**current_service_operation_start_time_utc** | **str** |  | [optional] 
**instance_id** | **str** |  | [optional] 
**partition_id** | **str** |  | [optional] 
**read_status** | **int** |  | [optional] 
**replica_id** | **str** |  | [optional] 
**replicator_status** | [**DeployedReplicaDetailReplicatorStatus**](DeployedReplicaDetailReplicatorStatus.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 
**service_name** | **str** |  | [optional] 
**write_status** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_replica_detail import DeployedReplicaDetail

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedReplicaDetail from a JSON string
deployed_replica_detail_instance = DeployedReplicaDetail.from_json(json)
# print the JSON string representation of the object
print(DeployedReplicaDetail.to_json())

# convert the object into a dict
deployed_replica_detail_dict = deployed_replica_detail_instance.to_dict()
# create an instance of DeployedReplicaDetail from a dict
deployed_replica_detail_from_dict = DeployedReplicaDetail.from_dict(deployed_replica_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


