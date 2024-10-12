# LogFlowCustomPropertyLog

Set or remove custom properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **List[object]** | Custom property changes. | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_flow_custom_property_log import LogFlowCustomPropertyLog

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowCustomPropertyLog from a JSON string
log_flow_custom_property_log_instance = LogFlowCustomPropertyLog.from_json(json)
# print the JSON string representation of the object
print(LogFlowCustomPropertyLog.to_json())

# convert the object into a dict
log_flow_custom_property_log_dict = log_flow_custom_property_log_instance.to_dict()
# create an instance of LogFlowCustomPropertyLog from a dict
log_flow_custom_property_log_from_dict = LogFlowCustomPropertyLog.from_dict(log_flow_custom_property_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


