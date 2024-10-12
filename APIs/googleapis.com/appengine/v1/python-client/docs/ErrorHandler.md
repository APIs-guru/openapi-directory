# ErrorHandler

Custom static error page to be served when an error occurs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error condition this handler applies to. | [optional] 
**mime_type** | **str** | MIME type of file. Defaults to text/html. | [optional] 
**static_file** | **str** | Static file content to be served for this error. | [optional] 

## Example

```python
from openapi_client.models.error_handler import ErrorHandler

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorHandler from a JSON string
error_handler_instance = ErrorHandler.from_json(json)
# print the JSON string representation of the object
print(ErrorHandler.to_json())

# convert the object into a dict
error_handler_dict = error_handler_instance.to_dict()
# create an instance of ErrorHandler from a dict
error_handler_from_dict = ErrorHandler.from_dict(error_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


