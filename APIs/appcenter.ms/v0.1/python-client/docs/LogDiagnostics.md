# LogDiagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_diagnostics import LogDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of LogDiagnostics from a JSON string
log_diagnostics_instance = LogDiagnostics.from_json(json)
# print the JSON string representation of the object
print(LogDiagnostics.to_json())

# convert the object into a dict
log_diagnostics_dict = log_diagnostics_instance.to_dict()
# create an instance of LogDiagnostics from a dict
log_diagnostics_from_dict = LogDiagnostics.from_dict(log_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


