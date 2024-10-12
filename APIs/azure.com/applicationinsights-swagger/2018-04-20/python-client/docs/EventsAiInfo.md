# EventsAiInfo

AI related application info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | ID of the application | [optional] 
**app_name** | **str** | Name of the application | [optional] 
**i_key** | **str** | iKey of the app | [optional] 
**sdk_version** | **str** | SDK version of the application | [optional] 

## Example

```python
from openapi_client.models.events_ai_info import EventsAiInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsAiInfo from a JSON string
events_ai_info_instance = EventsAiInfo.from_json(json)
# print the JSON string representation of the object
print(EventsAiInfo.to_json())

# convert the object into a dict
events_ai_info_dict = events_ai_info_instance.to_dict()
# create an instance of EventsAiInfo from a dict
events_ai_info_from_dict = EventsAiInfo.from_dict(events_ai_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


