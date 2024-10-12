# SerialConsoleOperationsValueInnerDisplay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**operation** | **str** |  | [optional] 
**provider** | **str** |  | [optional] 
**resource** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.serial_console_operations_value_inner_display import SerialConsoleOperationsValueInnerDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of SerialConsoleOperationsValueInnerDisplay from a JSON string
serial_console_operations_value_inner_display_instance = SerialConsoleOperationsValueInnerDisplay.from_json(json)
# print the JSON string representation of the object
print(SerialConsoleOperationsValueInnerDisplay.to_json())

# convert the object into a dict
serial_console_operations_value_inner_display_dict = serial_console_operations_value_inner_display_instance.to_dict()
# create an instance of SerialConsoleOperationsValueInnerDisplay from a dict
serial_console_operations_value_inner_display_from_dict = SerialConsoleOperationsValueInnerDisplay.from_dict(serial_console_operations_value_inner_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


