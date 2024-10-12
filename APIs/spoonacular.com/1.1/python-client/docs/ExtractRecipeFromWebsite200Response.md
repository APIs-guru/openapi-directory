# ExtractRecipeFromWebsite200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_likes** | **int** |  | 
**analyzed_instructions** | **List[object]** |  | 
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
from openapi_client.models.extract_recipe_from_website200_response import ExtractRecipeFromWebsite200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractRecipeFromWebsite200Response from a JSON string
extract_recipe_from_website200_response_instance = ExtractRecipeFromWebsite200Response.from_json(json)
# print the JSON string representation of the object
print(ExtractRecipeFromWebsite200Response.to_json())

# convert the object into a dict
extract_recipe_from_website200_response_dict = extract_recipe_from_website200_response_instance.to_dict()
# create an instance of ExtractRecipeFromWebsite200Response from a dict
extract_recipe_from_website200_response_from_dict = ExtractRecipeFromWebsite200Response.from_dict(extract_recipe_from_website200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


