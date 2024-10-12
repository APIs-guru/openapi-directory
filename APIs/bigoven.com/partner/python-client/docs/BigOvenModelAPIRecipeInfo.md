# BigOvenModelAPIRecipeInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bookmark_url** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**creation_date** | **datetime** |  | [optional] 
**cuisine** | **str** |  | [optional] 
**has_videos** | **bool** |  | [optional] 
**hero_photo_url** | **str** |  | [optional] 
**hide_from_public_search** | **bool** |  | [optional] 
**image_url** | **str** |  | [optional] 
**image_url120** | **str** |  | [optional] 
**is_bookmark** | **bool** |  | [optional] 
**is_private** | **bool** |  | [optional] 
**max_image_square** | **int** |  | [optional] 
**microcategory** | **str** |  | [optional] 
**poster** | [**BigOvenModelAPIUserInfo**](BigOvenModelAPIUserInfo.md) |  | [optional] 
**quality_score** | **float** |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**review_count** | **int** |  | [optional] 
**star_rating** | **float** |  | [optional] 
**star_rating_img** | **str** |  | [optional] 
**subcategory** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**total_tries** | **int** |  | [optional] 
**web_url** | **str** |  | [optional] 
**yield_number** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_recipe_info import BigOvenModelAPIRecipeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIRecipeInfo from a JSON string
big_oven_model_api_recipe_info_instance = BigOvenModelAPIRecipeInfo.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIRecipeInfo.to_json())

# convert the object into a dict
big_oven_model_api_recipe_info_dict = big_oven_model_api_recipe_info_instance.to_dict()
# create an instance of BigOvenModelAPIRecipeInfo from a dict
big_oven_model_api_recipe_info_from_dict = BigOvenModelAPIRecipeInfo.from_dict(big_oven_model_api_recipe_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


