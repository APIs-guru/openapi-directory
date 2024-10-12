# ChatDeleteErrorSchema

Schema for error response from chat.delete method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_delete_error_schema import ChatDeleteErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatDeleteErrorSchema from a JSON string
chat_delete_error_schema_instance = ChatDeleteErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ChatDeleteErrorSchema.to_json())

# convert the object into a dict
chat_delete_error_schema_dict = chat_delete_error_schema_instance.to_dict()
# create an instance of ChatDeleteErrorSchema from a dict
chat_delete_error_schema_from_dict = ChatDeleteErrorSchema.from_dict(chat_delete_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


