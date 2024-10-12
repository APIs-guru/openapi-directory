# GetIngredientInformation200ResponseNutrition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caloric_breakdown** | [**GetIngredientInformation200ResponseNutritionCaloricBreakdown**](GetIngredientInformation200ResponseNutritionCaloricBreakdown.md) |  | 
**nutrients** | [**List[GetIngredientInformation200ResponseNutritionNutrientsInner]**](GetIngredientInformation200ResponseNutritionNutrientsInner.md) |  | 
**properties** | [**List[GetIngredientInformation200ResponseNutritionPropertiesInner]**](GetIngredientInformation200ResponseNutritionPropertiesInner.md) |  | 
**weight_per_serving** | [**GetIngredientInformation200ResponseNutritionWeightPerServing**](GetIngredientInformation200ResponseNutritionWeightPerServing.md) |  | 

## Example

```python
from openapi_client.models.get_ingredient_information200_response_nutrition import GetIngredientInformation200ResponseNutrition

# TODO update the JSON string below
json = "{}"
# create an instance of GetIngredientInformation200ResponseNutrition from a JSON string
get_ingredient_information200_response_nutrition_instance = GetIngredientInformation200ResponseNutrition.from_json(json)
# print the JSON string representation of the object
print(GetIngredientInformation200ResponseNutrition.to_json())

# convert the object into a dict
get_ingredient_information200_response_nutrition_dict = get_ingredient_information200_response_nutrition_instance.to_dict()
# create an instance of GetIngredientInformation200ResponseNutrition from a dict
get_ingredient_information200_response_nutrition_from_dict = GetIngredientInformation200ResponseNutrition.from_dict(get_ingredient_information200_response_nutrition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


