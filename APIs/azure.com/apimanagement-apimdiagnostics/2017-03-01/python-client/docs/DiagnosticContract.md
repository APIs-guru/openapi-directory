# DiagnosticContract

Diagnostic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DiagnosticContractProperties**](DiagnosticContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.diagnostic_contract import DiagnosticContract

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticContract from a JSON string
diagnostic_contract_instance = DiagnosticContract.from_json(json)
# print the JSON string representation of the object
print(DiagnosticContract.to_json())

# convert the object into a dict
diagnostic_contract_dict = diagnostic_contract_instance.to_dict()
# create an instance of DiagnosticContract from a dict
diagnostic_contract_from_dict = DiagnosticContract.from_dict(diagnostic_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


