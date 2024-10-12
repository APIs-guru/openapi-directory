# SearchRecipes200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **int** |  | 
**offset** | **int** |  | 
**results** | [**List[SearchRecipes200ResponseResultsInner]**](SearchRecipes200ResponseResultsInner.md) |  | 
**total_results** | **int** |  | 

## Example

```python
from openapi_client.models.search_recipes200_response import SearchRecipes200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRecipes200Response from a JSON string
search_recipes200_response_instance = SearchRecipes200Response.from_json(json)
# print the JSON string representation of the object
print(SearchRecipes200Response.to_json())

# convert the object into a dict
search_recipes200_response_dict = search_recipes200_response_instance.to_dict()
# create an instance of SearchRecipes200Response from a dict
search_recipes200_response_from_dict = SearchRecipes200Response.from_dict(search_recipes200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


