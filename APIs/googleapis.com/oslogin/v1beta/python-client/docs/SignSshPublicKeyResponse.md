# SignSshPublicKeyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed_ssh_public_key** | **str** | The signed SSH public key to use in the SSH handshake. | [optional] 

## Example

```python
from openapi_client.models.sign_ssh_public_key_response import SignSshPublicKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SignSshPublicKeyResponse from a JSON string
sign_ssh_public_key_response_instance = SignSshPublicKeyResponse.from_json(json)
# print the JSON string representation of the object
print(SignSshPublicKeyResponse.to_json())

# convert the object into a dict
sign_ssh_public_key_response_dict = sign_ssh_public_key_response_instance.to_dict()
# create an instance of SignSshPublicKeyResponse from a dict
sign_ssh_public_key_response_from_dict = SignSshPublicKeyResponse.from_dict(sign_ssh_public_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


