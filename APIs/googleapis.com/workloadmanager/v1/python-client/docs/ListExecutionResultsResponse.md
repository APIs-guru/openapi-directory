# ListExecutionResultsResponse

Message for response of list execution results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_results** | [**List[ExecutionResult]**](ExecutionResult.md) | The versions from the specified publisher. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_execution_results_response import ListExecutionResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExecutionResultsResponse from a JSON string
list_execution_results_response_instance = ListExecutionResultsResponse.from_json(json)
# print the JSON string representation of the object
print(ListExecutionResultsResponse.to_json())

# convert the object into a dict
list_execution_results_response_dict = list_execution_results_response_instance.to_dict()
# create an instance of ListExecutionResultsResponse from a dict
list_execution_results_response_from_dict = ListExecutionResultsResponse.from_dict(list_execution_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


