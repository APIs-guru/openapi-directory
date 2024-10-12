# AnalyticsGenericLogFlow200ResponseLogsInner

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
from openapi_client.models.analytics_generic_log_flow200_response_logs_inner import AnalyticsGenericLogFlow200ResponseLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsGenericLogFlow200ResponseLogsInner from a JSON string
analytics_generic_log_flow200_response_logs_inner_instance = AnalyticsGenericLogFlow200ResponseLogsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsGenericLogFlow200ResponseLogsInner.to_json())

# convert the object into a dict
analytics_generic_log_flow200_response_logs_inner_dict = analytics_generic_log_flow200_response_logs_inner_instance.to_dict()
# create an instance of AnalyticsGenericLogFlow200ResponseLogsInner from a dict
analytics_generic_log_flow200_response_logs_inner_from_dict = AnalyticsGenericLogFlow200ResponseLogsInner.from_dict(analytics_generic_log_flow200_response_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


