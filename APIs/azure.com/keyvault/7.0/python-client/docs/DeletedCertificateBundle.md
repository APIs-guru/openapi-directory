# DeletedCertificateBundle

A Deleted Certificate consisting of its previous id, attributes and its tags, as well as information on when it will be purged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the certificate was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted certificate. | [optional] 
**scheduled_purge_date** | **int** | The time when the certificate is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**cer** | **bytearray** | CER contents of x509 certificate. | [optional] 
**content_type** | **str** | The content type of the secret. | [optional] 
**id** | **str** | The certificate id. | [optional] [readonly] 
**kid** | **str** | The key id. | [optional] [readonly] 
**policy** | [**CertificatePolicy**](CertificatePolicy.md) |  | [optional] 
**sid** | **str** | The secret id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs | [optional] 
**x5t** | **str** | Thumbprint of the certificate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_certificate_bundle import DeletedCertificateBundle

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedCertificateBundle from a JSON string
deleted_certificate_bundle_instance = DeletedCertificateBundle.from_json(json)
# print the JSON string representation of the object
print(DeletedCertificateBundle.to_json())

# convert the object into a dict
deleted_certificate_bundle_dict = deleted_certificate_bundle_instance.to_dict()
# create an instance of DeletedCertificateBundle from a dict
deleted_certificate_bundle_from_dict = DeletedCertificateBundle.from_dict(deleted_certificate_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


