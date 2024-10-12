# ServerCertificateCommonName

Describes the server certificate details using common name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_common_name** | **str** | The common name of the server certificate. | 
**certificate_issuer_thumbprint** | **str** | The issuer thumbprint of the server certificate. | 

## Example

```python
from openapi_client.models.server_certificate_common_name import ServerCertificateCommonName

# TODO update the JSON string below
json = "{}"
# create an instance of ServerCertificateCommonName from a JSON string
server_certificate_common_name_instance = ServerCertificateCommonName.from_json(json)
# print the JSON string representation of the object
print(ServerCertificateCommonName.to_json())

# convert the object into a dict
server_certificate_common_name_dict = server_certificate_common_name_instance.to_dict()
# create an instance of ServerCertificateCommonName from a dict
server_certificate_common_name_from_dict = ServerCertificateCommonName.from_dict(server_certificate_common_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


