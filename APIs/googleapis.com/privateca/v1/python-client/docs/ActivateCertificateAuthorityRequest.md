# ActivateCertificateAuthorityRequest

Request message for CertificateAuthorityService.ActivateCertificateAuthority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_ca_certificate** | **str** | Required. The signed CA certificate issued from FetchCertificateAuthorityCsrResponse.pem_csr. | [optional] 
**request_id** | **str** | Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**subordinate_config** | [**SubordinateConfig**](SubordinateConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.activate_certificate_authority_request import ActivateCertificateAuthorityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateCertificateAuthorityRequest from a JSON string
activate_certificate_authority_request_instance = ActivateCertificateAuthorityRequest.from_json(json)
# print the JSON string representation of the object
print(ActivateCertificateAuthorityRequest.to_json())

# convert the object into a dict
activate_certificate_authority_request_dict = activate_certificate_authority_request_instance.to_dict()
# create an instance of ActivateCertificateAuthorityRequest from a dict
activate_certificate_authority_request_from_dict = ActivateCertificateAuthorityRequest.from_dict(activate_certificate_authority_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


