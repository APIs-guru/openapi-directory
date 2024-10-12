# PendingCertificateSigningRequestResult

The pending certificate signing request result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The pending certificate signing request as Base64 encoded string. | [optional] [readonly] 

## Example

```python
from openapi_client.models.pending_certificate_signing_request_result import PendingCertificateSigningRequestResult

# TODO update the JSON string below
json = "{}"
# create an instance of PendingCertificateSigningRequestResult from a JSON string
pending_certificate_signing_request_result_instance = PendingCertificateSigningRequestResult.from_json(json)
# print the JSON string representation of the object
print(PendingCertificateSigningRequestResult.to_json())

# convert the object into a dict
pending_certificate_signing_request_result_dict = pending_certificate_signing_request_result_instance.to_dict()
# create an instance of PendingCertificateSigningRequestResult from a dict
pending_certificate_signing_request_result_from_dict = PendingCertificateSigningRequestResult.from_dict(pending_certificate_signing_request_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


