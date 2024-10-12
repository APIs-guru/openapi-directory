# BigOvenModelRecipeCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**default_active_minutes** | **int** |  | [optional] 
**default_total_minutes** | **int** |  | [optional] 
**id** | **int** |  | [optional] 
**parent_id** | **int** |  | [optional] 
**primary_image** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_recipe_category import BigOvenModelRecipeCategory

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelRecipeCategory from a JSON string
big_oven_model_recipe_category_instance = BigOvenModelRecipeCategory.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelRecipeCategory.to_json())

# convert the object into a dict
big_oven_model_recipe_category_dict = big_oven_model_recipe_category_instance.to_dict()
# create an instance of BigOvenModelRecipeCategory from a dict
big_oven_model_recipe_category_from_dict = BigOvenModelRecipeCategory.from_dict(big_oven_model_recipe_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


