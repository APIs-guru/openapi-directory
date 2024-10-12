# LogFlowErrorLog

Error log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_launch_toffset** | **int** | Corresponds to the number of milliseconds elapsed between the time the error occurred and the app was launched.  | [optional] 
**id** | **str** | Error identifier. | 
**session_id** | **str** | Session ID.  | 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_flow_error_log import LogFlowErrorLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowErrorLog from a JSON string
log_flow_error_log_instance = LogFlowErrorLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowErrorLog.to_json())

# convert the object into a dict
log_flow_error_log_dict = log_flow_error_log_instance.to_dict()
# create an instance of LogFlowErrorLog from a dict
log_flow_error_log_from_dict = LogFlowErrorLog.from_dict(log_flow_error_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


