# ErrorBody

An error response body from the Lockbox service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | [**List[ErrorAdditionalInfo]**](ErrorAdditionalInfo.md) | A list of error details about the error. | [optional] 
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] 
**target** | **str** | The target of the particular error. For example, the name of the property in error. | [optional] 

## Example

```python
from openapi_client.models.error_body import ErrorBody

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorBody from a JSON string
error_body_instance = ErrorBody.from_json(json)
# print the JSON string representation of the object
print(ErrorBody.to_json())

# convert the object into a dict
error_body_dict = error_body_instance.to_dict()
# create an instance of ErrorBody from a dict
error_body_from_dict = ErrorBody.from_dict(error_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


