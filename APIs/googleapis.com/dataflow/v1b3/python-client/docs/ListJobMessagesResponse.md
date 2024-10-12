# ListJobMessagesResponse

Response to a request to list job messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoscaling_events** | [**List[AutoscalingEvent]**](AutoscalingEvent.md) | Autoscaling events in ascending timestamp order. | [optional] 
**job_messages** | [**List[JobMessage]**](JobMessage.md) | Messages in ascending timestamp order. | [optional] 
**next_page_token** | **str** | The token to obtain the next page of results if there are more. | [optional] 

## Example

```python
from openapi_client.models.list_job_messages_response import ListJobMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListJobMessagesResponse from a JSON string
list_job_messages_response_instance = ListJobMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListJobMessagesResponse.to_json())

# convert the object into a dict
list_job_messages_response_dict = list_job_messages_response_instance.to_dict()
# create an instance of ListJobMessagesResponse from a dict
list_job_messages_response_from_dict = ListJobMessagesResponse.from_dict(list_job_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


