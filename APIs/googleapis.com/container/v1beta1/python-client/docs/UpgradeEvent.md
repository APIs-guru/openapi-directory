# UpgradeEvent

UpgradeEvent is a notification sent to customers by the cluster server when a resource is upgrading.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_version** | **str** | The current version before the upgrade. | [optional] 
**operation** | **str** | The operation associated with this upgrade. | [optional] 
**operation_start_time** | **str** | The time when the operation was started. | [optional] 
**resource** | **str** | Optional relative path to the resource. For example in node pool upgrades, the relative path of the node pool. | [optional] 
**resource_type** | **str** | The resource type that is upgrading. | [optional] 
**target_version** | **str** | The target version for the upgrade. | [optional] 

## Example

```python
from openapi_client.models.upgrade_event import UpgradeEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeEvent from a JSON string
upgrade_event_instance = UpgradeEvent.from_json(json)
# print the JSON string representation of the object
print(UpgradeEvent.to_json())

# convert the object into a dict
upgrade_event_dict = upgrade_event_instance.to_dict()
# create an instance of UpgradeEvent from a dict
upgrade_event_from_dict = UpgradeEvent.from_dict(upgrade_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


