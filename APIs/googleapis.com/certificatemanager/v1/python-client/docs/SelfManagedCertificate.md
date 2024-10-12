# SelfManagedCertificate

Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_certificate** | **str** | Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any. | [optional] 
**pem_private_key** | **str** | Input only. The PEM-encoded private key of the leaf certificate. | [optional] 

## Example

```python
from openapi_client.models.self_managed_certificate import SelfManagedCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of SelfManagedCertificate from a JSON string
self_managed_certificate_instance = SelfManagedCertificate.from_json(json)
# print the JSON string representation of the object
print(SelfManagedCertificate.to_json())

# convert the object into a dict
self_managed_certificate_dict = self_managed_certificate_instance.to_dict()
# create an instance of SelfManagedCertificate from a dict
self_managed_certificate_from_dict = SelfManagedCertificate.from_dict(self_managed_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


