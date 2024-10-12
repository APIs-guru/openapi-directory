# CertificateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Certificate**](Certificate.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.certificate_response import CertificateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateResponse from a JSON string
certificate_response_instance = CertificateResponse.from_json(json)
# print the JSON string representation of the object
print(CertificateResponse.to_json())

# convert the object into a dict
certificate_response_dict = certificate_response_instance.to_dict()
# create an instance of CertificateResponse from a dict
certificate_response_from_dict = CertificateResponse.from_dict(certificate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


