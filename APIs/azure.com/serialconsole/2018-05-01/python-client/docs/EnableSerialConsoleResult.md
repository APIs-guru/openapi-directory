# EnableSerialConsoleResult

Returns whether or not Serial Console is disabled (enabled).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether or not Serial Console is disabled (enabled). | [optional] 

## Example

```python
from openapi_client.models.enable_serial_console_result import EnableSerialConsoleResult

# TODO update the JSON string below
json = "{}"
# create an instance of EnableSerialConsoleResult from a JSON string
enable_serial_console_result_instance = EnableSerialConsoleResult.from_json(json)
# print the JSON string representation of the object
print(EnableSerialConsoleResult.to_json())

# convert the object into a dict
enable_serial_console_result_dict = enable_serial_console_result_instance.to_dict()
# create an instance of EnableSerialConsoleResult from a dict
enable_serial_console_result_from_dict = EnableSerialConsoleResult.from_dict(enable_serial_console_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


