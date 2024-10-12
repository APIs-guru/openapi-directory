# CertificateAttributes

The certificate management attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_level** | **str** | Reflects the deletion recovery level currently in effect for certificates in the current vault. If it contains &#39;Purgeable&#39;, the certificate can be permanently deleted by a privileged user; otherwise, only the system can purge the certificate, at the end of the retention interval. | [optional] [readonly] 
**created** | **int** | Creation time in UTC. | [optional] [readonly] 
**enabled** | **bool** | Determines whether the object is enabled. | [optional] 
**exp** | **int** | Expiry date in UTC. | [optional] 
**nbf** | **int** | Not before date in UTC. | [optional] 
**updated** | **int** | Last updated time in UTC. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_attributes import CertificateAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAttributes from a JSON string
certificate_attributes_instance = CertificateAttributes.from_json(json)
# print the JSON string representation of the object
print(CertificateAttributes.to_json())

# convert the object into a dict
certificate_attributes_dict = certificate_attributes_instance.to_dict()
# create an instance of CertificateAttributes from a dict
certificate_attributes_from_dict = CertificateAttributes.from_dict(certificate_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


