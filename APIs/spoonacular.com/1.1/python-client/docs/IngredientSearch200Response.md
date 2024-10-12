# IngredientSearch200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **int** |  | 
**offset** | **int** |  | 
**results** | [**List[IngredientSearch200ResponseResultsInner]**](IngredientSearch200ResponseResultsInner.md) |  | 
**total_results** | **int** |  | 

## Example

```python
from openapi_client.models.ingredient_search200_response import IngredientSearch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IngredientSearch200Response from a JSON string
ingredient_search200_response_instance = IngredientSearch200Response.from_json(json)
# print the JSON string representation of the object
print(IngredientSearch200Response.to_json())

# convert the object into a dict
ingredient_search200_response_dict = ingredient_search200_response_instance.to_dict()
# create an instance of IngredientSearch200Response from a dict
ingredient_search200_response_from_dict = IngredientSearch200Response.from_dict(ingredient_search200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


