# OperationsListDefaultResponseError

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] [readonly] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operations_list_default_response_error import OperationsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListDefaultResponseError from a JSON string
operations_list_default_response_error_instance = OperationsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(OperationsListDefaultResponseError.to_json())

# convert the object into a dict
operations_list_default_response_error_dict = operations_list_default_response_error_instance.to_dict()
# create an instance of OperationsListDefaultResponseError from a dict
operations_list_default_response_error_from_dict = OperationsListDefaultResponseError.from_dict(operations_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


