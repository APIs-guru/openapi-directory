# RenewCertificateInput

Certificate renewal input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RenewCertificateInputProperties**](RenewCertificateInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.renew_certificate_input import RenewCertificateInput

# TODO update the JSON string below
json = "{}"
# create an instance of RenewCertificateInput from a JSON string
renew_certificate_input_instance = RenewCertificateInput.from_json(json)
# print the JSON string representation of the object
print(RenewCertificateInput.to_json())

# convert the object into a dict
renew_certificate_input_dict = renew_certificate_input_instance.to_dict()
# create an instance of RenewCertificateInput from a dict
renew_certificate_input_from_dict = RenewCertificateInput.from_dict(renew_certificate_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


