# ClearMealPlanDayRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | The date in the format yyyy-mm-dd. | 
**hash** | **str** | The private hash for the username. | 
**username** | **str** | The username. | 

## Example

```python
from openapi_client.models.clear_meal_plan_day_request import ClearMealPlanDayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClearMealPlanDayRequest from a JSON string
clear_meal_plan_day_request_instance = ClearMealPlanDayRequest.from_json(json)
# print the JSON string representation of the object
print(ClearMealPlanDayRequest.to_json())

# convert the object into a dict
clear_meal_plan_day_request_dict = clear_meal_plan_day_request_instance.to_dict()
# create an instance of ClearMealPlanDayRequest from a dict
clear_meal_plan_day_request_from_dict = ClearMealPlanDayRequest.from_dict(clear_meal_plan_day_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


