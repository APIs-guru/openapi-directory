# GetMealPlanTemplates200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templates** | [**List[GetMealPlanTemplates200ResponseTemplatesInner]**](GetMealPlanTemplates200ResponseTemplatesInner.md) |  | 

## Example

```python
from openapi_client.models.get_meal_plan_templates200_response import GetMealPlanTemplates200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMealPlanTemplates200Response from a JSON string
get_meal_plan_templates200_response_instance = GetMealPlanTemplates200Response.from_json(json)
# print the JSON string representation of the object
print(GetMealPlanTemplates200Response.to_json())

# convert the object into a dict
get_meal_plan_templates200_response_dict = get_meal_plan_templates200_response_instance.to_dict()
# create an instance of GetMealPlanTemplates200Response from a dict
get_meal_plan_templates200_response_from_dict = GetMealPlanTemplates200Response.from_dict(get_meal_plan_templates200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


