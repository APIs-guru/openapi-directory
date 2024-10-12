# StartSessionLog

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
from openapi_client.models.start_session_log import StartSessionLog

# TODO update the JSON string below
json = "{}"
# create an instance of StartSessionLog from a JSON string
start_session_log_instance = StartSessionLog.from_json(json)
# print the JSON string representation of the object
print(StartSessionLog.to_json())

# convert the object into a dict
start_session_log_dict = start_session_log_instance.to_dict()
# create an instance of StartSessionLog from a dict
start_session_log_from_dict = StartSessionLog.from_dict(start_session_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


