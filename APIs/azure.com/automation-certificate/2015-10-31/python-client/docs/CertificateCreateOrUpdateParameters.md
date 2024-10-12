# CertificateCreateOrUpdateParameters

The parameters supplied to the create or update or replace certificate operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the certificate. | 
**properties** | [**CertificateCreateOrUpdateProperties**](CertificateCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.certificate_create_or_update_parameters import CertificateCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateOrUpdateParameters from a JSON string
certificate_create_or_update_parameters_instance = CertificateCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateOrUpdateParameters.to_json())

# convert the object into a dict
certificate_create_or_update_parameters_dict = certificate_create_or_update_parameters_instance.to_dict()
# create an instance of CertificateCreateOrUpdateParameters from a dict
certificate_create_or_update_parameters_from_dict = CertificateCreateOrUpdateParameters.from_dict(certificate_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


