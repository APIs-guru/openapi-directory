# ConversationsRenameErrorSchema

Schema for error response from conversations.rename method

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
from openapi_client.models.conversations_rename_error_schema import ConversationsRenameErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsRenameErrorSchema from a JSON string
conversations_rename_error_schema_instance = ConversationsRenameErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsRenameErrorSchema.to_json())

# convert the object into a dict
conversations_rename_error_schema_dict = conversations_rename_error_schema_instance.to_dict()
# create an instance of ConversationsRenameErrorSchema from a dict
conversations_rename_error_schema_from_dict = ConversationsRenameErrorSchema.from_dict(conversations_rename_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


