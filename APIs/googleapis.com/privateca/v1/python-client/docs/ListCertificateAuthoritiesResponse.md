# ListCertificateAuthoritiesResponse

Response message for CertificateAuthorityService.ListCertificateAuthorities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_authorities** | [**List[CertificateAuthority]**](CertificateAuthority.md) | The list of CertificateAuthorities. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListCertificateAuthoritiesRequest.next_page_token to retrieve the next page of results. | [optional] 
**unreachable** | **List[str]** | A list of locations (e.g. \&quot;us-west1\&quot;) that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_certificate_authorities_response import ListCertificateAuthoritiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificateAuthoritiesResponse from a JSON string
list_certificate_authorities_response_instance = ListCertificateAuthoritiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCertificateAuthoritiesResponse.to_json())

# convert the object into a dict
list_certificate_authorities_response_dict = list_certificate_authorities_response_instance.to_dict()
# create an instance of ListCertificateAuthoritiesResponse from a dict
list_certificate_authorities_response_from_dict = ListCertificateAuthoritiesResponse.from_dict(list_certificate_authorities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


