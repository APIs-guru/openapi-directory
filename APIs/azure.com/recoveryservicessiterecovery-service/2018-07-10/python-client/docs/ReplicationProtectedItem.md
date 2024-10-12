# ReplicationProtectedItem

Replication protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReplicationProtectedItemProperties**](ReplicationProtectedItemProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_protected_item import ReplicationProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProtectedItem from a JSON string
replication_protected_item_instance = ReplicationProtectedItem.from_json(json)
# print the JSON string representation of the object
print(ReplicationProtectedItem.to_json())

# convert the object into a dict
replication_protected_item_dict = replication_protected_item_instance.to_dict()
# create an instance of ReplicationProtectedItem from a dict
replication_protected_item_from_dict = ReplicationProtectedItem.from_dict(replication_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


