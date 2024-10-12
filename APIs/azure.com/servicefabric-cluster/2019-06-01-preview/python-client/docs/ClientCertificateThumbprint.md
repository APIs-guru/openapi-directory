# ClientCertificateThumbprint

Describes the client certificate details using thumbprint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_thumbprint** | **str** | The thumbprint of the client certificate. | 
**is_admin** | **bool** | Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster. | 

## Example

```python
from openapi_client.models.client_certificate_thumbprint import ClientCertificateThumbprint

# TODO update the JSON string below
json = "{}"
# create an instance of ClientCertificateThumbprint from a JSON string
client_certificate_thumbprint_instance = ClientCertificateThumbprint.from_json(json)
# print the JSON string representation of the object
print(ClientCertificateThumbprint.to_json())

# convert the object into a dict
client_certificate_thumbprint_dict = client_certificate_thumbprint_instance.to_dict()
# create an instance of ClientCertificateThumbprint from a dict
client_certificate_thumbprint_from_dict = ClientCertificateThumbprint.from_dict(client_certificate_thumbprint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


