# ListAuthorizedCertificatesResponse

Response message for AuthorizedCertificates.ListAuthorizedCertificates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificates** | [**List[AuthorizedCertificate]**](AuthorizedCertificate.md) | The SSL certificates the user is authorized to administer. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_authorized_certificates_response import ListAuthorizedCertificatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorizedCertificatesResponse from a JSON string
list_authorized_certificates_response_instance = ListAuthorizedCertificatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAuthorizedCertificatesResponse.to_json())

# convert the object into a dict
list_authorized_certificates_response_dict = list_authorized_certificates_response_instance.to_dict()
# create an instance of ListAuthorizedCertificatesResponse from a dict
list_authorized_certificates_response_from_dict = ListAuthorizedCertificatesResponse.from_dict(list_authorized_certificates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


