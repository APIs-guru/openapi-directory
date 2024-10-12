# HanledErrorLogDiagnostics

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
from openapi_client.models.hanled_error_log_diagnostics import HanledErrorLogDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of HanledErrorLogDiagnostics from a JSON string
hanled_error_log_diagnostics_instance = HanledErrorLogDiagnostics.from_json(json)
# print the JSON string representation of the object
print(HanledErrorLogDiagnostics.to_json())

# convert the object into a dict
hanled_error_log_diagnostics_dict = hanled_error_log_diagnostics_instance.to_dict()
# create an instance of HanledErrorLogDiagnostics from a dict
hanled_error_log_diagnostics_from_dict = HanledErrorLogDiagnostics.from_dict(hanled_error_log_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


