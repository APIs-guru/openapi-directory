# OperationsListDefaultResponseError

Error information in OData format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The machine-readable description of the error, such as &#39;InvalidRequest&#39; or &#39;InternalServerError&#39; | [optional] 
**details** | **List[object]** | Inner errors that caused this error | [optional] 
**message** | **str** | The human-readable description of the error | [optional] 

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


