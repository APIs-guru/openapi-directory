# GenerateMealPlan200ResponseNutrients


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calories** | **float** |  | 
**carbohydrates** | **float** |  | 
**fat** | **float** |  | 
**protein** | **float** |  | 

## Example

```python
from openapi_client.models.generate_meal_plan200_response_nutrients import GenerateMealPlan200ResponseNutrients

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateMealPlan200ResponseNutrients from a JSON string
generate_meal_plan200_response_nutrients_instance = GenerateMealPlan200ResponseNutrients.from_json(json)
# print the JSON string representation of the object
print(GenerateMealPlan200ResponseNutrients.to_json())

# convert the object into a dict
generate_meal_plan200_response_nutrients_dict = generate_meal_plan200_response_nutrients_instance.to_dict()
# create an instance of GenerateMealPlan200ResponseNutrients from a dict
generate_meal_plan200_response_nutrients_from_dict = GenerateMealPlan200ResponseNutrients.from_dict(generate_meal_plan200_response_nutrients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


