# CertVerification

A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns** | [**DnsUpdates**](DnsUpdates.md) |  | [optional] 
**http** | [**HttpUpdate**](HttpUpdate.md) |  | [optional] 

## Example

```python
from openapi_client.models.cert_verification import CertVerification

# TODO update the JSON string below
json = "{}"
# create an instance of CertVerification from a JSON string
cert_verification_instance = CertVerification.from_json(json)
# print the JSON string representation of the object
print(CertVerification.to_json())

# convert the object into a dict
cert_verification_dict = cert_verification_instance.to_dict()
# create an instance of CertVerification from a dict
cert_verification_from_dict = CertVerification.from_dict(cert_verification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


