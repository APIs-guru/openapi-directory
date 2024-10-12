# ScheduledTrigger

A type of trigger based on schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScheduledTriggerProperties**](ScheduledTriggerProperties.md) |  | 
**kind** | **str** | Kind of synchronization | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.scheduled_trigger import ScheduledTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledTrigger from a JSON string
scheduled_trigger_instance = ScheduledTrigger.from_json(json)
# print the JSON string representation of the object
print(ScheduledTrigger.to_json())

# convert the object into a dict
scheduled_trigger_dict = scheduled_trigger_instance.to_dict()
# create an instance of ScheduledTrigger from a dict
scheduled_trigger_from_dict = ScheduledTrigger.from_dict(scheduled_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


