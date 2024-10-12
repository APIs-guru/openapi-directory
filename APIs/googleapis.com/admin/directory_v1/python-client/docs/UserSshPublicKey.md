# UserSshPublicKey

JSON template for a POSIX account entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_time_usec** | **str** | An expiration time in microseconds since epoch. | [optional] 
**fingerprint** | **str** | A SHA-256 fingerprint of the SSH public key. (Read-only) | [optional] [readonly] 
**key** | **str** | An SSH public key. | [optional] 

## Example

```python
from openapi_client.models.user_ssh_public_key import UserSshPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of UserSshPublicKey from a JSON string
user_ssh_public_key_instance = UserSshPublicKey.from_json(json)
# print the JSON string representation of the object
print(UserSshPublicKey.to_json())

# convert the object into a dict
user_ssh_public_key_dict = user_ssh_public_key_instance.to_dict()
# create an instance of UserSshPublicKey from a dict
user_ssh_public_key_from_dict = UserSshPublicKey.from_dict(user_ssh_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


