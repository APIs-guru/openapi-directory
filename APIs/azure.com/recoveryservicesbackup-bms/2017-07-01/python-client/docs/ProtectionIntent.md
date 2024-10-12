# ProtectionIntent

Base class for backup ProtectionIntent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Type of backup management for the backed up item. | [optional] 
**item_id** | **str** | ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId | [optional] 
**policy_id** | **str** | ID of the backup policy with which this item is backed up. | [optional] 
**protection_intent_item_type** | **str** | backup protectionIntent type. | [optional] 
**protection_state** | **str** | Backup state of this backup item. | [optional] 
**source_resource_id** | **str** | ARM ID of the resource to be backed up. | [optional] 

## Example

```python
from openapi_client.models.protection_intent import ProtectionIntent

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionIntent from a JSON string
protection_intent_instance = ProtectionIntent.from_json(json)
# print the JSON string representation of the object
print(ProtectionIntent.to_json())

# convert the object into a dict
protection_intent_dict = protection_intent_instance.to_dict()
# create an instance of ProtectionIntent from a dict
protection_intent_from_dict = ProtectionIntent.from_dict(protection_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


