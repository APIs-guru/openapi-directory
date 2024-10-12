# GetRecipeInformationBulk200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_likes** | **int** |  | 
**analyzed_instructions** | **List[str]** |  | 
**cheap** | **bool** |  | 
**credits_text** | **str** |  | 
**cuisines** | **List[str]** |  | 
**dairy_free** | **bool** |  | 
**diets** | **List[str]** |  | 
**dish_types** | **List[str]** |  | 
**extended_ingredients** | [**List[ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner]**](ExtractRecipeFromWebsite200ResponseExtendedIngredientsInner.md) |  | 
**gaps** | **str** |  | 
**gluten_free** | **bool** |  | 
**health_score** | **float** |  | 
**id** | **int** |  | 
**image** | **str** |  | 
**image_type** | **str** |  | 
**instructions** | **str** |  | 
**ketogenic** | **bool** |  | 
**license** | **str** |  | 
**low_fodmap** | **bool** |  | 
**occasions** | **List[str]** |  | 
**price_per_serving** | **float** |  | 
**ready_in_minutes** | **int** |  | 
**servings** | **float** |  | 
**source_name** | **str** |  | 
**source_url** | **str** |  | 
**spoonacular_score** | **float** |  | 
**spoonacular_source_url** | **str** |  | 
**summary** | **str** |  | 
**sustainable** | **bool** |  | 
**title** | **str** |  | 
**vegan** | **bool** |  | 
**vegetarian** | **bool** |  | 
**very_healthy** | **bool** |  | 
**very_popular** | **bool** |  | 
**weight_watcher_smart_points** | **float** |  | 
**whole30** | **bool** |  | 
**wine_pairing** | [**ExtractRecipeFromWebsite200ResponseWinePairing**](ExtractRecipeFromWebsite200ResponseWinePairing.md) |  | 

## Example

```python
from openapi_client.models.get_recipe_information_bulk200_response_inner import GetRecipeInformationBulk200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecipeInformationBulk200ResponseInner from a JSON string
get_recipe_information_bulk200_response_inner_instance = GetRecipeInformationBulk200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetRecipeInformationBulk200ResponseInner.to_json())

# convert the object into a dict
get_recipe_information_bulk200_response_inner_dict = get_recipe_information_bulk200_response_inner_instance.to_dict()
# create an instance of GetRecipeInformationBulk200ResponseInner from a dict
get_recipe_information_bulk200_response_inner_from_dict = GetRecipeInformationBulk200ResponseInner.from_dict(get_recipe_information_bulk200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


