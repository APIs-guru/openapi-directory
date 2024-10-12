# GetMealPlanWeek200ResponseDaysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **float** |  | 
**day** | **str** |  | 
**items** | [**List[GetMealPlanWeek200ResponseDaysInnerItemsInner]**](GetMealPlanWeek200ResponseDaysInnerItemsInner.md) |  | [optional] 
**nutrition_summary** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 
**nutrition_summary_breakfast** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 
**nutrition_summary_dinner** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 
**nutrition_summary_lunch** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_meal_plan_week200_response_days_inner import GetMealPlanWeek200ResponseDaysInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMealPlanWeek200ResponseDaysInner from a JSON string
get_meal_plan_week200_response_days_inner_instance = GetMealPlanWeek200ResponseDaysInner.from_json(json)
# print the JSON string representation of the object
print(GetMealPlanWeek200ResponseDaysInner.to_json())

# convert the object into a dict
get_meal_plan_week200_response_days_inner_dict = get_meal_plan_week200_response_days_inner_instance.to_dict()
# create an instance of GetMealPlanWeek200ResponseDaysInner from a dict
get_meal_plan_week200_response_days_inner_from_dict = GetMealPlanWeek200ResponseDaysInner.from_dict(get_meal_plan_week200_response_days_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


