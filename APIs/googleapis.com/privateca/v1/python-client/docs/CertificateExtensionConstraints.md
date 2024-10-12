# CertificateExtensionConstraints

Describes a set of X.509 extensions that may be part of some certificate issuance controls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_extensions** | [**List[ObjectId]**](ObjectId.md) | Optional. A set of ObjectIds identifying custom X.509 extensions. Will be combined with known_extensions to determine the full set of X.509 extensions. | [optional] 
**known_extensions** | **List[str]** | Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions. | [optional] 

## Example

```python
from openapi_client.models.certificate_extension_constraints import CertificateExtensionConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateExtensionConstraints from a JSON string
certificate_extension_constraints_instance = CertificateExtensionConstraints.from_json(json)
# print the JSON string representation of the object
print(CertificateExtensionConstraints.to_json())

# convert the object into a dict
certificate_extension_constraints_dict = certificate_extension_constraints_instance.to_dict()
# create an instance of CertificateExtensionConstraints from a dict
certificate_extension_constraints_from_dict = CertificateExtensionConstraints.from_dict(certificate_extension_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


