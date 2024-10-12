# EndpointGetConversationsIDStatusesDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_status** | **bool** |  | [optional] 
**bubbled** | [**EndpointGetConversationsIDStatusesDataInnerBubbled**](EndpointGetConversationsIDStatusesDataInnerBubbled.md) |  | [optional] 
**conversation** | [**Conversation**](Conversation.md) |  | [optional] 
**earliest_unseen_message** | [**Message**](Message.md) |  | [optional] 
**new_message_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_conversations_id_statuses_data_inner import EndpointGetConversationsIDStatusesDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetConversationsIDStatusesDataInner from a JSON string
endpoint_get_conversations_id_statuses_data_inner_instance = EndpointGetConversationsIDStatusesDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointGetConversationsIDStatusesDataInner.to_json())

# convert the object into a dict
endpoint_get_conversations_id_statuses_data_inner_dict = endpoint_get_conversations_id_statuses_data_inner_instance.to_dict()
# create an instance of EndpointGetConversationsIDStatusesDataInner from a dict
endpoint_get_conversations_id_statuses_data_inner_from_dict = EndpointGetConversationsIDStatusesDataInner.from_dict(endpoint_get_conversations_id_statuses_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


