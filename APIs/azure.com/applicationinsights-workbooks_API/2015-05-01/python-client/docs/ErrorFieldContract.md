# ErrorFieldContract

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.error_field_contract import ErrorFieldContract

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorFieldContract from a JSON string
error_field_contract_instance = ErrorFieldContract.from_json(json)
# print the JSON string representation of the object
print(ErrorFieldContract.to_json())

# convert the object into a dict
error_field_contract_dict = error_field_contract_instance.to_dict()
# create an instance of ErrorFieldContract from a dict
error_field_contract_from_dict = ErrorFieldContract.from_dict(error_field_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


