# GuessNutritionByDishName200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calories** | [**ImageAnalysisByURL200ResponseNutritionCalories**](ImageAnalysisByURL200ResponseNutritionCalories.md) |  | 
**carbs** | [**ImageAnalysisByURL200ResponseNutritionCalories**](ImageAnalysisByURL200ResponseNutritionCalories.md) |  | 
**fat** | [**ImageAnalysisByURL200ResponseNutritionCalories**](ImageAnalysisByURL200ResponseNutritionCalories.md) |  | 
**protein** | [**ImageAnalysisByURL200ResponseNutritionCalories**](ImageAnalysisByURL200ResponseNutritionCalories.md) |  | 
**recipes_used** | **int** |  | 

## Example

```python
from openapi_client.models.guess_nutrition_by_dish_name200_response import GuessNutritionByDishName200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GuessNutritionByDishName200Response from a JSON string
guess_nutrition_by_dish_name200_response_instance = GuessNutritionByDishName200Response.from_json(json)
# print the JSON string representation of the object
print(GuessNutritionByDishName200Response.to_json())

# convert the object into a dict
guess_nutrition_by_dish_name200_response_dict = guess_nutrition_by_dish_name200_response_instance.to_dict()
# create an instance of GuessNutritionByDishName200Response from a dict
guess_nutrition_by_dish_name200_response_from_dict = GuessNutritionByDishName200Response.from_dict(guess_nutrition_by_dish_name200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


