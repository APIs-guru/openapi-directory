# ErrorBase

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A machine readable error code. | [optional] [readonly] 
**message** | **str** | A human readable error message. | [optional] [readonly] 
**target** | **str** | Indicates which property in the request is responsible for the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.error_base import ErrorBase

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorBase from a JSON string
error_base_instance = ErrorBase.from_json(json)
# print the JSON string representation of the object
print(ErrorBase.to_json())

# convert the object into a dict
error_base_dict = error_base_instance.to_dict()
# create an instance of ErrorBase from a dict
error_base_from_dict = ErrorBase.from_dict(error_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


