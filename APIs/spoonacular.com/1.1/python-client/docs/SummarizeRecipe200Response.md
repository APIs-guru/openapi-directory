# SummarizeRecipe200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**summary** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.summarize_recipe200_response import SummarizeRecipe200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SummarizeRecipe200Response from a JSON string
summarize_recipe200_response_instance = SummarizeRecipe200Response.from_json(json)
# print the JSON string representation of the object
print(SummarizeRecipe200Response.to_json())

# convert the object into a dict
summarize_recipe200_response_dict = summarize_recipe200_response_instance.to_dict()
# create an instance of SummarizeRecipe200Response from a dict
summarize_recipe200_response_from_dict = SummarizeRecipe200Response.from_dict(summarize_recipe200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


