# ManagedCertificateAuthority


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certs** | [**List[CertChain]**](CertChain.md) | The PEM encoded CA certificate chains for redis managed server authentication | [optional] 

## Example

```python
from openapi_client.models.managed_certificate_authority import ManagedCertificateAuthority

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedCertificateAuthority from a JSON string
managed_certificate_authority_instance = ManagedCertificateAuthority.from_json(json)
# print the JSON string representation of the object
print(ManagedCertificateAuthority.to_json())

# convert the object into a dict
managed_certificate_authority_dict = managed_certificate_authority_instance.to_dict()
# create an instance of ManagedCertificateAuthority from a dict
managed_certificate_authority_from_dict = ManagedCertificateAuthority.from_dict(managed_certificate_authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


