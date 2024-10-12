# GetRandomRecipes200ResponseRecipesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_likes** | **float** |  | 
**analyzed_instructions** | **List[object]** |  | [optional] 
**cheap** | **bool** |  | 
**credits_text** | **str** |  | 
**cuisines** | **List[str]** |  | [optional] 
**dairy_free** | **bool** |  | 
**diets** | **List[str]** |  | [optional] 
**dish_types** | **List[str]** |  | [optional] 
**extended_ingredients** | [**List[ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner]**](ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner.md) |  | [optional] 
**gaps** | **str** |  | 
**gluten_free** | **bool** |  | 
**health_score** | **float** |  | 
**id** | **int** |  | 
**image** | **str** |  | 
**image_type** | **str** |  | 
**instructions** | **str** |  | 
**ketogenic** | **bool** |  | 
**license** | **str** |  | 
**low_fodmap** | **bool** |  | 
**occasions** | **List[str]** |  | [optional] 
**price_per_serving** | **float** |  | 
**ready_in_minutes** | **int** |  | 
**servings** | **float** |  | 
**source_name** | **str** |  | 
**source_url** | **str** |  | 
**spoonacular_score** | **float** |  | 
**spoonacular_source_url** | **str** |  | 
**summary** | **str** |  | 
**sustainable** | **bool** |  | 
**title** | **str** |  | 
**vegan** | **bool** |  | 
**vegetarian** | **bool** |  | 
**very_healthy** | **bool** |  | 
**very_popular** | **bool** |  | 
**weight_watcher_smart_points** | **float** |  | 
**whole30** | **bool** |  | 
**wine_pairing** | [**ExtractRecipeFromWebsite200ResponseWinePairing**](ExtractRecipeFromWebsite200ResponseWinePairing.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_random_recipes200_response_recipes_inner import GetRandomRecipes200ResponseRecipesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetRandomRecipes200ResponseRecipesInner from a JSON string
get_random_recipes200_response_recipes_inner_instance = GetRandomRecipes200ResponseRecipesInner.from_json(json)
# print the JSON string representation of the object
print(GetRandomRecipes200ResponseRecipesInner.to_json())

# convert the object into a dict
get_random_recipes200_response_recipes_inner_dict = get_random_recipes200_response_recipes_inner_instance.to_dict()
# create an instance of GetRandomRecipes200ResponseRecipesInner from a dict
get_random_recipes200_response_recipes_inner_from_dict = GetRandomRecipes200ResponseRecipesInner.from_dict(get_random_recipes200_response_recipes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


