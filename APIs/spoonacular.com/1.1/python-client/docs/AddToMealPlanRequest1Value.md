# AddToMealPlanRequest1Value


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredients** | [**List[AddToMealPlanRequest1ValueIngredientsInner]**](AddToMealPlanRequest1ValueIngredientsInner.md) |  | 

## Example

```python
from openapi_client.models.add_to_meal_plan_request1_value import AddToMealPlanRequest1Value

# TODO update the JSON string below
json = "{}"
# create an instance of AddToMealPlanRequest1Value from a JSON string
add_to_meal_plan_request1_value_instance = AddToMealPlanRequest1Value.from_json(json)
# print the JSON string representation of the object
print(AddToMealPlanRequest1Value.to_json())

# convert the object into a dict
add_to_meal_plan_request1_value_dict = add_to_meal_plan_request1_value_instance.to_dict()
# create an instance of AddToMealPlanRequest1Value from a dict
add_to_meal_plan_request1_value_from_dict = AddToMealPlanRequest1Value.from_dict(add_to_meal_plan_request1_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


