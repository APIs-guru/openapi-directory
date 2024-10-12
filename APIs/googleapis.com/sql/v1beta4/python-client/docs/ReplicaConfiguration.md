# ReplicaConfiguration

Read-replica configuration for connecting to the primary instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cascadable_replica** | **bool** | Optional. Specifies if a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross region replica that supports replica(s) under it. | [optional] 
**failover_target** | **bool** | Specifies if the replica is the failover target. If the field is set to &#x60;true&#x60; the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#replicaConfiguration&#x60;. | [optional] 
**mysql_replica_configuration** | [**MySqlReplicaConfiguration**](MySqlReplicaConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.replica_configuration import ReplicaConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaConfiguration from a JSON string
replica_configuration_instance = ReplicaConfiguration.from_json(json)
# print the JSON string representation of the object
print(ReplicaConfiguration.to_json())

# convert the object into a dict
replica_configuration_dict = replica_configuration_instance.to_dict()
# create an instance of ReplicaConfiguration from a dict
replica_configuration_from_dict = ReplicaConfiguration.from_dict(replica_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


