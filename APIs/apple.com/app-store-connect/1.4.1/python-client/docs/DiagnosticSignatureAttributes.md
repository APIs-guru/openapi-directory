# DiagnosticSignatureAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnostic_type** | **str** |  | [optional] 
**signature** | **str** |  | [optional] 
**weight** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_signature_attributes import DiagnosticSignatureAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticSignatureAttributes from a JSON string
diagnostic_signature_attributes_instance = DiagnosticSignatureAttributes.from_json(json)
# print the JSON string representation of the object
print(DiagnosticSignatureAttributes.to_json())

# convert the object into a dict
diagnostic_signature_attributes_dict = diagnostic_signature_attributes_instance.to_dict()
# create an instance of DiagnosticSignatureAttributes from a dict
diagnostic_signature_attributes_from_dict = DiagnosticSignatureAttributes.from_dict(diagnostic_signature_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


