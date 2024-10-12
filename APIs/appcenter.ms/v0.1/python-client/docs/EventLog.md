# EventLog

Event log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this event.  | 
**name** | **str** | Name of the event.  | 
**session_id** | **str** | Session ID.  | 
**properties** | **Dict[str, str]** | Additional key/value pair parameters.  | [optional] 
**device** | **object** | Device characteristics. | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.event_log import EventLog

# TODO update the JSON string below
json = "{}"
# create an instance of EventLog from a JSON string
event_log_instance = EventLog.from_json(json)
# print the JSON string representation of the object
print(EventLog.to_json())

# convert the object into a dict
event_log_dict = event_log_instance.to_dict()
# create an instance of EventLog from a dict
event_log_from_dict = EventLog.from_dict(event_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


