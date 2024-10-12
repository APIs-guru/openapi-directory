# ConversationsLeaveSuccessSchema

Schema for successful response from conversations.leave method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_in_channel** | **bool** |  | [optional] 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.conversations_leave_success_schema import ConversationsLeaveSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsLeaveSuccessSchema from a JSON string
conversations_leave_success_schema_instance = ConversationsLeaveSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ConversationsLeaveSuccessSchema.to_json())

# convert the object into a dict
conversations_leave_success_schema_dict = conversations_leave_success_schema_instance.to_dict()
# create an instance of ConversationsLeaveSuccessSchema from a dict
conversations_leave_success_schema_from_dict = ConversationsLeaveSuccessSchema.from_dict(conversations_leave_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


