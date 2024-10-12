# ListCertificateRevocationListsResponse

Response message for CertificateAuthorityService.ListCertificateRevocationLists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_revocation_lists** | [**List[CertificateRevocationList]**](CertificateRevocationList.md) | The list of CertificateRevocationLists. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListCertificateRevocationListsRequest.next_page_token to retrieve the next page of results. | [optional] 
**unreachable** | **List[str]** | A list of locations (e.g. \&quot;us-west1\&quot;) that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_certificate_revocation_lists_response import ListCertificateRevocationListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificateRevocationListsResponse from a JSON string
list_certificate_revocation_lists_response_instance = ListCertificateRevocationListsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCertificateRevocationListsResponse.to_json())

# convert the object into a dict
list_certificate_revocation_lists_response_dict = list_certificate_revocation_lists_response_instance.to_dict()
# create an instance of ListCertificateRevocationListsResponse from a dict
list_certificate_revocation_lists_response_from_dict = ListCertificateRevocationListsResponse.from_dict(list_certificate_revocation_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


