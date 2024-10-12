# DisableSerialConsoleResult

Returns whether or not Serial Console is disabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether or not Serial Console is disabled. | [optional] 

## Example

```python
from openapi_client.models.disable_serial_console_result import DisableSerialConsoleResult

# TODO update the JSON string below
json = "{}"
# create an instance of DisableSerialConsoleResult from a JSON string
disable_serial_console_result_instance = DisableSerialConsoleResult.from_json(json)
# print the JSON string representation of the object
print(DisableSerialConsoleResult.to_json())

# convert the object into a dict
disable_serial_console_result_dict = disable_serial_console_result_instance.to_dict()
# create an instance of DisableSerialConsoleResult from a dict
disable_serial_console_result_from_dict = DisableSerialConsoleResult.from_dict(disable_serial_console_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


