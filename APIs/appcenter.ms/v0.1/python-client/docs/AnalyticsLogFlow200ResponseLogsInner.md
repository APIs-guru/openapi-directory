# AnalyticsLogFlow200ResponseLogsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.analytics_log_flow200_response_logs_inner import AnalyticsLogFlow200ResponseLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsLogFlow200ResponseLogsInner from a JSON string
analytics_log_flow200_response_logs_inner_instance = AnalyticsLogFlow200ResponseLogsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsLogFlow200ResponseLogsInner.to_json())

# convert the object into a dict
analytics_log_flow200_response_logs_inner_dict = analytics_log_flow200_response_logs_inner_instance.to_dict()
# create an instance of AnalyticsLogFlow200ResponseLogsInner from a dict
analytics_log_flow200_response_logs_inner_from_dict = AnalyticsLogFlow200ResponseLogsInner.from_dict(analytics_log_flow200_response_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


