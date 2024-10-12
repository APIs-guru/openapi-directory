# ResponseWithContinuationFormula

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Formula]**](Formula.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_formula import ResponseWithContinuationFormula

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationFormula from a JSON string
response_with_continuation_formula_instance = ResponseWithContinuationFormula.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationFormula.to_json())

# convert the object into a dict
response_with_continuation_formula_dict = response_with_continuation_formula_instance.to_dict()
# create an instance of ResponseWithContinuationFormula from a dict
response_with_continuation_formula_from_dict = ResponseWithContinuationFormula.from_dict(response_with_continuation_formula_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


