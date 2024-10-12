# DeletedCertificateItem

The deleted certificate item containing metadata about the deleted certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the certificate was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted certificate. | [optional] 
**scheduled_purge_date** | **int** | The time when the certificate is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**id** | **str** | Certificate identifier. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**x5t** | **str** | Thumbprint of the certificate. | [optional] 

## Example

```python
from openapi_client.models.deleted_certificate_item import DeletedCertificateItem

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedCertificateItem from a JSON string
deleted_certificate_item_instance = DeletedCertificateItem.from_json(json)
# print the JSON string representation of the object
print(DeletedCertificateItem.to_json())

# convert the object into a dict
deleted_certificate_item_dict = deleted_certificate_item_instance.to_dict()
# create an instance of DeletedCertificateItem from a dict
deleted_certificate_item_from_dict = DeletedCertificateItem.from_dict(deleted_certificate_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


