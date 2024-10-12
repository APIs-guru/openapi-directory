# SerialConsoleOperations

Serial Console operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SerialConsoleOperationsValueInner]**](SerialConsoleOperationsValueInner.md) | A list of Serial Console operations | [optional] 

## Example

```python
from openapi_client.models.serial_console_operations import SerialConsoleOperations

# TODO update the JSON string below
json = "{}"
# create an instance of SerialConsoleOperations from a JSON string
serial_console_operations_instance = SerialConsoleOperations.from_json(json)
# print the JSON string representation of the object
print(SerialConsoleOperations.to_json())

# convert the object into a dict
serial_console_operations_dict = serial_console_operations_instance.to_dict()
# create an instance of SerialConsoleOperations from a dict
serial_console_operations_from_dict = SerialConsoleOperations.from_dict(serial_console_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


