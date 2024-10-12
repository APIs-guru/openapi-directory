# DiagnosticContractProperties

Diagnostic Entity Properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether a diagnostic should receive data or not. | 

## Example

```python
from openapi_client.models.diagnostic_contract_properties import DiagnosticContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticContractProperties from a JSON string
diagnostic_contract_properties_instance = DiagnosticContractProperties.from_json(json)
# print the JSON string representation of the object
print(DiagnosticContractProperties.to_json())

# convert the object into a dict
diagnostic_contract_properties_dict = diagnostic_contract_properties_instance.to_dict()
# create an instance of DiagnosticContractProperties from a dict
diagnostic_contract_properties_from_dict = DiagnosticContractProperties.from_dict(diagnostic_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


