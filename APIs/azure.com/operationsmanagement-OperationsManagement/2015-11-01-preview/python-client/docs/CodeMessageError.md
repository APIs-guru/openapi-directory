# CodeMessageError

The error body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CodeMessageErrorError**](CodeMessageErrorError.md) |  | [optional] 

## Example

```python
from openapi_client.models.code_message_error import CodeMessageError

# TODO update the JSON string below
json = "{}"
# create an instance of CodeMessageError from a JSON string
code_message_error_instance = CodeMessageError.from_json(json)
# print the JSON string representation of the object
print(CodeMessageError.to_json())

# convert the object into a dict
code_message_error_dict = code_message_error_instance.to_dict()
# create an instance of CodeMessageError from a dict
code_message_error_from_dict = CodeMessageError.from_dict(code_message_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


