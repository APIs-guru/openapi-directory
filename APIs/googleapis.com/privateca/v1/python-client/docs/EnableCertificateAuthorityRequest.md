# EnableCertificateAuthorityRequest

Request message for CertificateAuthorityService.EnableCertificateAuthority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Optional. An ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 

## Example

```python
from openapi_client.models.enable_certificate_authority_request import EnableCertificateAuthorityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnableCertificateAuthorityRequest from a JSON string
enable_certificate_authority_request_instance = EnableCertificateAuthorityRequest.from_json(json)
# print the JSON string representation of the object
print(EnableCertificateAuthorityRequest.to_json())

# convert the object into a dict
enable_certificate_authority_request_dict = enable_certificate_authority_request_instance.to_dict()
# create an instance of EnableCertificateAuthorityRequest from a dict
enable_certificate_authority_request_from_dict = EnableCertificateAuthorityRequest.from_dict(enable_certificate_authority_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


