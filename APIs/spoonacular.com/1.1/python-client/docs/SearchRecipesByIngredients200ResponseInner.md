# SearchRecipesByIngredients200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**image** | **str** |  | 
**image_type** | **str** |  | 
**likes** | **int** |  | 
**missed_ingredient_count** | **int** |  | 
**missed_ingredients** | [**List[SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner]**](SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.md) |  | 
**title** | **str** |  | 
**unused_ingredients** | **List[object]** |  | 
**used_ingredient_count** | **float** |  | 
**used_ingredients** | [**List[SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner]**](SearchRecipesByIngredients200ResponseInnerMissedIngredientsInner.md) |  | 

## Example

```python
from openapi_client.models.search_recipes_by_ingredients200_response_inner import SearchRecipesByIngredients200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRecipesByIngredients200ResponseInner from a JSON string
search_recipes_by_ingredients200_response_inner_instance = SearchRecipesByIngredients200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(SearchRecipesByIngredients200ResponseInner.to_json())

# convert the object into a dict
search_recipes_by_ingredients200_response_inner_dict = search_recipes_by_ingredients200_response_inner_instance.to_dict()
# create an instance of SearchRecipesByIngredients200ResponseInner from a dict
search_recipes_by_ingredients200_response_inner_from_dict = SearchRecipesByIngredients200ResponseInner.from_dict(search_recipes_by_ingredients200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


