# AutocompleteIngredientSearch200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**image** | **str** |  | 
**name** | **str** |  | 
**possible_units** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.autocomplete_ingredient_search200_response_inner import AutocompleteIngredientSearch200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of AutocompleteIngredientSearch200ResponseInner from a JSON string
autocomplete_ingredient_search200_response_inner_instance = AutocompleteIngredientSearch200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(AutocompleteIngredientSearch200ResponseInner.to_json())

# convert the object into a dict
autocomplete_ingredient_search200_response_inner_dict = autocomplete_ingredient_search200_response_inner_instance.to_dict()
# create an instance of AutocompleteIngredientSearch200ResponseInner from a dict
autocomplete_ingredient_search200_response_inner_from_dict = AutocompleteIngredientSearch200ResponseInner.from_dict(autocomplete_ingredient_search200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


