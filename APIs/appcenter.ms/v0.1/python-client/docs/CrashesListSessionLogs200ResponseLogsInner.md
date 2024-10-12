# CrashesListSessionLogs200ResponseLogsInner

Generic log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of the authenticated user.  | [optional] 
**auth_provider** | **str** | Auth service provider.  | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**event_id** | **str** | Event ID.  | [optional] 
**event_name** | **str** | Event name.  | [optional] 
**install_id** | **str** | Install ID.  | 
**message_id** | **str** | Message ID.  | [optional] 
**properties** | **Dict[str, str]** | event specific properties.  | [optional] 
**session_id** | **str** | Session ID.  | [optional] 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.crashes_list_session_logs200_response_logs_inner import CrashesListSessionLogs200ResponseLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CrashesListSessionLogs200ResponseLogsInner from a JSON string
crashes_list_session_logs200_response_logs_inner_instance = CrashesListSessionLogs200ResponseLogsInner.from_json(json)
# print the JSON string representation of the object
print(CrashesListSessionLogs200ResponseLogsInner.to_json())

# convert the object into a dict
crashes_list_session_logs200_response_logs_inner_dict = crashes_list_session_logs200_response_logs_inner_instance.to_dict()
# create an instance of CrashesListSessionLogs200ResponseLogsInner from a dict
crashes_list_session_logs200_response_logs_inner_from_dict = CrashesListSessionLogs200ResponseLogsInner.from_dict(crashes_list_session_logs200_response_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


