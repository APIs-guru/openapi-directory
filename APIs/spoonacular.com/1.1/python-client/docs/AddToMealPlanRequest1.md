# AddToMealPlanRequest1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **float** |  | 
**position** | **int** |  | 
**slot** | **int** |  | 
**type** | **str** |  | 
**value** | [**AddToMealPlanRequest1Value**](AddToMealPlanRequest1Value.md) |  | 

## Example

```python
from openapi_client.models.add_to_meal_plan_request1 import AddToMealPlanRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of AddToMealPlanRequest1 from a JSON string
add_to_meal_plan_request1_instance = AddToMealPlanRequest1.from_json(json)
# print the JSON string representation of the object
print(AddToMealPlanRequest1.to_json())

# convert the object into a dict
add_to_meal_plan_request1_dict = add_to_meal_plan_request1_instance.to_dict()
# create an instance of AddToMealPlanRequest1 from a dict
add_to_meal_plan_request1_from_dict = AddToMealPlanRequest1.from_dict(add_to_meal_plan_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


