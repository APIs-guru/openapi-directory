# GenerateMealPlan200ResponseMealsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**image_type** | **str** |  | 
**ready_in_minutes** | **int** |  | 
**servings** | **float** |  | 
**source_url** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.generate_meal_plan200_response_meals_inner import GenerateMealPlan200ResponseMealsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateMealPlan200ResponseMealsInner from a JSON string
generate_meal_plan200_response_meals_inner_instance = GenerateMealPlan200ResponseMealsInner.from_json(json)
# print the JSON string representation of the object
print(GenerateMealPlan200ResponseMealsInner.to_json())

# convert the object into a dict
generate_meal_plan200_response_meals_inner_dict = generate_meal_plan200_response_meals_inner_instance.to_dict()
# create an instance of GenerateMealPlan200ResponseMealsInner from a dict
generate_meal_plan200_response_meals_inner_from_dict = GenerateMealPlan200ResponseMealsInner.from_dict(generate_meal_plan200_response_meals_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


