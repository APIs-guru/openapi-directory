# AddMealPlanTemplate200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AddMealPlanTemplate200ResponseItemsInner]**](AddMealPlanTemplate200ResponseItemsInner.md) |  | 
**name** | **str** |  | 
**publish_as_public** | **bool** |  | 

## Example

```python
from openapi_client.models.add_meal_plan_template200_response import AddMealPlanTemplate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AddMealPlanTemplate200Response from a JSON string
add_meal_plan_template200_response_instance = AddMealPlanTemplate200Response.from_json(json)
# print the JSON string representation of the object
print(AddMealPlanTemplate200Response.to_json())

# convert the object into a dict
add_meal_plan_template200_response_dict = add_meal_plan_template200_response_instance.to_dict()
# create an instance of AddMealPlanTemplate200Response from a dict
add_meal_plan_template200_response_from_dict = AddMealPlanTemplate200Response.from_dict(add_meal_plan_template200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


