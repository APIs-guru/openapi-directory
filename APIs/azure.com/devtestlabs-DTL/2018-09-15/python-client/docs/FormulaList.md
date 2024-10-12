# FormulaList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Formula]**](Formula.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.formula_list import FormulaList

# TODO update the JSON string below
json = "{}"
# create an instance of FormulaList from a JSON string
formula_list_instance = FormulaList.from_json(json)
# print the JSON string representation of the object
print(FormulaList.to_json())

# convert the object into a dict
formula_list_dict = formula_list_instance.to_dict()
# create an instance of FormulaList from a dict
formula_list_from_dict = FormulaList.from_dict(formula_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


