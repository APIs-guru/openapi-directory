# CertificateListResult

The certificate list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of certificates. | [optional] [readonly] 
**value** | [**List[CertificateItem]**](CertificateItem.md) | A response message containing a list of certificates in the key vault along with a link to the next page of certificates. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_list_result import CertificateListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListResult from a JSON string
certificate_list_result_instance = CertificateListResult.from_json(json)
# print the JSON string representation of the object
print(CertificateListResult.to_json())

# convert the object into a dict
certificate_list_result_dict = certificate_list_result_instance.to_dict()
# create an instance of CertificateListResult from a dict
certificate_list_result_from_dict = CertificateListResult.from_dict(certificate_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


