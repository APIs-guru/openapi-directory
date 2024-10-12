# HandledErrorLog

Required explicit begin session log (a marker event for analytics service).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_id** | **str** | Error ID.  | 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.handled_error_log import HandledErrorLog

# TODO update the JSON string below
json = "{}"
# create an instance of HandledErrorLog from a JSON string
handled_error_log_instance = HandledErrorLog.from_json(json)
# print the JSON string representation of the object
print(HandledErrorLog.to_json())

# convert the object into a dict
handled_error_log_dict = handled_error_log_instance.to_dict()
# create an instance of HandledErrorLog from a dict
handled_error_log_from_dict = HandledErrorLog.from_dict(handled_error_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


