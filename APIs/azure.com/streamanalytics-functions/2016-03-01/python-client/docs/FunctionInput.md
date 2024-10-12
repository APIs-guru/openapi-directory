# FunctionInput

Describes one input parameter of a function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx | [optional] 
**is_configuration_parameter** | **bool** | A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false. | [optional] 

## Example

```python
from openapi_client.models.function_input import FunctionInput

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionInput from a JSON string
function_input_instance = FunctionInput.from_json(json)
# print the JSON string representation of the object
print(FunctionInput.to_json())

# convert the object into a dict
function_input_dict = function_input_instance.to_dict()
# create an instance of FunctionInput from a dict
function_input_from_dict = FunctionInput.from_dict(function_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


