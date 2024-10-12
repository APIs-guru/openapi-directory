# CodeMessageErrorError

The error details for a failed request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error type. | [optional] 
**message** | **str** | The error message. | [optional] 

## Example

```python
from openapi_client.models.code_message_error_error import CodeMessageErrorError

# TODO update the JSON string below
json = "{}"
# create an instance of CodeMessageErrorError from a JSON string
code_message_error_error_instance = CodeMessageErrorError.from_json(json)
# print the JSON string representation of the object
print(CodeMessageErrorError.to_json())

# convert the object into a dict
code_message_error_error_dict = code_message_error_error_instance.to_dict()
# create an instance of CodeMessageErrorError from a dict
code_message_error_error_from_dict = CodeMessageErrorError.from_dict(code_message_error_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


