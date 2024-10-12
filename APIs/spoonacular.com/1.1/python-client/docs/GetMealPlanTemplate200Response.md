# GetMealPlanTemplate200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[GetMealPlanTemplate200ResponseDaysInner]**](GetMealPlanTemplate200ResponseDaysInner.md) |  | 
**id** | **int** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.get_meal_plan_template200_response import GetMealPlanTemplate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMealPlanTemplate200Response from a JSON string
get_meal_plan_template200_response_instance = GetMealPlanTemplate200Response.from_json(json)
# print the JSON string representation of the object
print(GetMealPlanTemplate200Response.to_json())

# convert the object into a dict
get_meal_plan_template200_response_dict = get_meal_plan_template200_response_instance.to_dict()
# create an instance of GetMealPlanTemplate200Response from a dict
get_meal_plan_template200_response_from_dict = GetMealPlanTemplate200Response.from_dict(get_meal_plan_template200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


