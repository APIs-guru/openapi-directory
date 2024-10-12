# ApplicationUpgradeRollbackCompletedEvent

Application Upgrade Rollback Completed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** | Application type name. | 
**application_type_version** | **str** | Application type version. | 
**failure_reason** | **str** | Describes reason of failure. | 
**overall_upgrade_elapsed_time_in_ms** | **float** | Overall upgrade time in milli-seconds. | 

## Example

```python
from openapi_client.models.application_upgrade_rollback_completed_event import ApplicationUpgradeRollbackCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeRollbackCompletedEvent from a JSON string
application_upgrade_rollback_completed_event_instance = ApplicationUpgradeRollbackCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeRollbackCompletedEvent.to_json())

# convert the object into a dict
application_upgrade_rollback_completed_event_dict = application_upgrade_rollback_completed_event_instance.to_dict()
# create an instance of ApplicationUpgradeRollbackCompletedEvent from a dict
application_upgrade_rollback_completed_event_from_dict = ApplicationUpgradeRollbackCompletedEvent.from_dict(application_upgrade_rollback_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


