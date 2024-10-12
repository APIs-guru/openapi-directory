# GetAnalyzedRecipeInstructions200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equipment** | [**List[GetMealPlanTemplates200ResponseTemplatesInner]**](GetMealPlanTemplates200ResponseTemplatesInner.md) |  | 
**ingredients** | [**List[GetMealPlanTemplates200ResponseTemplatesInner]**](GetMealPlanTemplates200ResponseTemplatesInner.md) |  | 
**parsed_instructions** | [**List[GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner]**](GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.md) |  | 

## Example

```python
from openapi_client.models.get_analyzed_recipe_instructions200_response import GetAnalyzedRecipeInstructions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAnalyzedRecipeInstructions200Response from a JSON string
get_analyzed_recipe_instructions200_response_instance = GetAnalyzedRecipeInstructions200Response.from_json(json)
# print the JSON string representation of the object
print(GetAnalyzedRecipeInstructions200Response.to_json())

# convert the object into a dict
get_analyzed_recipe_instructions200_response_dict = get_analyzed_recipe_instructions200_response_instance.to_dict()
# create an instance of GetAnalyzedRecipeInstructions200Response from a dict
get_analyzed_recipe_instructions200_response_from_dict = GetAnalyzedRecipeInstructions200Response.from_dict(get_analyzed_recipe_instructions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


