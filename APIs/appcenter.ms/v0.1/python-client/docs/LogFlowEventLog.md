# LogFlowEventLog

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
from openapi_client.models.log_flow_event_log import LogFlowEventLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowEventLog from a JSON string
log_flow_event_log_instance = LogFlowEventLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowEventLog.to_json())

# convert the object into a dict
log_flow_event_log_dict = log_flow_event_log_instance.to_dict()
# create an instance of LogFlowEventLog from a dict
log_flow_event_log_from_dict = LogFlowEventLog.from_dict(log_flow_event_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


