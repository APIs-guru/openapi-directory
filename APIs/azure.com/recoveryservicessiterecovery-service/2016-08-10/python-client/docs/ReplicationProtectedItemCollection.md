# ReplicationProtectedItemCollection

Replication protected item collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[ReplicationProtectedItem]**](ReplicationProtectedItem.md) | The Replication protected item details. | [optional] 

## Example

```python
from openapi_client.models.replication_protected_item_collection import ReplicationProtectedItemCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationProtectedItemCollection from a JSON string
replication_protected_item_collection_instance = ReplicationProtectedItemCollection.from_json(json)
# print the JSON string representation of the object
print(ReplicationProtectedItemCollection.to_json())

# convert the object into a dict
replication_protected_item_collection_dict = replication_protected_item_collection_instance.to_dict()
# create an instance of ReplicationProtectedItemCollection from a dict
replication_protected_item_collection_from_dict = ReplicationProtectedItemCollection.from_dict(replication_protected_item_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


