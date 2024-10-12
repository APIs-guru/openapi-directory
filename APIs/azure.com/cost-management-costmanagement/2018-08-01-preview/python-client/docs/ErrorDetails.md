# ErrorDetails

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A machine readable error code. | [optional] [readonly] 
**details** | [**List[ErrorBase]**](ErrorBase.md) | error details. | [optional] 
**message** | **str** | A human readable error message. | [optional] [readonly] 
**target** | **str** | Indicates which property in the request is responsible for the error. | [optional] 

## Example

```python
from openapi_client.models.error_details import ErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDetails from a JSON string
error_details_instance = ErrorDetails.from_json(json)
# print the JSON string representation of the object
print(ErrorDetails.to_json())

# convert the object into a dict
error_details_dict = error_details_instance.to_dict()
# create an instance of ErrorDetails from a dict
error_details_from_dict = ErrorDetails.from_dict(error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


