# GenerateMealPlan200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meals** | [**List[GenerateMealPlan200ResponseMealsInner]**](GenerateMealPlan200ResponseMealsInner.md) |  | 
**nutrients** | [**GenerateMealPlan200ResponseNutrients**](GenerateMealPlan200ResponseNutrients.md) |  | 

## Example

```python
from openapi_client.models.generate_meal_plan200_response import GenerateMealPlan200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateMealPlan200Response from a JSON string
generate_meal_plan200_response_instance = GenerateMealPlan200Response.from_json(json)
# print the JSON string representation of the object
print(GenerateMealPlan200Response.to_json())

# convert the object into a dict
generate_meal_plan200_response_dict = generate_meal_plan200_response_instance.to_dict()
# create an instance of GenerateMealPlan200Response from a dict
generate_meal_plan200_response_from_dict = GenerateMealPlan200Response.from_dict(generate_meal_plan200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


