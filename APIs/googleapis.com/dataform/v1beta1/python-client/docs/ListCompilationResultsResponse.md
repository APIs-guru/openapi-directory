# ListCompilationResultsResponse

`ListCompilationResults` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compilation_results** | [**List[CompilationResult]**](CompilationResult.md) | List of compilation results. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations which could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_compilation_results_response import ListCompilationResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCompilationResultsResponse from a JSON string
list_compilation_results_response_instance = ListCompilationResultsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCompilationResultsResponse.to_json())

# convert the object into a dict
list_compilation_results_response_dict = list_compilation_results_response_instance.to_dict()
# create an instance of ListCompilationResultsResponse from a dict
list_compilation_results_response_from_dict = ListCompilationResultsResponse.from_dict(list_compilation_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


