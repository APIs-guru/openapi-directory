# FormulaProperties

Properties of a formula.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the formula. | [optional] 
**creation_date** | **datetime** | The creation date of the formula. | [optional] [readonly] 
**description** | **str** | The description of the formula. | [optional] 
**formula_content** | [**LabVirtualMachineCreationParameter**](LabVirtualMachineCreationParameter.md) |  | [optional] 
**os_type** | **str** | The OS type of the formula. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 
**vm** | [**FormulaPropertiesFromVm**](FormulaPropertiesFromVm.md) |  | [optional] 

## Example

```python
from openapi_client.models.formula_properties import FormulaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FormulaProperties from a JSON string
formula_properties_instance = FormulaProperties.from_json(json)
# print the JSON string representation of the object
print(FormulaProperties.to_json())

# convert the object into a dict
formula_properties_dict = formula_properties_instance.to_dict()
# create an instance of FormulaProperties from a dict
formula_properties_from_dict = FormulaProperties.from_dict(formula_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


