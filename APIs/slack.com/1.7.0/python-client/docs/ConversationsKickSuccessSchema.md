# ConversationsKickSuccessSchema

Schema for successful response conversations.kick method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_kick_success_schema import ConversationsKickSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsKickSuccessSchema from a JSON string
conversations_kick_success_schema_instance = ConversationsKickSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsKickSuccessSchema.to_json())

# convert the object into a dict
conversations_kick_success_schema_dict = conversations_kick_success_schema_instance.to_dict()
# create an instance of ConversationsKickSuccessSchema from a dict
conversations_kick_success_schema_from_dict = ConversationsKickSuccessSchema.from_dict(conversations_kick_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


