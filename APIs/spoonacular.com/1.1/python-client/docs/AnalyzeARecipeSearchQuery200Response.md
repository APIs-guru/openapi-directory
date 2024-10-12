# AnalyzeARecipeSearchQuery200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cuisines** | **List[str]** |  | 
**dishes** | [**List[AnalyzeARecipeSearchQuery200ResponseDishesInner]**](AnalyzeARecipeSearchQuery200ResponseDishesInner.md) |  | 
**ingredients** | [**List[AnalyzeARecipeSearchQuery200ResponseIngredientsInner]**](AnalyzeARecipeSearchQuery200ResponseIngredientsInner.md) |  | 
**modifiers** | **List[str]** |  | 

## Example

```python
from openapi_client.models.analyze_a_recipe_search_query200_response import AnalyzeARecipeSearchQuery200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeARecipeSearchQuery200Response from a JSON string
analyze_a_recipe_search_query200_response_instance = AnalyzeARecipeSearchQuery200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyzeARecipeSearchQuery200Response.to_json())

# convert the object into a dict
analyze_a_recipe_search_query200_response_dict = analyze_a_recipe_search_query200_response_instance.to_dict()
# create an instance of AnalyzeARecipeSearchQuery200Response from a dict
analyze_a_recipe_search_query200_response_from_dict = AnalyzeARecipeSearchQuery200Response.from_dict(analyze_a_recipe_search_query200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


