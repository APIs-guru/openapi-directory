# RequestHistoryListResult

The list of workflow request histories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[RequestHistory]**](RequestHistory.md) | A list of workflow request histories. | [optional] 

## Example

```python
from openapi_client.models.request_history_list_result import RequestHistoryListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RequestHistoryListResult from a JSON string
request_history_list_result_instance = RequestHistoryListResult.from_json(json)
# print the JSON string representation of the object
print(RequestHistoryListResult.to_json())

# convert the object into a dict
request_history_list_result_dict = request_history_list_result_instance.to_dict()
# create an instance of RequestHistoryListResult from a dict
request_history_list_result_from_dict = RequestHistoryListResult.from_dict(request_history_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


