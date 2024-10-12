# LogFlowStartServiceLog

Describe a AppCenter.Start API call from the SDK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | **List[str]** | The list of services of the AppCenter Start API call. | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_flow_start_service_log import LogFlowStartServiceLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowStartServiceLog from a JSON string
log_flow_start_service_log_instance = LogFlowStartServiceLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowStartServiceLog.to_json())

# convert the object into a dict
log_flow_start_service_log_dict = log_flow_start_service_log_instance.to_dict()
# create an instance of LogFlowStartServiceLog from a dict
log_flow_start_service_log_from_dict = LogFlowStartServiceLog.from_dict(log_flow_start_service_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


