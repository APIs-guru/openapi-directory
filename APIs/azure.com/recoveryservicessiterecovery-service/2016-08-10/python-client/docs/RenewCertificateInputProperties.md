# RenewCertificateInputProperties

Renew Certificate input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**renew_certificate_type** | **str** | Renew certificate type. | [optional] 

## Example

```python
from openapi_client.models.renew_certificate_input_properties import RenewCertificateInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RenewCertificateInputProperties from a JSON string
renew_certificate_input_properties_instance = RenewCertificateInputProperties.from_json(json)
# print the JSON string representation of the object
print(RenewCertificateInputProperties.to_json())

# convert the object into a dict
renew_certificate_input_properties_dict = renew_certificate_input_properties_instance.to_dict()
# create an instance of RenewCertificateInputProperties from a dict
renew_certificate_input_properties_from_dict = RenewCertificateInputProperties.from_dict(renew_certificate_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


