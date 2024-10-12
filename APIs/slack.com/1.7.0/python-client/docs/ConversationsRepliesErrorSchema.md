# ConversationsRepliesErrorSchema

Schema for error response from conversations.replies method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**needed** | **str** |  | [optional] 
**ok** | **bool** |  | 
**provided** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.conversations_replies_error_schema import ConversationsRepliesErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRepliesErrorSchema from a JSON string
conversations_replies_error_schema_instance = ConversationsRepliesErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsRepliesErrorSchema.to_json())

# convert the object into a dict
conversations_replies_error_schema_dict = conversations_replies_error_schema_instance.to_dict()
# create an instance of ConversationsRepliesErrorSchema from a dict
conversations_replies_error_schema_from_dict = ConversationsRepliesErrorSchema.from_dict(conversations_replies_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


