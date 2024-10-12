# Error

Type that defines the fields that can be returned in an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Identifies whether the error was in the REQUEST or happened when running the APPLICATION. | [optional] 
**domain** | **str** | The primary system where the error occurred. This is relevant for application errors. For Analytics errors, it always has the value API_ANALYTICS. | [optional] 
**error_id** | **int** | A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms. Traffic report error IDs range from 50001 to 50500. | [optional] 
**input_ref_ids** | **List[str]** | Identifies specific request elements associated with the error, if any. inputRefId&#39;s response is format specific. For JSON, use JSONPath notation. | [optional] 
**long_message** | **str** | A more detailed explanation of the error than given in the message error field. | [optional] 
**message** | **str** | Information on how to correct the problem, in the end user&#39;s terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user&#39;s requested locale. | [optional] 
**output_ref_ids** | **List[str]** | Identifies specific response elements associated with the error, if any. Path format is the same as inputRefId. | [optional] 
**parameters** | [**List[ErrorParameter]**](ErrorParameter.md) | This optional list of name/value pairs that contain context-specific ErrorParameter objects, with each item in the list being a parameter (or input field name) that caused an error condition. Each ErrorParameter object consists of two fields, a name and a value. | [optional] 
**subdomain** | **str** | If present, indicates which subsystem in which the error occurred. | [optional] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


