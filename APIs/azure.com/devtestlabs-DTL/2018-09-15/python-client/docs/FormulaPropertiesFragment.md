# FormulaPropertiesFragment

Properties of a formula.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the formula. | [optional] 
**description** | **str** | The description of the formula. | [optional] 
**formula_content** | [**LabVirtualMachineCreationParameterFragment**](LabVirtualMachineCreationParameterFragment.md) |  | [optional] 
**os_type** | **str** | The OS type of the formula. | [optional] 
**vm** | [**FormulaPropertiesFromVmFragment**](FormulaPropertiesFromVmFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.formula_properties_fragment import FormulaPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of FormulaPropertiesFragment from a JSON string
formula_properties_fragment_instance = FormulaPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(FormulaPropertiesFragment.to_json())

# convert the object into a dict
formula_properties_fragment_dict = formula_properties_fragment_instance.to_dict()
# create an instance of FormulaPropertiesFragment from a dict
formula_properties_fragment_from_dict = FormulaPropertiesFragment.from_dict(formula_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


