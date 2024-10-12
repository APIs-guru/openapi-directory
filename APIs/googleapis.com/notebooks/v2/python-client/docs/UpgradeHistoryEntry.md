# UpgradeHistoryEntry

The entry of VM image upgrade history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Optional. Action. Rolloback or Upgrade. | [optional] 
**container_image** | **str** | Optional. The container image before this instance upgrade. | [optional] 
**create_time** | **str** | Immutable. The time that this instance upgrade history entry is created. | [optional] 
**framework** | **str** | Optional. The framework of this notebook instance. | [optional] 
**snapshot** | **str** | Optional. The snapshot of the boot disk of this notebook instance before upgrade. | [optional] 
**state** | **str** | Output only. The state of this instance upgrade history entry. | [optional] [readonly] 
**target_version** | **str** | Optional. Target VM Version, like m63. | [optional] 
**version** | **str** | Optional. The version of the notebook instance before this upgrade. | [optional] 
**vm_image** | **str** | Optional. The VM image before this instance upgrade. | [optional] 

## Example

```python
from openapi_client.models.upgrade_history_entry import UpgradeHistoryEntry

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeHistoryEntry from a JSON string
upgrade_history_entry_instance = UpgradeHistoryEntry.from_json(json)
# print the JSON string representation of the object
print(UpgradeHistoryEntry.to_json())

# convert the object into a dict
upgrade_history_entry_dict = upgrade_history_entry_instance.to_dict()
# create an instance of UpgradeHistoryEntry from a dict
upgrade_history_entry_from_dict = UpgradeHistoryEntry.from_dict(upgrade_history_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


