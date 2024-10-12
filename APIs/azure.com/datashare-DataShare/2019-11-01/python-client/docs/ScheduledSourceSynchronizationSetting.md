# ScheduledSourceSynchronizationSetting

A type of synchronization setting based on schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScheduledSourceShareSynchronizationSettingProperties**](ScheduledSourceShareSynchronizationSettingProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.scheduled_source_synchronization_setting import ScheduledSourceSynchronizationSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledSourceSynchronizationSetting from a JSON string
scheduled_source_synchronization_setting_instance = ScheduledSourceSynchronizationSetting.from_json(json)
# print the JSON string representation of the object
print(ScheduledSourceSynchronizationSetting.to_json())

# convert the object into a dict
scheduled_source_synchronization_setting_dict = scheduled_source_synchronization_setting_instance.to_dict()
# create an instance of ScheduledSourceSynchronizationSetting from a dict
scheduled_source_synchronization_setting_from_dict = ScheduledSourceSynchronizationSetting.from_dict(scheduled_source_synchronization_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


