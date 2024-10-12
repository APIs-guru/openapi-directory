# FunctionOutput

Describes the output of a function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx | [optional] 

## Example

```python
from openapi_client.models.function_output import FunctionOutput

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionOutput from a JSON string
function_output_instance = FunctionOutput.from_json(json)
# print the JSON string representation of the object
print(FunctionOutput.to_json())

# convert the object into a dict
function_output_dict = function_output_instance.to_dict()
# create an instance of FunctionOutput from a dict
function_output_from_dict = FunctionOutput.from_dict(function_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


