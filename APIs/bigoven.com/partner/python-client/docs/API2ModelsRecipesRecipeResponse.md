# API2ModelsRecipesRecipeResponse

DTO used to return a recipe with videos

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_minutes** | **int** |  | [optional] 
**ad_tags** | **str** |  | [optional] 
**admin_boost** | **int** |  | [optional] 
**all_categories_text** | **str** |  | [optional] 
**bookmark_image_url** | **str** |  | [optional] 
**bookmark_site_logo** | **str** |  | [optional] 
**bookmark_url** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**collection** | **str** |  | [optional] 
**collection_id** | **int** |  | [optional] 
**creation_date** | **datetime** |  | [optional] 
**cuisine** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**favorite_count** | **int** |  | [optional] 
**image_squares** | **List[int]** |  | [optional] 
**image_url** | **str** |  | [optional] 
**ingredients** | [**List[BigOvenModelAPIIngredient]**](BigOvenModelAPIIngredient.md) |  | [optional] 
**ingredients_text_block** | **str** |  | [optional] 
**instructions** | **str** |  | [optional] 
**is_bookmark** | **bool** |  | [optional] 
**is_private** | **bool** |  | [optional] 
**is_recipe_scan** | **bool** |  | [optional] 
**is_sponsored** | **bool** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**max_image_square** | **int** |  | [optional] 
**medal_count** | **int** |  | [optional] 
**menu_count** | **int** |  | [optional] 
**microcategory** | **str** |  | [optional] 
**notes_count** | **int** |  | [optional] 
**nutrition_info** | [**BigOvenModelAPINutritionInfo**](BigOvenModelAPINutritionInfo.md) |  | [optional] 
**photo_url** | **str** |  | [optional] 
**poster** | [**BigOvenModelAPIUserInfo**](BigOvenModelAPIUserInfo.md) |  | [optional] 
**primary_ingredient** | **str** |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**review_count** | **int** |  | [optional] 
**star_rating** | **float** |  | [optional] 
**steps** | [**List[BigOvenModelInstructionStep]**](BigOvenModelInstructionStep.md) |  | [optional] 
**subcategory** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total_minutes** | **int** |  | [optional] 
**variant_of_recipe_id** | **int** |  | [optional] 
**verified_by_class** | **str** |  | [optional] 
**verified_date_time** | **datetime** |  | [optional] 
**videos** | [**List[API2ModelsRecipesRecipeVideoResponse]**](API2ModelsRecipesRecipeVideoResponse.md) | Gets or sets the recipe videos, i.e. a list of type {API2.Models.Recipes.RecipeVideoResponse} | [optional] 
**web_url** | **str** |  | [optional] 
**yield_number** | **float** |  | [optional] 
**yield_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_recipes_recipe_response import API2ModelsRecipesRecipeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsRecipesRecipeResponse from a JSON string
api2_models_recipes_recipe_response_instance = API2ModelsRecipesRecipeResponse.from_json(json)
# print the JSON string representation of the object
print(API2ModelsRecipesRecipeResponse.to_json())

# convert the object into a dict
api2_models_recipes_recipe_response_dict = api2_models_recipes_recipe_response_instance.to_dict()
# create an instance of API2ModelsRecipesRecipeResponse from a dict
api2_models_recipes_recipe_response_from_dict = API2ModelsRecipesRecipeResponse.from_dict(api2_models_recipes_recipe_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


