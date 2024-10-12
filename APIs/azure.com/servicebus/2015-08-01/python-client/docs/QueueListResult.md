# QueueListResult

The response to the List Queues operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of queues. | [optional] 
**value** | [**List[QueueResource]**](QueueResource.md) | Result of the List Queues operation. | [optional] 

## Example

```python
from openapi_client.models.queue_list_result import QueueListResult

# TODO update the JSON string below
json = "{}"
# create an instance of QueueListResult from a JSON string
queue_list_result_instance = QueueListResult.from_json(json)
# print the JSON string representation of the object
print(QueueListResult.to_json())

# convert the object into a dict
queue_list_result_dict = queue_list_result_instance.to_dict()
# create an instance of QueueListResult from a dict
queue_list_result_from_dict = QueueListResult.from_dict(queue_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


