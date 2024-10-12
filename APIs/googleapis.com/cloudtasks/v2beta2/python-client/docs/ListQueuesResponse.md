# ListQueuesResponse

Response message for ListQueues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. To return the next page of results, call ListQueues with this value as the page_token. If the next_page_token is empty, there are no more results. The page token is valid for only 2 hours. | [optional] 
**queues** | [**List[Queue]**](Queue.md) | The list of queues. | [optional] 

## Example

```python
from openapi_client.models.list_queues_response import ListQueuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListQueuesResponse from a JSON string
list_queues_response_instance = ListQueuesResponse.from_json(json)
# print the JSON string representation of the object
print(ListQueuesResponse.to_json())

# convert the object into a dict
list_queues_response_dict = list_queues_response_instance.to_dict()
# create an instance of ListQueuesResponse from a dict
list_queues_response_from_dict = ListQueuesResponse.from_dict(list_queues_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


