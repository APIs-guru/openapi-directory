# FormulaPropertiesFromVmFragment

Information about a VM from which a formula is to be created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lab_vm_id** | **str** | The identifier of the VM from which a formula is to be created. | [optional] 

## Example

```python
from openapi_client.models.formula_properties_from_vm_fragment import FormulaPropertiesFromVmFragment

# TODO update the JSON string below
json = "{}"
# create an instance of FormulaPropertiesFromVmFragment from a JSON string
formula_properties_from_vm_fragment_instance = FormulaPropertiesFromVmFragment.from_json(json)
# print the JSON string representation of the object
print(FormulaPropertiesFromVmFragment.to_json())

# convert the object into a dict
formula_properties_from_vm_fragment_dict = formula_properties_from_vm_fragment_instance.to_dict()
# create an instance of FormulaPropertiesFromVmFragment from a dict
formula_properties_from_vm_fragment_from_dict = FormulaPropertiesFromVmFragment.from_dict(formula_properties_from_vm_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


