# CertificateAuthority

Redis cluster certificate authority

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_server_ca** | [**ManagedCertificateAuthority**](ManagedCertificateAuthority.md) |  | [optional] 
**name** | **str** | Identifier. Unique name of the resource in this scope including project, location and cluster using the form: &#x60;projects/{project}/locations/{location}/clusters/{cluster}/certificateAuthority&#x60; | [optional] 

## Example

```python
from openapi_client.models.certificate_authority import CertificateAuthority

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAuthority from a JSON string
certificate_authority_instance = CertificateAuthority.from_json(json)
# print the JSON string representation of the object
print(CertificateAuthority.to_json())

# convert the object into a dict
certificate_authority_dict = certificate_authority_instance.to_dict()
# create an instance of CertificateAuthority from a dict
certificate_authority_from_dict = CertificateAuthority.from_dict(certificate_authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


