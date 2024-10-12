# CertificateItem

The certificate item containing certificate metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**id** | **str** | Certificate identifier. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**x5t** | **str** | Thumbprint of the certificate. | [optional] 

## Example

```python
from openapi_client.models.certificate_item import CertificateItem

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateItem from a JSON string
certificate_item_instance = CertificateItem.from_json(json)
# print the JSON string representation of the object
print(CertificateItem.to_json())

# convert the object into a dict
certificate_item_dict = certificate_item_instance.to_dict()
# create an instance of CertificateItem from a dict
certificate_item_from_dict = CertificateItem.from_dict(certificate_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


