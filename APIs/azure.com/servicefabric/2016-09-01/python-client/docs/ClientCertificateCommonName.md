# ClientCertificateCommonName

Client certificate details using common name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_common_name** | **str** | Certificate common name to be granted access; be careful using wild card common names | 
**certificate_issuer_thumbprint** | **str** | Certificate issuer thumbprint | 
**is_admin** | **bool** | Is this certificate used for admin access from the client, if false , it is used or query only access | 

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


