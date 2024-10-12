# ScanRunErrorTrace

Output only. Defines an error trace message for a ScanRun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. Indicates the error reason code. | [optional] 
**most_common_http_error_code** | **int** | Output only. If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most common HTTP error code, if such is available. For example, if this code is 404, the scan has encountered too many NOT_FOUND responses. | [optional] 
**scan_config_error** | [**ScanConfigError**](ScanConfigError.md) |  | [optional] 

## Example

```python
from openapi_client.models.scan_run_error_trace import ScanRunErrorTrace

# TODO update the JSON string below
json = "{}"
# create an instance of ScanRunErrorTrace from a JSON string
scan_run_error_trace_instance = ScanRunErrorTrace.from_json(json)
# print the JSON string representation of the object
print(ScanRunErrorTrace.to_json())

# convert the object into a dict
scan_run_error_trace_dict = scan_run_error_trace_instance.to_dict()
# create an instance of ScanRunErrorTrace from a dict
scan_run_error_trace_from_dict = ScanRunErrorTrace.from_dict(scan_run_error_trace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


