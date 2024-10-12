# UpgradeDetails

Details for upgrading vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_utc** | **datetime** | UTC time at which the upgrade operation has ended. | [optional] [readonly] 
**last_updated_time_utc** | **datetime** | UTC time at which the upgrade operation status was last updated. | [optional] [readonly] 
**message** | **str** | Message to the user containing information about the upgrade operation. | [optional] [readonly] 
**operation_id** | **str** | ID of the vault upgrade operation. | [optional] [readonly] 
**previous_resource_id** | **str** | Resource ID of the vault before the upgrade. | [optional] [readonly] 
**start_time_utc** | **datetime** | UTC time at which the upgrade operation has started. | [optional] [readonly] 
**status** | **str** | Status of the vault upgrade operation. | [optional] [readonly] 
**trigger_type** | **str** | The way the vault upgrade was triggered. | [optional] [readonly] 
**upgraded_resource_id** | **str** | Resource ID of the upgraded vault. | [optional] [readonly] 

## Example

```python
from openapi_client.models.upgrade_details import UpgradeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDetails from a JSON string
upgrade_details_instance = UpgradeDetails.from_json(json)
# print the JSON string representation of the object
print(UpgradeDetails.to_json())

# convert the object into a dict
upgrade_details_dict = upgrade_details_instance.to_dict()
# create an instance of UpgradeDetails from a dict
upgrade_details_from_dict = UpgradeDetails.from_dict(upgrade_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


