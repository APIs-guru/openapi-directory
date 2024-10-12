# EndpointGetConversationsID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Conversation]**](Conversation.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_conversations_id import EndpointGetConversationsID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetConversationsID from a JSON string
endpoint_get_conversations_id_instance = EndpointGetConversationsID.from_json(json)
# print the JSON string representation of the object
print(EndpointGetConversationsID.to_json())

# convert the object into a dict
endpoint_get_conversations_id_dict = endpoint_get_conversations_id_instance.to_dict()
# create an instance of EndpointGetConversationsID from a dict
endpoint_get_conversations_id_from_dict = EndpointGetConversationsID.from_dict(endpoint_get_conversations_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


