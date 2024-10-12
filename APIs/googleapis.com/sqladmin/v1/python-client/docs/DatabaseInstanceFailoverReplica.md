# DatabaseInstanceFailoverReplica

The name and status of the failover replica.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true. | [optional] 
**name** | **str** | The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn&#39;t include the project ID. | [optional] 

## Example

```python
from openapi_client.models.database_instance_failover_replica import DatabaseInstanceFailoverReplica

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstanceFailoverReplica from a JSON string
database_instance_failover_replica_instance = DatabaseInstanceFailoverReplica.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstanceFailoverReplica.to_json())

# convert the object into a dict
database_instance_failover_replica_dict = database_instance_failover_replica_instance.to_dict()
# create an instance of DatabaseInstanceFailoverReplica from a dict
database_instance_failover_replica_from_dict = DatabaseInstanceFailoverReplica.from_dict(database_instance_failover_replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


