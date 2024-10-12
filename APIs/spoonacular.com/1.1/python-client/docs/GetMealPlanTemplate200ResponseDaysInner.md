# GetMealPlanTemplate200ResponseDaysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day** | **str** |  | 
**items** | [**List[GetMealPlanTemplate200ResponseDaysInnerItemsInner]**](GetMealPlanTemplate200ResponseDaysInnerItemsInner.md) |  | [optional] 
**nutrition_summary** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 
**nutrition_summary_breakfast** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 
**nutrition_summary_dinner** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 
**nutrition_summary_lunch** | [**GetMealPlanTemplate200ResponseDaysInnerNutritionSummary**](GetMealPlanTemplate200ResponseDaysInnerNutritionSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_meal_plan_template200_response_days_inner import GetMealPlanTemplate200ResponseDaysInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMealPlanTemplate200ResponseDaysInner from a JSON string
get_meal_plan_template200_response_days_inner_instance = GetMealPlanTemplate200ResponseDaysInner.from_json(json)
# print the JSON string representation of the object
print(GetMealPlanTemplate200ResponseDaysInner.to_json())

# convert the object into a dict
get_meal_plan_template200_response_days_inner_dict = get_meal_plan_template200_response_days_inner_instance.to_dict()
# create an instance of GetMealPlanTemplate200ResponseDaysInner from a dict
get_meal_plan_template200_response_days_inner_from_dict = GetMealPlanTemplate200ResponseDaysInner.from_dict(get_meal_plan_template200_response_days_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


