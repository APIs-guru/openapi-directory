# DeployedReplica

The replica of the deployed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**code_package_name** | **str** |  | [optional] 
**instance_id** | **str** |  | [optional] 
**partition_id** | **str** |  | [optional] 
**replica_id** | **str** |  | [optional] 
**replica_role** | [**ReplicaRole**](ReplicaRole.md) |  | [optional] 
**replica_status** | [**ReplicaStatus**](ReplicaStatus.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 
**service_manifest_name** | **str** |  | [optional] 
**service_manifest_version** | **str** |  | [optional] 
**service_name** | **str** |  | [optional] 
**service_type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.deployed_replica import DeployedReplica

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedReplica from a JSON string
deployed_replica_instance = DeployedReplica.from_json(json)
# print the JSON string representation of the object
print(DeployedReplica.to_json())

# convert the object into a dict
deployed_replica_dict = deployed_replica_instance.to_dict()
# create an instance of DeployedReplica from a dict
deployed_replica_from_dict = DeployedReplica.from_dict(deployed_replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


