# CertificateCollection

Paged Certificates list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[CertificateContract]**](CertificateContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.certificate_collection import CertificateCollection

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCollection from a JSON string
certificate_collection_instance = CertificateCollection.from_json(json)
# print the JSON string representation of the object
print(CertificateCollection.to_json())

# convert the object into a dict
certificate_collection_dict = certificate_collection_instance.to_dict()
# create an instance of CertificateCollection from a dict
certificate_collection_from_dict = CertificateCollection.from_dict(certificate_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


