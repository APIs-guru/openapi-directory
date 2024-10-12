# LogContainerLogsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_container_logs_inner import LogContainerLogsInner

# TODO update the JSON string below
json = "{}"
# create an instance of LogContainerLogsInner from a JSON string
log_container_logs_inner_instance = LogContainerLogsInner.from_json(json)
# print the JSON string representation of the object
print(LogContainerLogsInner.to_json())

# convert the object into a dict
log_container_logs_inner_dict = log_container_logs_inner_instance.to_dict()
# create an instance of LogContainerLogsInner from a dict
log_container_logs_inner_from_dict = LogContainerLogsInner.from_dict(log_container_logs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


