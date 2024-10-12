# CertificateDescription

The X509 Certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The entity tag. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The name of the certificate. | [optional] [readonly] 
**properties** | [**CertificateProperties**](CertificateProperties.md) |  | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate_description import CertificateDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateDescription from a JSON string
certificate_description_instance = CertificateDescription.from_json(json)
# print the JSON string representation of the object
print(CertificateDescription.to_json())

# convert the object into a dict
certificate_description_dict = certificate_description_instance.to_dict()
# create an instance of CertificateDescription from a dict
certificate_description_from_dict = CertificateDescription.from_dict(certificate_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


