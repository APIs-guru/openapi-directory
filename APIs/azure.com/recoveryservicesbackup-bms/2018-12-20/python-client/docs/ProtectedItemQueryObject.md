# ProtectedItemQueryObject

Filters to list backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_engine_name** | **str** | Backup Engine name | [optional] 
**backup_management_type** | **str** | Backup management type for the backed up item. | [optional] 
**backup_set_name** | **str** | Name of the backup set. | [optional] 
**container_name** | **str** | Name of the container. | [optional] 
**fabric_name** | **str** | Name of the fabric. | [optional] 
**friendly_name** | **str** | Friendly name of protected item | [optional] 
**health_state** | **str** | Health State for the backed up item. | [optional] 
**item_type** | **str** | Type of workload this item represents. | [optional] 
**policy_name** | **str** | Backup policy name associated with the backup item. | [optional] 

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


