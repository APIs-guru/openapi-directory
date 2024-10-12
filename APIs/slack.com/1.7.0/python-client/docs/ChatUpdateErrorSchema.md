# ChatUpdateErrorSchema

Schema for error response chat.update method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.chat_update_error_schema import ChatUpdateErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ChatUpdateErrorSchema from a JSON string
chat_update_error_schema_instance = ChatUpdateErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ChatUpdateErrorSchema.to_json())

# convert the object into a dict
chat_update_error_schema_dict = chat_update_error_schema_instance.to_dict()
# create an instance of ChatUpdateErrorSchema from a dict
chat_update_error_schema_from_dict = ChatUpdateErrorSchema.from_dict(chat_update_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


