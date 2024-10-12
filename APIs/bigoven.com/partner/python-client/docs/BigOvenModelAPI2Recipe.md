# BigOvenModelAPI2Recipe


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
**web_url** | **str** |  | [optional] 
**yield_number** | **float** |  | [optional] 
**yield_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api2_recipe import BigOvenModelAPI2Recipe

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPI2Recipe from a JSON string
big_oven_model_api2_recipe_instance = BigOvenModelAPI2Recipe.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPI2Recipe.to_json())

# convert the object into a dict
big_oven_model_api2_recipe_dict = big_oven_model_api2_recipe_instance.to_dict()
# create an instance of BigOvenModelAPI2Recipe from a dict
big_oven_model_api2_recipe_from_dict = BigOvenModelAPI2Recipe.from_dict(big_oven_model_api2_recipe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


