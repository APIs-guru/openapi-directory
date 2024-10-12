# BigOvenModelAPINutritionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calories_from_fat** | **float** |  | [optional] 
**cholesterol** | **float** |  | [optional] 
**cholesterol_pct** | **float** |  | [optional] 
**dietary_fiber** | **float** |  | [optional] 
**dietary_fiber_pct** | **float** |  | [optional] 
**mono_fat** | **float** |  | [optional] 
**poly_fat** | **float** |  | [optional] 
**potassium** | **float** |  | [optional] 
**potassium_pct** | **float** |  | [optional] 
**protein** | **float** |  | [optional] 
**protein_pct** | **float** |  | [optional] 
**sat_fat** | **float** |  | [optional] 
**sat_fat_pct** | **float** |  | [optional] 
**singular_yield_unit** | **str** |  | [optional] 
**sodium** | **float** |  | [optional] 
**sodium_pct** | **float** |  | [optional] 
**sugar** | **float** |  | [optional] 
**total_calories** | **float** |  | [optional] 
**total_carbs** | **float** |  | [optional] 
**total_carbs_pct** | **float** |  | [optional] 
**total_fat** | **float** |  | [optional] 
**total_fat_pct** | **float** |  | [optional] 
**trans_fat** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_nutrition_info import BigOvenModelAPINutritionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPINutritionInfo from a JSON string
big_oven_model_api_nutrition_info_instance = BigOvenModelAPINutritionInfo.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPINutritionInfo.to_json())

# convert the object into a dict
big_oven_model_api_nutrition_info_dict = big_oven_model_api_nutrition_info_instance.to_dict()
# create an instance of BigOvenModelAPINutritionInfo from a dict
big_oven_model_api_nutrition_info_from_dict = BigOvenModelAPINutritionInfo.from_dict(big_oven_model_api_nutrition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


