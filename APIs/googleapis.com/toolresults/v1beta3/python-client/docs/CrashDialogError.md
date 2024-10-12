# CrashDialogError

Crash dialog was detected during the test execution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_package** | **str** | The name of the package that caused the dialog. | [optional] 

## Example

```python
from openapi_client.models.crash_dialog_error import CrashDialogError

# TODO update the JSON string below
json = "{}"
# create an instance of CrashDialogError from a JSON string
crash_dialog_error_instance = CrashDialogError.from_json(json)
# print the JSON string representation of the object
print(CrashDialogError.to_json())

# convert the object into a dict
crash_dialog_error_dict = crash_dialog_error_instance.to_dict()
# create an instance of CrashDialogError from a dict
crash_dialog_error_from_dict = CrashDialogError.from_dict(crash_dialog_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


