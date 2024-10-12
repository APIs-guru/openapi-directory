# ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aisle** | **str** |  | 
**amount** | **float** |  | 
**consitency** | **str** |  | 
**id** | **int** |  | 
**image** | **str** |  | 
**measures** | [**ExtractRecipeFromWebsite200ResponseExtendedIngredientsInnerMeasures**](ExtractRecipeFromWebsite200ResponseExtendedIngredientsInnerMeasures.md) |  | [optional] 
**meta** | **List[str]** |  | [optional] 
**name** | **str** |  | 
**original** | **str** |  | 
**original_name** | **str** |  | 
**unit** | **str** |  | 

## Example

```python
from openapi_client.models.extract_recipe_from_website200_response_extended_ingredients_inner import ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner from a JSON string
extract_recipe_from_website200_response_extended_ingredients_inner_instance = ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner.from_json(json)
# print the JSON string representation of the object
print(ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner.to_json())

# convert the object into a dict
extract_recipe_from_website200_response_extended_ingredients_inner_dict = extract_recipe_from_website200_response_extended_ingredients_inner_instance.to_dict()
# create an instance of ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner from a dict
extract_recipe_from_website200_response_extended_ingredients_inner_from_dict = ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner.from_dict(extract_recipe_from_website200_response_extended_ingredients_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


