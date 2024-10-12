# SignJwtResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | The ID of the key used to sign the JWT. The key used for signing will remain valid for at least 12 hours after the JWT is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: &#x60;https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}&#x60; - Raw key in JSON format: &#x60;https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}&#x60; - JSON Web Key (JWK): &#x60;https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}&#x60; | [optional] 
**signed_jwt** | **str** | The signed JWT. Contains the automatically generated header; the client-supplied payload; and the signature, which is generated using the key referenced by the &#x60;kid&#x60; field in the header. After the key pair referenced by the &#x60;key_id&#x60; response field expires, Google no longer exposes the public key that can be used to verify the JWT. As a result, the receiver can no longer verify the signature. | [optional] 

## Example

```python
from openapi_client.models.sign_jwt_response import SignJwtResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SignJwtResponse from a JSON string
sign_jwt_response_instance = SignJwtResponse.from_json(json)
# print the JSON string representation of the object
print(SignJwtResponse.to_json())

# convert the object into a dict
sign_jwt_response_dict = sign_jwt_response_instance.to_dict()
# create an instance of SignJwtResponse from a dict
sign_jwt_response_from_dict = SignJwtResponse.from_dict(sign_jwt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


