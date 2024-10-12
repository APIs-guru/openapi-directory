# IngredientSearch200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**image** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.ingredient_search200_response_results_inner import IngredientSearch200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IngredientSearch200ResponseResultsInner from a JSON string
ingredient_search200_response_results_inner_instance = IngredientSearch200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(IngredientSearch200ResponseResultsInner.to_json())

# convert the object into a dict
ingredient_search200_response_results_inner_dict = ingredient_search200_response_results_inner_instance.to_dict()
# create an instance of IngredientSearch200ResponseResultsInner from a dict
ingredient_search200_response_results_inner_from_dict = IngredientSearch200ResponseResultsInner.from_dict(ingredient_search200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


