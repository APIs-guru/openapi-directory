# CertificateOperationUpdateParameter

The certificate operation update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_requested** | **bool** | Indicates if cancellation was requested on the certificate operation. | 

## Example

```python
from openapi_client.models.certificate_operation_update_parameter import CertificateOperationUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateOperationUpdateParameter from a JSON string
certificate_operation_update_parameter_instance = CertificateOperationUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(CertificateOperationUpdateParameter.to_json())

# convert the object into a dict
certificate_operation_update_parameter_dict = certificate_operation_update_parameter_instance.to_dict()
# create an instance of CertificateOperationUpdateParameter from a dict
certificate_operation_update_parameter_from_dict = CertificateOperationUpdateParameter.from_dict(certificate_operation_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


