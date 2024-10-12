# DeletedCertificateListResult

A list of certificates that have been deleted in this vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of deleted certificates. | [optional] [readonly] 
**value** | [**List[DeletedCertificateItem]**](DeletedCertificateItem.md) | A response message containing a list of deleted certificates in the vault along with a link to the next page of deleted certificates | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_certificate_list_result import DeletedCertificateListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedCertificateListResult from a JSON string
deleted_certificate_list_result_instance = DeletedCertificateListResult.from_json(json)
# print the JSON string representation of the object
print(DeletedCertificateListResult.to_json())

# convert the object into a dict
deleted_certificate_list_result_dict = deleted_certificate_list_result_instance.to_dict()
# create an instance of DeletedCertificateListResult from a dict
deleted_certificate_list_result_from_dict = DeletedCertificateListResult.from_dict(deleted_certificate_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


