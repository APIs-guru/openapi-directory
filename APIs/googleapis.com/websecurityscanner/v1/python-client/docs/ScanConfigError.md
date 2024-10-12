# ScanConfigError

Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. Indicates the reason code for a configuration failure. | [optional] 
**field_name** | **str** | Output only. Indicates the full name of the ScanConfig field that triggers this error, for example \&quot;scan_config.max_qps\&quot;. This field is provided for troubleshooting purposes only and its actual value can change in the future. | [optional] 

## Example

```python
from openapi_client.models.scan_config_error import ScanConfigError

# TODO update the JSON string below
json = "{}"
# create an instance of ScanConfigError from a JSON string
scan_config_error_instance = ScanConfigError.from_json(json)
# print the JSON string representation of the object
print(ScanConfigError.to_json())

# convert the object into a dict
scan_config_error_dict = scan_config_error_instance.to_dict()
# create an instance of ScanConfigError from a dict
scan_config_error_from_dict = ScanConfigError.from_dict(scan_config_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


