# BigOvenModelAPI2RecipeInfox


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**creation_date** | **datetime** |  | [optional] 
**cuisine** | **str** |  | [optional] 
**has_videos** | **bool** |  | [optional] 
**is_bookmark** | **bool** |  | [optional] 
**is_private** | **bool** |  | [optional] 
**is_recipe_scan** | **bool** |  | [optional] 
**microcategory** | **str** |  | [optional] 
**photo_url** | **str** |  | [optional] 
**poster** | [**BigOvenModelAPI2UserInfoTinyx**](BigOvenModelAPI2UserInfoTinyx.md) |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**review_count** | **int** |  | [optional] 
**servings** | **float** |  | [optional] 
**star_rating** | **float** |  | [optional] 
**subcategory** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total_tries** | **int** |  | [optional] 
**web_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api2_recipe_infox import BigOvenModelAPI2RecipeInfox

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPI2RecipeInfox from a JSON string
big_oven_model_api2_recipe_infox_instance = BigOvenModelAPI2RecipeInfox.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPI2RecipeInfox.to_json())

# convert the object into a dict
big_oven_model_api2_recipe_infox_dict = big_oven_model_api2_recipe_infox_instance.to_dict()
# create an instance of BigOvenModelAPI2RecipeInfox from a dict
big_oven_model_api2_recipe_infox_from_dict = BigOvenModelAPI2RecipeInfox.from_dict(big_oven_model_api2_recipe_infox_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


