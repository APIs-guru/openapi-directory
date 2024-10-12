# ReplicationUsageList

Replication usages for vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReplicationUsage]**](ReplicationUsage.md) | The list of replication usages for the given vault. | [optional] 

## Example

```python
from openapi_client.models.replication_usage_list import ReplicationUsageList

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationUsageList from a JSON string
replication_usage_list_instance = ReplicationUsageList.from_json(json)
# print the JSON string representation of the object
print(ReplicationUsageList.to_json())

# convert the object into a dict
replication_usage_list_dict = replication_usage_list_instance.to_dict()
# create an instance of ReplicationUsageList from a dict
replication_usage_list_from_dict = ReplicationUsageList.from_dict(replication_usage_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


