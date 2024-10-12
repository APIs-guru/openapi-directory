# ProtectedItemQueryObject

Filters the list of backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | The backup management type associated with an item. | [optional] 
**container_name** | **str** | The name of the container. | [optional] 
**item_type** | **str** | The workload type associated with an item. | [optional] 
**policy_name** | **str** | The name of the backup policy associated with the item. | [optional] 

## Example

```python
from openapi_client.models.protected_item_query_object import ProtectedItemQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedItemQueryObject from a JSON string
protected_item_query_object_instance = ProtectedItemQueryObject.from_json(json)
# print the JSON string representation of the object
print(ProtectedItemQueryObject.to_json())

# convert the object into a dict
protected_item_query_object_dict = protected_item_query_object_instance.to_dict()
# create an instance of ProtectedItemQueryObject from a dict
protected_item_query_object_from_dict = ProtectedItemQueryObject.from_dict(protected_item_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


