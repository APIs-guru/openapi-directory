# ConversationsOpenErrorSchema

Schema for error response from conversations.open method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_open_error_schema import ConversationsOpenErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsOpenErrorSchema from a JSON string
conversations_open_error_schema_instance = ConversationsOpenErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsOpenErrorSchema.to_json())

# convert the object into a dict
conversations_open_error_schema_dict = conversations_open_error_schema_instance.to_dict()
# create an instance of ConversationsOpenErrorSchema from a dict
conversations_open_error_schema_from_dict = ConversationsOpenErrorSchema.from_dict(conversations_open_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


