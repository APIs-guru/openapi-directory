# ScheduledSynchronizationSetting

A type of synchronization setting based on schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScheduledSynchronizationSettingProperties**](ScheduledSynchronizationSettingProperties.md) |  | 
**kind** | **str** | Kind of synchronization | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.scheduled_synchronization_setting import ScheduledSynchronizationSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledSynchronizationSetting from a JSON string
scheduled_synchronization_setting_instance = ScheduledSynchronizationSetting.from_json(json)
# print the JSON string representation of the object
print(ScheduledSynchronizationSetting.to_json())

# convert the object into a dict
scheduled_synchronization_setting_dict = scheduled_synchronization_setting_instance.to_dict()
# create an instance of ScheduledSynchronizationSetting from a dict
scheduled_synchronization_setting_from_dict = ScheduledSynchronizationSetting.from_dict(scheduled_synchronization_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


