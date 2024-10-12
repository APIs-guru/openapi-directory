# LogFlowGenericLog

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
from openapi_client.models.log_flow_generic_log import LogFlowGenericLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowGenericLog from a JSON string
log_flow_generic_log_instance = LogFlowGenericLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowGenericLog.to_json())

# convert the object into a dict
log_flow_generic_log_dict = log_flow_generic_log_instance.to_dict()
# create an instance of LogFlowGenericLog from a dict
log_flow_generic_log_from_dict = LogFlowGenericLog.from_dict(log_flow_generic_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


