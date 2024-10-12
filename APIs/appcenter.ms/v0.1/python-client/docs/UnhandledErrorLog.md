# UnhandledErrorLog

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
from openapi_client.models.unhandled_error_log import UnhandledErrorLog

# TODO update the JSON string below
json = "{}"
# create an instance of UnhandledErrorLog from a JSON string
unhandled_error_log_instance = UnhandledErrorLog.from_json(json)
# print the JSON string representation of the object
print(UnhandledErrorLog.to_json())

# convert the object into a dict
unhandled_error_log_dict = unhandled_error_log_instance.to_dict()
# create an instance of UnhandledErrorLog from a dict
unhandled_error_log_from_dict = UnhandledErrorLog.from_dict(unhandled_error_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


