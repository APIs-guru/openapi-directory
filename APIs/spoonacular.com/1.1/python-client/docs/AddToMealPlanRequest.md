# AddToMealPlanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **str** | The private hash for the username. | 
**username** | **str** | The username. | 

## Example

```python
from openapi_client.models.add_to_meal_plan_request import AddToMealPlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddToMealPlanRequest from a JSON string
add_to_meal_plan_request_instance = AddToMealPlanRequest.from_json(json)
# print the JSON string representation of the object
print(AddToMealPlanRequest.to_json())

# convert the object into a dict
add_to_meal_plan_request_dict = add_to_meal_plan_request_instance.to_dict()
# create an instance of AddToMealPlanRequest from a dict
add_to_meal_plan_request_from_dict = AddToMealPlanRequest.from_dict(add_to_meal_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


