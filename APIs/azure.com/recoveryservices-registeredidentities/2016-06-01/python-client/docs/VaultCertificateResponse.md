# VaultCertificateResponse

Certificate corresponding to a vault that can be used by clients to register themselves with the vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**properties** | [**ResourceCertificateDetails**](ResourceCertificateDetails.md) |  | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.vault_certificate_response import VaultCertificateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VaultCertificateResponse from a JSON string
vault_certificate_response_instance = VaultCertificateResponse.from_json(json)
# print the JSON string representation of the object
print(VaultCertificateResponse.to_json())

# convert the object into a dict
vault_certificate_response_dict = vault_certificate_response_instance.to_dict()
# create an instance of VaultCertificateResponse from a dict
vault_certificate_response_from_dict = VaultCertificateResponse.from_dict(vault_certificate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


