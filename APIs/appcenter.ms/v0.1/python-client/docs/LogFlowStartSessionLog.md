# LogFlowStartSessionLog

Required explicit begin session log (a marker event for analytics service).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** | Session ID.  | 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_flow_start_session_log import LogFlowStartSessionLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowStartSessionLog from a JSON string
log_flow_start_session_log_instance = LogFlowStartSessionLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowStartSessionLog.to_json())

# convert the object into a dict
log_flow_start_session_log_dict = log_flow_start_session_log_instance.to_dict()
# create an instance of LogFlowStartSessionLog from a dict
log_flow_start_session_log_from_dict = LogFlowStartSessionLog.from_dict(log_flow_start_session_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


