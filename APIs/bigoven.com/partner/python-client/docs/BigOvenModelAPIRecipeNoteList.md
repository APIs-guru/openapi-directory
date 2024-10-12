# BigOvenModelAPIRecipeNoteList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_count** | **int** |  | [optional] 
**results** | [**List[BigOvenModelAPIRecipeNote]**](BigOvenModelAPIRecipeNote.md) |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_recipe_note_list import BigOvenModelAPIRecipeNoteList

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIRecipeNoteList from a JSON string
big_oven_model_api_recipe_note_list_instance = BigOvenModelAPIRecipeNoteList.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIRecipeNoteList.to_json())

# convert the object into a dict
big_oven_model_api_recipe_note_list_dict = big_oven_model_api_recipe_note_list_instance.to_dict()
# create an instance of BigOvenModelAPIRecipeNoteList from a dict
big_oven_model_api_recipe_note_list_from_dict = BigOvenModelAPIRecipeNoteList.from_dict(big_oven_model_api_recipe_note_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


