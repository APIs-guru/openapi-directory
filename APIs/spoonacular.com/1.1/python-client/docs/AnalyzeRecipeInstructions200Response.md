# AnalyzeRecipeInstructions200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equipment** | [**List[AnalyzeRecipeInstructions200ResponseEquipmentInner]**](AnalyzeRecipeInstructions200ResponseEquipmentInner.md) |  | 
**ingredients** | [**List[AnalyzeRecipeInstructions200ResponseEquipmentInner]**](AnalyzeRecipeInstructions200ResponseEquipmentInner.md) |  | 
**parsed_instructions** | [**List[AnalyzeRecipeInstructions200ResponseParsedInstructionsInner]**](AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.md) |  | 

## Example

```python
from openapi_client.models.analyze_recipe_instructions200_response import AnalyzeRecipeInstructions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeRecipeInstructions200Response from a JSON string
analyze_recipe_instructions200_response_instance = AnalyzeRecipeInstructions200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyzeRecipeInstructions200Response.to_json())

# convert the object into a dict
analyze_recipe_instructions200_response_dict = analyze_recipe_instructions200_response_instance.to_dict()
# create an instance of AnalyzeRecipeInstructions200Response from a dict
analyze_recipe_instructions200_response_from_dict = AnalyzeRecipeInstructions200Response.from_dict(analyze_recipe_instructions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


