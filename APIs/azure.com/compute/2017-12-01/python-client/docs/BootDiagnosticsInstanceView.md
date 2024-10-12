# BootDiagnosticsInstanceView

The instance view of a virtual machine boot diagnostics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**console_screenshot_blob_uri** | **str** | The console screenshot blob URI. | [optional] [readonly] 
**serial_console_log_blob_uri** | **str** | The Linux serial console log blob Uri. | [optional] [readonly] 

## Example

```python
from openapi_client.models.boot_diagnostics_instance_view import BootDiagnosticsInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of BootDiagnosticsInstanceView from a JSON string
boot_diagnostics_instance_view_instance = BootDiagnosticsInstanceView.from_json(json)
# print the JSON string representation of the object
print(BootDiagnosticsInstanceView.to_json())

# convert the object into a dict
boot_diagnostics_instance_view_dict = boot_diagnostics_instance_view_instance.to_dict()
# create an instance of BootDiagnosticsInstanceView from a dict
boot_diagnostics_instance_view_from_dict = BootDiagnosticsInstanceView.from_dict(boot_diagnostics_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


