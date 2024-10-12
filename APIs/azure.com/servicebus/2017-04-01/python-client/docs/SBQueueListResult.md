# SBQueueListResult

The response to the List Queues operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of queues. | [optional] 
**value** | [**List[SBQueue]**](SBQueue.md) | Result of the List Queues operation. | [optional] 

## Example

```python
from openapi_client.models.sb_queue_list_result import SBQueueListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SBQueueListResult from a JSON string
sb_queue_list_result_instance = SBQueueListResult.from_json(json)
# print the JSON string representation of the object
print(SBQueueListResult.to_json())

# convert the object into a dict
sb_queue_list_result_dict = sb_queue_list_result_instance.to_dict()
# create an instance of SBQueueListResult from a dict
sb_queue_list_result_from_dict = SBQueueListResult.from_dict(sb_queue_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


