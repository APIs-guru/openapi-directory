# QueryCompilationResultActionsResponse

`QueryCompilationResultActions` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compilation_result_actions** | [**List[CompilationResultAction]**](CompilationResultAction.md) | List of compilation result actions. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.query_compilation_result_actions_response import QueryCompilationResultActionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryCompilationResultActionsResponse from a JSON string
query_compilation_result_actions_response_instance = QueryCompilationResultActionsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryCompilationResultActionsResponse.to_json())

# convert the object into a dict
query_compilation_result_actions_response_dict = query_compilation_result_actions_response_instance.to_dict()
# create an instance of QueryCompilationResultActionsResponse from a dict
query_compilation_result_actions_response_from_dict = QueryCompilationResultActionsResponse.from_dict(query_compilation_result_actions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


