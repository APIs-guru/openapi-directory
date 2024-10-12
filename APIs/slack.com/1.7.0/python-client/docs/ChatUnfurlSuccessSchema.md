# ChatUnfurlSuccessSchema

Schema for successful response from chat.unfurl method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_unfurl_success_schema import ChatUnfurlSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatUnfurlSuccessSchema from a JSON string
chat_unfurl_success_schema_instance = ChatUnfurlSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ChatUnfurlSuccessSchema.to_json())

# convert the object into a dict
chat_unfurl_success_schema_dict = chat_unfurl_success_schema_instance.to_dict()
# create an instance of ChatUnfurlSuccessSchema from a dict
chat_unfurl_success_schema_from_dict = ChatUnfurlSuccessSchema.from_dict(chat_unfurl_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


