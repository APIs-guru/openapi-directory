# ErrorBodyContract

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[ErrorFieldContract]**](ErrorFieldContract.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.error_body_contract import ErrorBodyContract

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorBodyContract from a JSON string
error_body_contract_instance = ErrorBodyContract.from_json(json)
# print the JSON string representation of the object
print(ErrorBodyContract.to_json())

# convert the object into a dict
error_body_contract_dict = error_body_contract_instance.to_dict()
# create an instance of ErrorBodyContract from a dict
error_body_contract_from_dict = ErrorBodyContract.from_dict(error_body_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


