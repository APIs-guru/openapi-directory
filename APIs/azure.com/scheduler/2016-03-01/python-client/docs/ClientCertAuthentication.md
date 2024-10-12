# ClientCertAuthentication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_expiration_date** | **datetime** | Gets or sets the certificate expiration date. | [optional] 
**certificate_subject_name** | **str** | Gets or sets the certificate subject name. | [optional] 
**certificate_thumbprint** | **str** | Gets or sets the certificate thumbprint. | [optional] 
**password** | **str** | Gets or sets the certificate password, return value will always be empty. | [optional] 
**pfx** | **str** | Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty. | [optional] 

## Example

```python
from openapi_client.models.client_cert_authentication import ClientCertAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of ClientCertAuthentication from a JSON string
client_cert_authentication_instance = ClientCertAuthentication.from_json(json)
# print the JSON string representation of the object
print(ClientCertAuthentication.to_json())

# convert the object into a dict
client_cert_authentication_dict = client_cert_authentication_instance.to_dict()
# create an instance of ClientCertAuthentication from a dict
client_cert_authentication_from_dict = ClientCertAuthentication.from_dict(client_cert_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


