# CertificateProviderInstance

Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plugin_instance** | **str** | Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to \&quot;google_cloud_private_spiffe\&quot; to use Certificate Authority Service certificate provider instance. | [optional] 

## Example

```python
from openapi_client.models.certificate_provider_instance import CertificateProviderInstance

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateProviderInstance from a JSON string
certificate_provider_instance_instance = CertificateProviderInstance.from_json(json)
# print the JSON string representation of the object
print(CertificateProviderInstance.to_json())

# convert the object into a dict
certificate_provider_instance_dict = certificate_provider_instance_instance.to_dict()
# create an instance of CertificateProviderInstance from a dict
certificate_provider_instance_from_dict = CertificateProviderInstance.from_dict(certificate_provider_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


