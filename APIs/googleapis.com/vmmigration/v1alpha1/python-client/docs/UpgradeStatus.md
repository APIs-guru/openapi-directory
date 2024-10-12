# UpgradeStatus

UpgradeStatus contains information about upgradeAppliance operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**previous_version** | **str** | The version from which we upgraded. | [optional] 
**start_time** | **str** | The time the operation was started. | [optional] 
**state** | **str** | The state of the upgradeAppliance operation. | [optional] 
**version** | **str** | The version to upgrade to. | [optional] 

## Example

```python
from openapi_client.models.upgrade_status import UpgradeStatus

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeStatus from a JSON string
upgrade_status_instance = UpgradeStatus.from_json(json)
# print the JSON string representation of the object
print(UpgradeStatus.to_json())

# convert the object into a dict
upgrade_status_dict = upgrade_status_instance.to_dict()
# create an instance of UpgradeStatus from a dict
upgrade_status_from_dict = UpgradeStatus.from_dict(upgrade_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


