# AddIdpCredentialRequest

The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pem_data** | **str** | PEM encoded x509 certificate containing the public key for verifying IdP signatures. | [optional] 

## Example

```python
from openapi_client.models.add_idp_credential_request import AddIdpCredentialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddIdpCredentialRequest from a JSON string
add_idp_credential_request_instance = AddIdpCredentialRequest.from_json(json)
# print the JSON string representation of the object
print(AddIdpCredentialRequest.to_json())

# convert the object into a dict
add_idp_credential_request_dict = add_idp_credential_request_instance.to_dict()
# create an instance of AddIdpCredentialRequest from a dict
add_idp_credential_request_from_dict = AddIdpCredentialRequest.from_dict(add_idp_credential_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


