# GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**steps** | [**List[GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner]**](GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInnerStepsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_analyzed_recipe_instructions200_response_parsed_instructions_inner import GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner from a JSON string
get_analyzed_recipe_instructions200_response_parsed_instructions_inner_instance = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.from_json(json)
# print the JSON string representation of the object
print(GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.to_json())

# convert the object into a dict
get_analyzed_recipe_instructions200_response_parsed_instructions_inner_dict = get_analyzed_recipe_instructions200_response_parsed_instructions_inner_instance.to_dict()
# create an instance of GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner from a dict
get_analyzed_recipe_instructions200_response_parsed_instructions_inner_from_dict = GetAnalyzedRecipeInstructions200ResponseParsedInstructionsInner.from_dict(get_analyzed_recipe_instructions200_response_parsed_instructions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


