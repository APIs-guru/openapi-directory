# ApplicationUpgradeStartedEvent

Application Upgrade Started event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** | Application type name. | 
**application_type_version** | **str** | Target Application type version. | 
**current_application_type_version** | **str** | Current Application type version. | 
**failure_action** | **str** | Action if failed. | 
**rolling_upgrade_mode** | **str** | Mode of upgrade. | 
**upgrade_type** | **str** | Type of upgrade. | 

## Example

```python
from openapi_client.models.application_upgrade_started_event import ApplicationUpgradeStartedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeStartedEvent from a JSON string
application_upgrade_started_event_instance = ApplicationUpgradeStartedEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeStartedEvent.to_json())

# convert the object into a dict
application_upgrade_started_event_dict = application_upgrade_started_event_instance.to_dict()
# create an instance of ApplicationUpgradeStartedEvent from a dict
application_upgrade_started_event_from_dict = ApplicationUpgradeStartedEvent.from_dict(application_upgrade_started_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


