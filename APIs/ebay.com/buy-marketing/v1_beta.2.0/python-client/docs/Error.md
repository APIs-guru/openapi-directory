# Error

The type that defines the fields that can be returned in an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors.  | [optional] 
**domain** | **str** | The name of the primary system where the error occurred. This is relevant for application errors. | [optional] 
**error_id** | **int** | A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms. | [optional] 
**input_ref_ids** | **List[str]** | An array of reference IDs that identify the specific request elements most closely associated to the error or warning, if any. | [optional] 
**long_message** | **str** | A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem. | [optional] 
**message** | **str** | A description of the condition that caused the error or warning. | [optional] 
**output_ref_ids** | **List[str]** | An array of reference IDs that identify the specific response elements most closely associated to the error or warning, if any. | [optional] 
**parameters** | [**List[ErrorParameter]**](ErrorParameter.md) | An array of warning and error messages that return one or more variables contextual information about the error or warning. This is often the field or value that triggered the error or warning. | [optional] 
**subdomain** | **str** | The name of the subdomain in which the error or warning occurred. | [optional] 

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


