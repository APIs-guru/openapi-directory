# BigOvenModelRecipeInfoTiny


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_url** | **str** |  | [optional] 
**quality_score** | **int** |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**servings** | **float** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_recipe_info_tiny import BigOvenModelRecipeInfoTiny

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelRecipeInfoTiny from a JSON string
big_oven_model_recipe_info_tiny_instance = BigOvenModelRecipeInfoTiny.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelRecipeInfoTiny.to_json())

# convert the object into a dict
big_oven_model_recipe_info_tiny_dict = big_oven_model_recipe_info_tiny_instance.to_dict()
# create an instance of BigOvenModelRecipeInfoTiny from a dict
big_oven_model_recipe_info_tiny_from_dict = BigOvenModelRecipeInfoTiny.from_dict(big_oven_model_recipe_info_tiny_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


