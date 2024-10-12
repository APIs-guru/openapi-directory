# SerialConsoleOperationsValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**SerialConsoleOperationsValueInnerDisplay**](SerialConsoleOperationsValueInnerDisplay.md) |  | [optional] 
**is_data_action** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.serial_console_operations_value_inner import SerialConsoleOperationsValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of SerialConsoleOperationsValueInner from a JSON string
serial_console_operations_value_inner_instance = SerialConsoleOperationsValueInner.from_json(json)
# print the JSON string representation of the object
print(SerialConsoleOperationsValueInner.to_json())

# convert the object into a dict
serial_console_operations_value_inner_dict = serial_console_operations_value_inner_instance.to_dict()
# create an instance of SerialConsoleOperationsValueInner from a dict
serial_console_operations_value_inner_from_dict = SerialConsoleOperationsValueInner.from_dict(serial_console_operations_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


