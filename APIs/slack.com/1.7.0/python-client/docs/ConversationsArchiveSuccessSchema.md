# ConversationsArchiveSuccessSchema

Schema for successful response conversations.archive method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_archive_success_schema import ConversationsArchiveSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsArchiveSuccessSchema from a JSON string
conversations_archive_success_schema_instance = ConversationsArchiveSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsArchiveSuccessSchema.to_json())

# convert the object into a dict
conversations_archive_success_schema_dict = conversations_archive_success_schema_instance.to_dict()
# create an instance of ConversationsArchiveSuccessSchema from a dict
conversations_archive_success_schema_from_dict = ConversationsArchiveSuccessSchema.from_dict(conversations_archive_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


