# CertificateUpdateParameters

The parameters supplied to the update certificate operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the certificate. | [optional] 
**properties** | [**CertificateUpdateProperties**](CertificateUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.certificate_update_parameters import CertificateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateUpdateParameters from a JSON string
certificate_update_parameters_instance = CertificateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateUpdateParameters.to_json())

# convert the object into a dict
certificate_update_parameters_dict = certificate_update_parameters_instance.to_dict()
# create an instance of CertificateUpdateParameters from a dict
certificate_update_parameters_from_dict = CertificateUpdateParameters.from_dict(certificate_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


