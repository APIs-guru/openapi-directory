# GenericProtectedItem

Base class for backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_name** | **str** | Name of this backup item&#39;s fabric. | [optional] 
**friendly_name** | **str** | Friendly name of the container. | [optional] 
**policy_state** | **str** | Indicates consistency of policy object and policy applied to this backup item. | [optional] 
**protected_item_id** | **int** | Data Plane Service ID of the protected item. | [optional] 
**protection_state** | **str** | Backup state of this backup item. | [optional] 
**source_associations** | **Dict[str, str]** | Loosely coupled (type, value) associations (example - parent of a protected item) | [optional] 

## Example

```python
from openapi_client.models.generic_protected_item import GenericProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of GenericProtectedItem from a JSON string
generic_protected_item_instance = GenericProtectedItem.from_json(json)
# print the JSON string representation of the object
print(GenericProtectedItem.to_json())

# convert the object into a dict
generic_protected_item_dict = generic_protected_item_instance.to_dict()
# create an instance of GenericProtectedItem from a dict
generic_protected_item_from_dict = GenericProtectedItem.from_dict(generic_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


