# CertificateIssuerItem

The certificate issuer item containing certificate issuer metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Certificate Identifier. | [optional] 
**provider** | **str** | The issuer provider. | [optional] 

## Example

```python
from openapi_client.models.certificate_issuer_item import CertificateIssuerItem

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateIssuerItem from a JSON string
certificate_issuer_item_instance = CertificateIssuerItem.from_json(json)
# print the JSON string representation of the object
print(CertificateIssuerItem.to_json())

# convert the object into a dict
certificate_issuer_item_dict = certificate_issuer_item_instance.to_dict()
# create an instance of CertificateIssuerItem from a dict
certificate_issuer_item_from_dict = CertificateIssuerItem.from_dict(certificate_issuer_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


