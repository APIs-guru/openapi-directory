# GetMealPlanWeek200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[GetMealPlanWeek200ResponseDaysInner]**](GetMealPlanWeek200ResponseDaysInner.md) |  | 

## Example

```python
from openapi_client.models.get_meal_plan_week200_response import GetMealPlanWeek200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMealPlanWeek200Response from a JSON string
get_meal_plan_week200_response_instance = GetMealPlanWeek200Response.from_json(json)
# print the JSON string representation of the object
print(GetMealPlanWeek200Response.to_json())

# convert the object into a dict
get_meal_plan_week200_response_dict = get_meal_plan_week200_response_instance.to_dict()
# create an instance of GetMealPlanWeek200Response from a dict
get_meal_plan_week200_response_from_dict = GetMealPlanWeek200Response.from_dict(get_meal_plan_week200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


