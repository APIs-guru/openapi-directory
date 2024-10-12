# GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equipment** | [**List[GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner]**](GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner.md) |  | [optional] 
**ingredients** | [**List[GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner]**](GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInnerEquipmentInner.md) |  | [optional] 
**number** | **float** |  | 
**step** | **str** |  | 

## Example

```python
from openapi_client.models.get_analyzed_recipe_instructions200_response_parsed_instructions_inner_steps_inner import GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner from a JSON string
get_analyzed_recipe_instructions200_response_parsed_instructions_inner_steps_inner_instance = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.from_json(json)
# print the JSON string representation of the object
print(GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.to_json())

# convert the object into a dict
get_analyzed_recipe_instructions200_response_parsed_instructions_inner_steps_inner_dict = get_analyzed_recipe_instructions200_response_parsed_instructions_inner_steps_inner_instance.to_dict()
# create an instance of GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner from a dict
get_analyzed_recipe_instructions200_response_parsed_instructions_inner_steps_inner_from_dict = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.from_dict(get_analyzed_recipe_instructions200_response_parsed_instructions_inner_steps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


