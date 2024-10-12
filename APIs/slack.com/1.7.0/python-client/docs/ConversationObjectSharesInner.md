# ConversationObjectSharesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_user** | **str** |  | [optional] 
**is_active** | **bool** |  | 
**team** | [**ObjsTeam**](ObjsTeam.md) |  | 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.conversation_object_shares_inner import ConversationObjectSharesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationObjectSharesInner from a JSON string
conversation_object_shares_inner_instance = ConversationObjectSharesInner.from_json(json)
# print the JSON string representation of the object
print(ConversationObjectSharesInner.to_json())

# convert the object into a dict
conversation_object_shares_inner_dict = conversation_object_shares_inner_instance.to_dict()
# create an instance of ConversationObjectSharesInner from a dict
conversation_object_shares_inner_from_dict = ConversationObjectSharesInner.from_dict(conversation_object_shares_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


