# ConversationsUnarchiveSuccessSchema

Schema for successful response from conversations.unarchive method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_unarchive_success_schema import ConversationsUnarchiveSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsUnarchiveSuccessSchema from a JSON string
conversations_unarchive_success_schema_instance = ConversationsUnarchiveSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsUnarchiveSuccessSchema.to_json())

# convert the object into a dict
conversations_unarchive_success_schema_dict = conversations_unarchive_success_schema_instance.to_dict()
# create an instance of ConversationsUnarchiveSuccessSchema from a dict
conversations_unarchive_success_schema_from_dict = ConversationsUnarchiveSuccessSchema.from_dict(conversations_unarchive_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


