# Error

Azure App Configuration error object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | A detailed description of the error. | [optional] 
**name** | **str** | The name of the parameter that resulted in the error. | [optional] 
**status** | **int** | The HTTP status code that the error maps to. | [optional] 
**title** | **str** | A brief summary of the error. | [optional] 
**type** | **str** | The type of the error. | [optional] 

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


