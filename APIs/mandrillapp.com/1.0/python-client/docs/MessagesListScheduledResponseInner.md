# MessagesListScheduledResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**from_email** | **str** |  | [optional] 
**send_at** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**to** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_list_scheduled_response_inner import MessagesListScheduledResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesListScheduledResponseInner from a JSON string
messages_list_scheduled_response_inner_instance = MessagesListScheduledResponseInner.from_json(json)
# print the JSON string representation of the object
print(MessagesListScheduledResponseInner.to_json())

# convert the object into a dict
messages_list_scheduled_response_inner_dict = messages_list_scheduled_response_inner_instance.to_dict()
# create an instance of MessagesListScheduledResponseInner from a dict
messages_list_scheduled_response_inner_from_dict = MessagesListScheduledResponseInner.from_dict(messages_list_scheduled_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


