# ListCertificateTemplatesResponse

Response message for CertificateAuthorityService.ListCertificateTemplates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_templates** | [**List[CertificateTemplate]**](CertificateTemplate.md) | The list of CertificateTemplates. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass this value in ListCertificateTemplatesRequest.next_page_token to retrieve the next page of results. | [optional] 
**unreachable** | **List[str]** | A list of locations (e.g. \&quot;us-west1\&quot;) that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_certificate_templates_response import ListCertificateTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCertificateTemplatesResponse from a JSON string
list_certificate_templates_response_instance = ListCertificateTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCertificateTemplatesResponse.to_json())

# convert the object into a dict
list_certificate_templates_response_dict = list_certificate_templates_response_instance.to_dict()
# create an instance of ListCertificateTemplatesResponse from a dict
list_certificate_templates_response_from_dict = ListCertificateTemplatesResponse.from_dict(list_certificate_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


