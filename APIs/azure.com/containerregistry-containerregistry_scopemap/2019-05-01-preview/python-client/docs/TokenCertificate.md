# TokenCertificate

The properties of a certificate used for authenticating a token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_pem_certificate** | **str** | Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token. | [optional] 
**expiry** | **datetime** | The expiry datetime of the certificate. | [optional] 
**name** | **str** |  | [optional] 
**thumbprint** | **str** | The thumbprint of the certificate. | [optional] 

## Example

```python
from openapi_client.models.token_certificate import TokenCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCertificate from a JSON string
token_certificate_instance = TokenCertificate.from_json(json)
# print the JSON string representation of the object
print(TokenCertificate.to_json())

# convert the object into a dict
token_certificate_dict = token_certificate_instance.to_dict()
# create an instance of TokenCertificate from a dict
token_certificate_from_dict = TokenCertificate.from_dict(token_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


