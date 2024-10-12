# CertificateEmail

Certificate Email

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.certificate_email import CertificateEmail

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateEmail from a JSON string
certificate_email_instance = CertificateEmail.from_json(json)
# print the JSON string representation of the object
print(CertificateEmail.to_json())

# convert the object into a dict
certificate_email_dict = certificate_email_instance.to_dict()
# create an instance of CertificateEmail from a dict
certificate_email_from_dict = CertificateEmail.from_dict(certificate_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


