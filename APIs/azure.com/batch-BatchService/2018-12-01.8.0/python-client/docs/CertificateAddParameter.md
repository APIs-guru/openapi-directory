# CertificateAddParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_format** | **str** |  | [optional] 
**data** | **str** |  | 
**password** | **str** | This is required if the certificate format is pfx. It should be omitted if the certificate format is cer. | [optional] 
**thumbprint** | **str** |  | 
**thumbprint_algorithm** | **str** |  | 

## Example

```python
from openapi_client.models.certificate_add_parameter import CertificateAddParameter

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateAddParameter from a JSON string
certificate_add_parameter_instance = CertificateAddParameter.from_json(json)
# print the JSON string representation of the object
print(CertificateAddParameter.to_json())

# convert the object into a dict
certificate_add_parameter_dict = certificate_add_parameter_instance.to_dict()
# create an instance of CertificateAddParameter from a dict
certificate_add_parameter_from_dict = CertificateAddParameter.from_dict(certificate_add_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


