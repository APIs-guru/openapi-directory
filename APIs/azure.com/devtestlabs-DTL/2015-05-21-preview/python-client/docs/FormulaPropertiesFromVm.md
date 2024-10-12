# FormulaPropertiesFromVm

Information about a VM from which a formula is to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_vm_id** | **str** | The identifier of the VM from which a formula is to be created. | [optional] 

## Example

```python
from openapi_client.models.formula_properties_from_vm import FormulaPropertiesFromVm

# TODO update the JSON string below
json = "{}"
# create an instance of FormulaPropertiesFromVm from a JSON string
formula_properties_from_vm_instance = FormulaPropertiesFromVm.from_json(json)
# print the JSON string representation of the object
print(FormulaPropertiesFromVm.to_json())

# convert the object into a dict
formula_properties_from_vm_dict = formula_properties_from_vm_instance.to_dict()
# create an instance of FormulaPropertiesFromVm from a dict
formula_properties_from_vm_from_dict = FormulaPropertiesFromVm.from_dict(formula_properties_from_vm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


