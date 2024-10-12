# GetMealPlanTemplate200ResponseDaysInnerItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**position** | **int** |  | 
**slot** | **int** |  | 
**type** | **str** |  | 
**value** | [**GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue**](GetMealPlanTemplate200ResponseDaysInnerItemsInnerValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_meal_plan_template200_response_days_inner_items_inner import GetMealPlanTemplate200ResponseDaysInnerItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetMealPlanTemplate200ResponseDaysInnerItemsInner from a JSON string
get_meal_plan_template200_response_days_inner_items_inner_instance = GetMealPlanTemplate200ResponseDaysInnerItemsInner.from_json(json)
# print the JSON string representation of the object
print(GetMealPlanTemplate200ResponseDaysInnerItemsInner.to_json())

# convert the object into a dict
get_meal_plan_template200_response_days_inner_items_inner_dict = get_meal_plan_template200_response_days_inner_items_inner_instance.to_dict()
# create an instance of GetMealPlanTemplate200ResponseDaysInnerItemsInner from a dict
get_meal_plan_template200_response_days_inner_items_inner_from_dict = GetMealPlanTemplate200ResponseDaysInnerItemsInner.from_dict(get_meal_plan_template200_response_days_inner_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


