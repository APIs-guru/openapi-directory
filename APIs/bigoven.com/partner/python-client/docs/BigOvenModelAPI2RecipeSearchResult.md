# BigOvenModelAPI2RecipeSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_count** | **int** |  | [optional] 
**results** | [**List[BigOvenModelAPI2RecipeInfox]**](BigOvenModelAPI2RecipeInfox.md) |  | [optional] 
**spell_suggest** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api2_recipe_search_result import BigOvenModelAPI2RecipeSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPI2RecipeSearchResult from a JSON string
big_oven_model_api2_recipe_search_result_instance = BigOvenModelAPI2RecipeSearchResult.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPI2RecipeSearchResult.to_json())

# convert the object into a dict
big_oven_model_api2_recipe_search_result_dict = big_oven_model_api2_recipe_search_result_instance.to_dict()
# create an instance of BigOvenModelAPI2RecipeSearchResult from a dict
big_oven_model_api2_recipe_search_result_from_dict = BigOvenModelAPI2RecipeSearchResult.from_dict(big_oven_model_api2_recipe_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


