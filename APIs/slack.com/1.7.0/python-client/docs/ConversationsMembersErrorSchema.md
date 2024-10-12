# ConversationsMembersErrorSchema

Schema for error response conversations.members method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_members_error_schema import ConversationsMembersErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsMembersErrorSchema from a JSON string
conversations_members_error_schema_instance = ConversationsMembersErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsMembersErrorSchema.to_json())

# convert the object into a dict
conversations_members_error_schema_dict = conversations_members_error_schema_instance.to_dict()
# create an instance of ConversationsMembersErrorSchema from a dict
conversations_members_error_schema_from_dict = ConversationsMembersErrorSchema.from_dict(conversations_members_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


