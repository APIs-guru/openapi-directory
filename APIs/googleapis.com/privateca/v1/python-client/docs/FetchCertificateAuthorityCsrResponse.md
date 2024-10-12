# FetchCertificateAuthorityCsrResponse

Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_csr** | **str** | Output only. The PEM-encoded signed certificate signing request (CSR). | [optional] [readonly] 

## Example

```python
from openapi_client.models.fetch_certificate_authority_csr_response import FetchCertificateAuthorityCsrResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchCertificateAuthorityCsrResponse from a JSON string
fetch_certificate_authority_csr_response_instance = FetchCertificateAuthorityCsrResponse.from_json(json)
# print the JSON string representation of the object
print(FetchCertificateAuthorityCsrResponse.to_json())

# convert the object into a dict
fetch_certificate_authority_csr_response_dict = fetch_certificate_authority_csr_response_instance.to_dict()
# create an instance of FetchCertificateAuthorityCsrResponse from a dict
fetch_certificate_authority_csr_response_from_dict = FetchCertificateAuthorityCsrResponse.from_dict(fetch_certificate_authority_csr_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


