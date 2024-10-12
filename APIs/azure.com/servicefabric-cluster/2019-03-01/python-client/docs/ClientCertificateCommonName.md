# ClientCertificateCommonName

Describes the client certificate details using common name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_common_name** | **str** | The common name of the client certificate. | 
**certificate_issuer_thumbprint** | **str** | The issuer thumbprint of the client certificate. | 
**is_admin** | **bool** | Indicates if the client certificate has admin access to the cluster. Non admin clients can perform only read only operations on the cluster. | 

## Example

```python
from openapi_client.models.client_certificate_common_name import ClientCertificateCommonName

# TODO update the JSON string below
json = "{}"
# create an instance of ClientCertificateCommonName from a JSON string
client_certificate_common_name_instance = ClientCertificateCommonName.from_json(json)
# print the JSON string representation of the object
print(ClientCertificateCommonName.to_json())

# convert the object into a dict
client_certificate_common_name_dict = client_certificate_common_name_instance.to_dict()
# create an instance of ClientCertificateCommonName from a dict
client_certificate_common_name_from_dict = ClientCertificateCommonName.from_dict(client_certificate_common_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


