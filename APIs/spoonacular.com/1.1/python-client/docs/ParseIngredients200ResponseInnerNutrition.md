# ParseIngredients200ResponseInnerNutrition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caloric_breakdown** | [**GetIngredientInformation200ResponseNutritionCaloricBreakdown**](GetIngredientInformation200ResponseNutritionCaloricBreakdown.md) |  | 
**flavonoids** | [**List[GetIngredientInformation200ResponseNutritionPropertiesInner]**](GetIngredientInformation200ResponseNutritionPropertiesInner.md) |  | 
**nutrients** | [**List[GetIngredientInformation200ResponseNutritionNutrientsInner]**](GetIngredientInformation200ResponseNutritionNutrientsInner.md) |  | 
**properties** | [**List[GetIngredientInformation200ResponseNutritionPropertiesInner]**](GetIngredientInformation200ResponseNutritionPropertiesInner.md) |  | 
**weight_per_serving** | [**GetIngredientInformation200ResponseNutritionWeightPerServing**](GetIngredientInformation200ResponseNutritionWeightPerServing.md) |  | 

## Example

```python
from openapi_client.models.parse_ingredients200_response_inner_nutrition import ParseIngredients200ResponseInnerNutrition

# TODO update the JSON string below
json = "{}"
# create an instance of ParseIngredients200ResponseInnerNutrition from a JSON string
parse_ingredients200_response_inner_nutrition_instance = ParseIngredients200ResponseInnerNutrition.from_json(json)
# print the JSON string representation of the object
print(ParseIngredients200ResponseInnerNutrition.to_json())

# convert the object into a dict
parse_ingredients200_response_inner_nutrition_dict = parse_ingredients200_response_inner_nutrition_instance.to_dict()
# create an instance of ParseIngredients200ResponseInnerNutrition from a dict
parse_ingredients200_response_inner_nutrition_from_dict = ParseIngredients200ResponseInnerNutrition.from_dict(parse_ingredients200_response_inner_nutrition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


