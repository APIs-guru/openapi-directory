# SignSshPublicKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ssh_public_key** | **str** | The SSH public key to sign. | [optional] 

## Example

```python
from openapi_client.models.sign_ssh_public_key_request import SignSshPublicKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SignSshPublicKeyRequest from a JSON string
sign_ssh_public_key_request_instance = SignSshPublicKeyRequest.from_json(json)
# print the JSON string representation of the object
print(SignSshPublicKeyRequest.to_json())

# convert the object into a dict
sign_ssh_public_key_request_dict = sign_ssh_public_key_request_instance.to_dict()
# create an instance of SignSshPublicKeyRequest from a dict
sign_ssh_public_key_request_from_dict = SignSshPublicKeyRequest.from_dict(sign_ssh_public_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


