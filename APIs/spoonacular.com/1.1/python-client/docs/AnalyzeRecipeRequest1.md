# AnalyzeRecipeRequest1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredients** | **List[str]** |  | [optional] 
**instructions** | **str** |  | [optional] 
**servings** | **int** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analyze_recipe_request1 import AnalyzeRecipeRequest1

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeRecipeRequest1 from a JSON string
analyze_recipe_request1_instance = AnalyzeRecipeRequest1.from_json(json)
# print the JSON string representation of the object
print(AnalyzeRecipeRequest1.to_json())

# convert the object into a dict
analyze_recipe_request1_dict = analyze_recipe_request1_instance.to_dict()
# create an instance of AnalyzeRecipeRequest1 from a dict
analyze_recipe_request1_from_dict = AnalyzeRecipeRequest1.from_dict(analyze_recipe_request1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


