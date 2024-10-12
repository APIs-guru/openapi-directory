# CertificateOperation

A certificate operation is returned in case of asynchronous requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_requested** | **bool** | Indicates if cancellation was requested on the certificate operation. | [optional] 
**csr** | **bytearray** | The certificate signing request (CSR) that is being used in the certificate operation. | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**id** | **str** | The certificate id. | [optional] [readonly] 
**issuer** | [**IssuerParameters**](IssuerParameters.md) |  | [optional] 
**request_id** | **str** | Identifier for the certificate operation. | [optional] 
**status** | **str** | Status of the certificate operation. | [optional] 
**status_details** | **str** | The status details of the certificate operation. | [optional] 
**target** | **str** | Location which contains the result of the certificate operation. | [optional] 

## Example

```python
from openapi_client.models.certificate_operation import CertificateOperation

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateOperation from a JSON string
certificate_operation_instance = CertificateOperation.from_json(json)
# print the JSON string representation of the object
print(CertificateOperation.to_json())

# convert the object into a dict
certificate_operation_dict = certificate_operation_instance.to_dict()
# create an instance of CertificateOperation from a dict
certificate_operation_from_dict = CertificateOperation.from_dict(certificate_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


