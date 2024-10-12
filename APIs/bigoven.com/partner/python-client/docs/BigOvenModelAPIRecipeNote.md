# BigOvenModelAPIRecipeNote


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** |  | [optional] 
**var_date** | **str** |  | [optional] 
**date_dt** | **datetime** |  | [optional] 
**guid** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**notes** | **str** |  | [optional] 
**people** | **str** |  | [optional] 
**recipe_id** | **int** |  | [optional] 
**user_id** | **int** |  | [optional] 
**variations** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_recipe_note import BigOvenModelAPIRecipeNote

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIRecipeNote from a JSON string
big_oven_model_api_recipe_note_instance = BigOvenModelAPIRecipeNote.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIRecipeNote.to_json())

# convert the object into a dict
big_oven_model_api_recipe_note_dict = big_oven_model_api_recipe_note_instance.to_dict()
# create an instance of BigOvenModelAPIRecipeNote from a dict
big_oven_model_api_recipe_note_from_dict = BigOvenModelAPIRecipeNote.from_dict(big_oven_model_api_recipe_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


