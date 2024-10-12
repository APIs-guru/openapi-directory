# ScheduledSourceShareSynchronizationSettingProperties

A Scheduled source synchronization setting data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence_interval** | **str** | Recurrence Interval | [optional] 
**synchronization_time** | **datetime** | Synchronization time | [optional] 

## Example

```python
from openapi_client.models.scheduled_source_share_synchronization_setting_properties import ScheduledSourceShareSynchronizationSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledSourceShareSynchronizationSettingProperties from a JSON string
scheduled_source_share_synchronization_setting_properties_instance = ScheduledSourceShareSynchronizationSettingProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduledSourceShareSynchronizationSettingProperties.to_json())

# convert the object into a dict
scheduled_source_share_synchronization_setting_properties_dict = scheduled_source_share_synchronization_setting_properties_instance.to_dict()
# create an instance of ScheduledSourceShareSynchronizationSettingProperties from a dict
scheduled_source_share_synchronization_setting_properties_from_dict = ScheduledSourceShareSynchronizationSettingProperties.from_dict(scheduled_source_share_synchronization_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


