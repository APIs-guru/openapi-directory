# CertificateOrderCertificateCollection

Collection of certificate order certificates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[CertificateOrderCertificate]**](CertificateOrderCertificate.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.certificate_order_certificate_collection import CertificateOrderCertificateCollection

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateOrderCertificateCollection from a JSON string
certificate_order_certificate_collection_instance = CertificateOrderCertificateCollection.from_json(json)
# print the JSON string representation of the object
print(CertificateOrderCertificateCollection.to_json())

# convert the object into a dict
certificate_order_certificate_collection_dict = certificate_order_certificate_collection_instance.to_dict()
# create an instance of CertificateOrderCertificateCollection from a dict
certificate_order_certificate_collection_from_dict = CertificateOrderCertificateCollection.from_dict(certificate_order_certificate_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


