# ScanRunWarningTrace

Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Indicates the warning code. | [optional] 

## Example

```python
from openapi_client.models.scan_run_warning_trace import ScanRunWarningTrace

# TODO update the JSON string below
json = "{}"
# create an instance of ScanRunWarningTrace from a JSON string
scan_run_warning_trace_instance = ScanRunWarningTrace.from_json(json)
# print the JSON string representation of the object
print(ScanRunWarningTrace.to_json())

# convert the object into a dict
scan_run_warning_trace_dict = scan_run_warning_trace_instance.to_dict()
# create an instance of ScanRunWarningTrace from a dict
scan_run_warning_trace_from_dict = ScanRunWarningTrace.from_dict(scan_run_warning_trace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


