# AppendChatMessageUsingGET400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | **object** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.append_chat_message_using_get400_response import AppendChatMessageUsingGET400Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppendChatMessageUsingGET400Response from a JSON string
append_chat_message_using_get400_response_instance = AppendChatMessageUsingGET400Response.from_json(json)
# print the JSON string representation of the object
print(AppendChatMessageUsingGET400Response.to_json())

# convert the object into a dict
append_chat_message_using_get400_response_dict = append_chat_message_using_get400_response_instance.to_dict()
# create an instance of AppendChatMessageUsingGET400Response from a dict
append_chat_message_using_get400_response_from_dict = AppendChatMessageUsingGET400Response.from_dict(append_chat_message_using_get400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


