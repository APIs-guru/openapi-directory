# ChatPostEphemeralSuccessSchema

Schema for successful response from chat.postEphemeral method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_ts** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_post_ephemeral_success_schema import ChatPostEphemeralSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatPostEphemeralSuccessSchema from a JSON string
chat_post_ephemeral_success_schema_instance = ChatPostEphemeralSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatPostEphemeralSuccessSchema.to_json())

# convert the object into a dict
chat_post_ephemeral_success_schema_dict = chat_post_ephemeral_success_schema_instance.to_dict()
# create an instance of ChatPostEphemeralSuccessSchema from a dict
chat_post_ephemeral_success_schema_from_dict = ChatPostEphemeralSuccessSchema.from_dict(chat_post_ephemeral_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


