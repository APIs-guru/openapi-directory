# ConversationsInviteErrorSchema1

Schema for error response from conversations.invite method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | [optional] 
**errors** | [**List[ErrorsIsReturnedWhenAnErrorAssociatesAnUserInner]**](ErrorsIsReturnedWhenAnErrorAssociatesAnUserInner.md) |  | [optional] 
**needed** | **str** |  | [optional] 
**ok** | **bool** |  | 
**provided** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.conversations_invite_error_schema1 import ConversationsInviteErrorSchema1

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsInviteErrorSchema1 from a JSON string
conversations_invite_error_schema1_instance = ConversationsInviteErrorSchema1.from_json(json)
# print the JSON string representation of the object
print(ConversationsInviteErrorSchema1.to_json())

# convert the object into a dict
conversations_invite_error_schema1_dict = conversations_invite_error_schema1_instance.to_dict()
# create an instance of ConversationsInviteErrorSchema1 from a dict
conversations_invite_error_schema1_from_dict = ConversationsInviteErrorSchema1.from_dict(conversations_invite_error_schema1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


