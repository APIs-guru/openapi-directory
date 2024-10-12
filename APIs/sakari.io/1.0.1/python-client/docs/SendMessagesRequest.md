# SendMessagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[ContactRequest]**](ContactRequest.md) |  | [optional] 
**conversation_strategy** | **str** |  | [optional] 
**conversations** | **List[str]** | List of conversation ids to send messages to | [optional] 
**filters** | [**SendMessagesRequestFilters**](SendMessagesRequestFilters.md) |  | [optional] 
**media** | [**List[SendMessagesRequestMediaInner]**](SendMessagesRequestMediaInner.md) | List of media objects to attach to message | [optional] 
**phone_number_filter** | [**SendMessagesRequestPhoneNumberFilter**](SendMessagesRequestPhoneNumberFilter.md) |  | [optional] 
**template** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.send_messages_request import SendMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessagesRequest from a JSON string
send_messages_request_instance = SendMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(SendMessagesRequest.to_json())

# convert the object into a dict
send_messages_request_dict = send_messages_request_instance.to_dict()
# create an instance of SendMessagesRequest from a dict
send_messages_request_from_dict = SendMessagesRequest.from_dict(send_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


