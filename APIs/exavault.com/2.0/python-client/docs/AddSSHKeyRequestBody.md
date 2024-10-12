# AddSSHKeyRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | Public Key to provide ExaVault. You can provide the Public Key as formatted from the ssh-keygen command or a standard rfc-4716 format.  | 
**user_id** | **int** | ID of the user to assign the new key to.  | 

## Example

```python
from openapi_client.models.add_ssh_key_request_body import AddSSHKeyRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddSSHKeyRequestBody from a JSON string
add_ssh_key_request_body_instance = AddSSHKeyRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddSSHKeyRequestBody.to_json())

# convert the object into a dict
add_ssh_key_request_body_dict = add_ssh_key_request_body_instance.to_dict()
# create an instance of AddSSHKeyRequestBody from a dict
add_ssh_key_request_body_from_dict = AddSSHKeyRequestBody.from_dict(add_ssh_key_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


