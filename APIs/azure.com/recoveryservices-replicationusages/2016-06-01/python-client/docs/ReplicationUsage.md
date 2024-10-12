# ReplicationUsage

Replication usages of a vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs_summary** | [**JobsSummary**](JobsSummary.md) |  | [optional] 
**monitoring_summary** | [**MonitoringSummary**](MonitoringSummary.md) |  | [optional] 
**protected_item_count** | **int** | Number of replication protected items for this vault. | [optional] 
**recovery_plan_count** | **int** | Number of replication recovery plans for this vault. | [optional] 
**recovery_services_provider_auth_type** | **int** | The authentication type of recovery service providers in the vault. | [optional] 
**registered_servers_count** | **int** | Number of servers registered to this vault. | [optional] 

## Example

```python
from openapi_client.models.replication_usage import ReplicationUsage

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationUsage from a JSON string
replication_usage_instance = ReplicationUsage.from_json(json)
# print the JSON string representation of the object
print(ReplicationUsage.to_json())

# convert the object into a dict
replication_usage_dict = replication_usage_instance.to_dict()
# create an instance of ReplicationUsage from a dict
replication_usage_from_dict = ReplicationUsage.from_dict(replication_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


