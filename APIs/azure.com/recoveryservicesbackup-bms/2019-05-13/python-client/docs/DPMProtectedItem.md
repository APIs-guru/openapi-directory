# DPMProtectedItem

Additional information on Backup engine specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_engine_name** | **str** | Backup Management server protecting this backup item | [optional] 
**extended_info** | [**DPMProtectedItemExtendedInfo**](DPMProtectedItemExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | Friendly name of the managed item | [optional] 
**protection_state** | **str** | Protection state of the backup engine | [optional] 

## Example

```python
from openapi_client.models.dpm_protected_item import DPMProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of DPMProtectedItem from a JSON string
dpm_protected_item_instance = DPMProtectedItem.from_json(json)
# print the JSON string representation of the object
print(DPMProtectedItem.to_json())

# convert the object into a dict
dpm_protected_item_dict = dpm_protected_item_instance.to_dict()
# create an instance of DPMProtectedItem from a dict
dpm_protected_item_from_dict = DPMProtectedItem.from_dict(dpm_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


