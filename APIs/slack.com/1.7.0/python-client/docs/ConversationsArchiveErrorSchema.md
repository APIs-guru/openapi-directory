# ConversationsArchiveErrorSchema

Schema for error response from conversations.archive method

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
from openapi_client.models.conversations_archive_error_schema import ConversationsArchiveErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsArchiveErrorSchema from a JSON string
conversations_archive_error_schema_instance = ConversationsArchiveErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsArchiveErrorSchema.to_json())

# convert the object into a dict
conversations_archive_error_schema_dict = conversations_archive_error_schema_instance.to_dict()
# create an instance of ConversationsArchiveErrorSchema from a dict
conversations_archive_error_schema_from_dict = ConversationsArchiveErrorSchema.from_dict(conversations_archive_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


