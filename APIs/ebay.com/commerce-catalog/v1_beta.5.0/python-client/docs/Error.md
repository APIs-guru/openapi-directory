# Error

This type defines the fields that can be returned in an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Identifies the type of erro. | [optional] 
**domain** | **str** | Name for the primary system where the error occurred. This is relevant for application errors. | [optional] 
**error_id** | **int** | A unique number to identify the error. | [optional] 
**input_ref_ids** | **List[str]** | An array of request elements most closely associated to the error. | [optional] 
**long_message** | **str** | A more detailed explanation of the error. | [optional] 
**message** | **str** | Information on how to correct the problem, in the end user&#39;s terms and language where applicable. | [optional] 
**output_ref_ids** | **List[str]** | An array of request elements most closely associated to the error. | [optional] 
**parameters** | [**List[ErrorParameter]**](ErrorParameter.md) | An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. | [optional] 
**subdomain** | **str** | Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. | [optional] 

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


