# AdminConversationsSearchSchema

Schema for successful response of admin.conversations.search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | [**List[ObjsChannel]**](ObjsChannel.md) |  | 
**next_cursor** | **str** |  | 

## Example

```python
from openapi_client.models.admin_conversations_search_schema import AdminConversationsSearchSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AdminConversationsSearchSchema from a JSON string
admin_conversations_search_schema_instance = AdminConversationsSearchSchema.from_json(json)
# print the JSON string representation of the object
print(AdminConversationsSearchSchema.to_json())

# convert the object into a dict
admin_conversations_search_schema_dict = admin_conversations_search_schema_instance.to_dict()
# create an instance of AdminConversationsSearchSchema from a dict
admin_conversations_search_schema_from_dict = AdminConversationsSearchSchema.from_dict(admin_conversations_search_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


