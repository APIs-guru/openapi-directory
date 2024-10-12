# ScheduledSynchronizationSettingProperties

A Scheduled synchronization setting data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Time at which the synchronization setting was created. | [optional] [readonly] 
**provisioning_state** | **str** | Gets or sets the provisioning state | [optional] [readonly] 
**recurrence_interval** | **str** | Recurrence Interval | 
**synchronization_time** | **datetime** | Synchronization time | 
**user_name** | **str** | Name of the user who created the synchronization setting. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scheduled_synchronization_setting_properties import ScheduledSynchronizationSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledSynchronizationSettingProperties from a JSON string
scheduled_synchronization_setting_properties_instance = ScheduledSynchronizationSettingProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduledSynchronizationSettingProperties.to_json())

# convert the object into a dict
scheduled_synchronization_setting_properties_dict = scheduled_synchronization_setting_properties_instance.to_dict()
# create an instance of ScheduledSynchronizationSettingProperties from a dict
scheduled_synchronization_setting_properties_from_dict = ScheduledSynchronizationSettingProperties.from_dict(scheduled_synchronization_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


