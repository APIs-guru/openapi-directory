# EventSetting

Event Setting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | Default frequency of event | [optional] 
**event_type** | **str** | Event Name | 
**value** | **str** | Frequency of event | 

## Example

```python
from openapi_client.models.event_setting import EventSetting

# TODO update the JSON string below
json = "{}"
# create an instance of EventSetting from a JSON string
event_setting_instance = EventSetting.from_json(json)
# print the JSON string representation of the object
print(EventSetting.to_json())

# convert the object into a dict
event_setting_dict = event_setting_instance.to_dict()
# create an instance of EventSetting from a dict
event_setting_from_dict = EventSetting.from_dict(event_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


