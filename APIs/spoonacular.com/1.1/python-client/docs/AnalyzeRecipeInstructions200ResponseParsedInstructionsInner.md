# AnalyzeRecipeInstructions200ResponseParsedInstructionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**steps** | [**List[AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner]**](AnalyzeRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.analyze_recipe_instructions200_response_parsed_instructions_inner import AnalyzeRecipeInstructions200ResponseParsedInstructionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeRecipeInstructions200ResponseParsedInstructionsInner from a JSON string
analyze_recipe_instructions200_response_parsed_instructions_inner_instance = AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.to_json())

# convert the object into a dict
analyze_recipe_instructions200_response_parsed_instructions_inner_dict = analyze_recipe_instructions200_response_parsed_instructions_inner_instance.to_dict()
# create an instance of AnalyzeRecipeInstructions200ResponseParsedInstructionsInner from a dict
analyze_recipe_instructions200_response_parsed_instructions_inner_from_dict = AnalyzeRecipeInstructions200ResponseParsedInstructionsInner.from_dict(analyze_recipe_instructions200_response_parsed_instructions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


