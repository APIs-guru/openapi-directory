# ConversationsListErrorSchema

Schema for error response from conversations.list method

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
from openapi_client.models.conversations_list_error_schema import ConversationsListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsListErrorSchema from a JSON string
conversations_list_error_schema_instance = ConversationsListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsListErrorSchema.to_json())

# convert the object into a dict
conversations_list_error_schema_dict = conversations_list_error_schema_instance.to_dict()
# create an instance of ConversationsListErrorSchema from a dict
conversations_list_error_schema_from_dict = ConversationsListErrorSchema.from_dict(conversations_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


