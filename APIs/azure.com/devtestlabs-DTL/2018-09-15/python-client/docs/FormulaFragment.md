# FormulaFragment

A formula for creating a VM, specifying an image base and other parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FormulaPropertiesFragment**](FormulaPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.formula_fragment import FormulaFragment

# TODO update the JSON string below
json = "{}"
# create an instance of FormulaFragment from a JSON string
formula_fragment_instance = FormulaFragment.from_json(json)
# print the JSON string representation of the object
print(FormulaFragment.to_json())

# convert the object into a dict
formula_fragment_dict = formula_fragment_instance.to_dict()
# create an instance of FormulaFragment from a dict
formula_fragment_from_dict = FormulaFragment.from_dict(formula_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


