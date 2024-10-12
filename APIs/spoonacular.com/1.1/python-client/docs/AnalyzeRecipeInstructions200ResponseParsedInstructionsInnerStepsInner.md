# AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equipment** | [**List[AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner]**](AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner.md) |  | [optional] 
**ingredients** | [**List[AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner]**](AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner.md) |  | [optional] 
**number** | **float** |  | 
**step** | **str** |  | 

## Example

```python
from openapi_client.models.analyze_recipe_instructions200_response_parsed_instructions_inner_steps_inner import AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner from a JSON string
analyze_recipe_instructions200_response_parsed_instructions_inner_steps_inner_instance = AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.to_json())

# convert the object into a dict
analyze_recipe_instructions200_response_parsed_instructions_inner_steps_inner_dict = analyze_recipe_instructions200_response_parsed_instructions_inner_steps_inner_instance.to_dict()
# create an instance of AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner from a dict
analyze_recipe_instructions200_response_parsed_instructions_inner_steps_inner_from_dict = AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.from_dict(analyze_recipe_instructions200_response_parsed_instructions_inner_steps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


