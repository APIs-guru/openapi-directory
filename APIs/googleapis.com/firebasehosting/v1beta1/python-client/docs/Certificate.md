# Certificate

An SSL certificate used to provide end-to-end encryption for requests against your domain name. A `Certificate` can be an actual SSL certificate or, for newly-created custom domains, Hosting's intent to create one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The certificate&#39;s creation time. For &#x60;TEMPORARY&#x60; certs this is the time Hosting first generated challenges for your domain name. For all other cert types, it&#39;s the time the actual cert was created. | [optional] [readonly] 
**expire_time** | **str** | Output only. The certificate&#39;s expiration time. After this time, the cert can no longer be used to provide secure communication between Hosting and your site&#39;s visitors. | [optional] [readonly] 
**issues** | [**List[Status]**](Status.md) | Output only. A set of errors Hosting encountered when attempting to create a cert for your domain name. Resolve these issues to ensure Hosting is able to provide secure communication with your site&#39;s visitors. | [optional] [readonly] 
**state** | **str** | Output only. The state of the certificate. Only the &#x60;CERT_ACTIVE&#x60; and &#x60;CERT_EXPIRING_SOON&#x60; states provide SSL coverage for a domain name. If the state is &#x60;PROPAGATING&#x60; and Hosting had an active cert for the domain name before, that formerly-active cert provides SSL coverage for the domain name until the current cert propagates. | [optional] [readonly] 
**type** | **str** | Output only. The certificate&#39;s type. | [optional] [readonly] 
**verification** | [**CertVerification**](CertVerification.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate import Certificate

# TODO update the JSON string below
json = "{}"
# create an instance of Certificate from a JSON string
certificate_instance = Certificate.from_json(json)
# print the JSON string representation of the object
print(Certificate.to_json())

# convert the object into a dict
certificate_dict = certificate_instance.to_dict()
# create an instance of Certificate from a dict
certificate_from_dict = Certificate.from_dict(certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


