# SerialConsoleStatus

Returns whether or not Serial Console is disabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether or not Serial Console is disabled. | [optional] 

## Example

```python
from openapi_client.models.serial_console_status import SerialConsoleStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SerialConsoleStatus from a JSON string
serial_console_status_instance = SerialConsoleStatus.from_json(json)
# print the JSON string representation of the object
print(SerialConsoleStatus.to_json())

# convert the object into a dict
serial_console_status_dict = serial_console_status_instance.to_dict()
# create an instance of SerialConsoleStatus from a dict
serial_console_status_from_dict = SerialConsoleStatus.from_dict(serial_console_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


