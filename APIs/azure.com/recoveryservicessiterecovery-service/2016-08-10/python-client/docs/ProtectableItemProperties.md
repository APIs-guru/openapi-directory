# ProtectableItemProperties

Replication protected item custom data details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_details** | [**ConfigurationSettings**](ConfigurationSettings.md) |  | [optional] 
**friendly_name** | **str** | The name. | [optional] 
**protection_readiness_errors** | **List[str]** | The Current protection readiness errors. | [optional] 
**protection_status** | **str** | The protection status. | [optional] 
**recovery_services_provider_id** | **str** | The recovery provider ARM Id. | [optional] 
**replication_protected_item_id** | **str** | The ARM resource of protected items. | [optional] 
**supported_replication_providers** | **List[str]** | The list of replication providers supported for the protectable item. | [optional] 

## Example

```python
from openapi_client.models.protectable_item_properties import ProtectableItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableItemProperties from a JSON string
protectable_item_properties_instance = ProtectableItemProperties.from_json(json)
# print the JSON string representation of the object
print(ProtectableItemProperties.to_json())

# convert the object into a dict
protectable_item_properties_dict = protectable_item_properties_instance.to_dict()
# create an instance of ProtectableItemProperties from a dict
protectable_item_properties_from_dict = ProtectableItemProperties.from_dict(protectable_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


