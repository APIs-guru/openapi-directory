# UpgradeAvailableEvent

UpgradeAvailableEvent is a notification sent to customers when a new available version is released.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_channel** | [**ReleaseChannel**](ReleaseChannel.md) |  | [optional] 
**resource** | **str** | Optional relative path to the resource. For example, the relative path of the node pool. | [optional] 
**resource_type** | **str** | The resource type of the release version. | [optional] 
**version** | **str** | The release version available for upgrade. | [optional] 

## Example

```python
from openapi_client.models.upgrade_available_event import UpgradeAvailableEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeAvailableEvent from a JSON string
upgrade_available_event_instance = UpgradeAvailableEvent.from_json(json)
# print the JSON string representation of the object
print(UpgradeAvailableEvent.to_json())

# convert the object into a dict
upgrade_available_event_dict = upgrade_available_event_instance.to_dict()
# create an instance of UpgradeAvailableEvent from a dict
upgrade_available_event_from_dict = UpgradeAvailableEvent.from_dict(upgrade_available_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


