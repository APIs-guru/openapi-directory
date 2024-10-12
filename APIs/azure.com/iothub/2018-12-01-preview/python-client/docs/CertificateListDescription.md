# CertificateListDescription

The JSON-serialized array of Certificate objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CertificateDescription]**](CertificateDescription.md) | The array of Certificate objects. | [optional] 

## Example

```python
from openapi_client.models.certificate_list_description import CertificateListDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateListDescription from a JSON string
certificate_list_description_instance = CertificateListDescription.from_json(json)
# print the JSON string representation of the object
print(CertificateListDescription.to_json())

# convert the object into a dict
certificate_list_description_dict = certificate_list_description_instance.to_dict()
# create an instance of CertificateListDescription from a dict
certificate_list_description_from_dict = CertificateListDescription.from_dict(certificate_list_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


