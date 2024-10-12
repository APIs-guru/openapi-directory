# LogFlowLogWithProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | Additional key/value pair parameters.  | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_flow_log_with_properties import LogFlowLogWithProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowLogWithProperties from a JSON string
log_flow_log_with_properties_instance = LogFlowLogWithProperties.from_json(json)
# print the JSON string representation of the object
print(LogFlowLogWithProperties.to_json())

# convert the object into a dict
log_flow_log_with_properties_dict = log_flow_log_with_properties_instance.to_dict()
# create an instance of LogFlowLogWithProperties from a dict
log_flow_log_with_properties_from_dict = LogFlowLogWithProperties.from_dict(log_flow_log_with_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


