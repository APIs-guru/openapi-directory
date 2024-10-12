# Formula

A formula for creating a VM, specifying an image base and other parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FormulaProperties**](FormulaProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.formula import Formula

# TODO update the JSON string below
json = "{}"
# create an instance of Formula from a JSON string
formula_instance = Formula.from_json(json)
# print the JSON string representation of the object
print(Formula.to_json())

# convert the object into a dict
formula_dict = formula_instance.to_dict()
# create an instance of Formula from a dict
formula_from_dict = Formula.from_dict(formula_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


