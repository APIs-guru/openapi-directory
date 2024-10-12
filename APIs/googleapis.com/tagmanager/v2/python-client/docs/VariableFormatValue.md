# VariableFormatValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_conversion_type** | **str** | The option to convert a string-type variable value to either lowercase or uppercase. | [optional] 
**convert_false_to_value** | [**Parameter**](Parameter.md) |  | [optional] 
**convert_null_to_value** | [**Parameter**](Parameter.md) |  | [optional] 
**convert_true_to_value** | [**Parameter**](Parameter.md) |  | [optional] 
**convert_undefined_to_value** | [**Parameter**](Parameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.variable_format_value import VariableFormatValue

# TODO update the JSON string below
json = "{}"
# create an instance of VariableFormatValue from a JSON string
variable_format_value_instance = VariableFormatValue.from_json(json)
# print the JSON string representation of the object
print(VariableFormatValue.to_json())

# convert the object into a dict
variable_format_value_dict = variable_format_value_instance.to_dict()
# create an instance of VariableFormatValue from a dict
variable_format_value_from_dict = VariableFormatValue.from_dict(variable_format_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


