# CertificateCreateParameters

The certificate create parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**policy** | [**CertificatePolicy**](CertificatePolicy.md) |  | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.certificate_create_parameters import CertificateCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateCreateParameters from a JSON string
certificate_create_parameters_instance = CertificateCreateParameters.from_json(json)
# print the JSON string representation of the object
print(CertificateCreateParameters.to_json())

# convert the object into a dict
certificate_create_parameters_dict = certificate_create_parameters_instance.to_dict()
# create an instance of CertificateCreateParameters from a dict
certificate_create_parameters_from_dict = CertificateCreateParameters.from_dict(certificate_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


