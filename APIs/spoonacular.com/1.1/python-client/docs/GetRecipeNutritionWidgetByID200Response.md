# GetRecipeNutritionWidgetByID200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad** | [**List[GetRecipeNutritionWidgetByID200ResponseBadInner]**](GetRecipeNutritionWidgetByID200ResponseBadInner.md) |  | 
**calories** | **str** |  | 
**carbs** | **str** |  | 
**fat** | **str** |  | 
**good** | [**List[GetRecipeNutritionWidgetByID200ResponseBadInner]**](GetRecipeNutritionWidgetByID200ResponseBadInner.md) |  | 
**protein** | **str** |  | 

## Example

```python
from openapi_client.models.get_recipe_nutrition_widget_by_id200_response import GetRecipeNutritionWidgetByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecipeNutritionWidgetByID200Response from a JSON string
get_recipe_nutrition_widget_by_id200_response_instance = GetRecipeNutritionWidgetByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetRecipeNutritionWidgetByID200Response.to_json())

# convert the object into a dict
get_recipe_nutrition_widget_by_id200_response_dict = get_recipe_nutrition_widget_by_id200_response_instance.to_dict()
# create an instance of GetRecipeNutritionWidgetByID200Response from a dict
get_recipe_nutrition_widget_by_id200_response_from_dict = GetRecipeNutritionWidgetByID200Response.from_dict(get_recipe_nutrition_widget_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


