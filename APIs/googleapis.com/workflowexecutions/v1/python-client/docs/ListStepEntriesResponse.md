# ListStepEntriesResponse

Response message for ExecutionHistory.ListStepEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in the ListStepEntriesRequest.page_token field in the subsequent call to &#x60;ListStepEntries&#x60; method to retrieve the next page of results. | [optional] 
**step_entries** | [**List[StepEntry]**](StepEntry.md) | The list of entries. | [optional] 
**total_size** | **int** | Indicates the total number of StepEntries that matched the request filter. For running executions, this number shows the number of StepEntries that are executed thus far. | [optional] 

## Example

```python
from openapi_client.models.list_step_entries_response import ListStepEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStepEntriesResponse from a JSON string
list_step_entries_response_instance = ListStepEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListStepEntriesResponse.to_json())

# convert the object into a dict
list_step_entries_response_dict = list_step_entries_response_instance.to_dict()
# create an instance of ListStepEntriesResponse from a dict
list_step_entries_response_from_dict = ListStepEntriesResponse.from_dict(list_step_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


