# SSHKeyAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The date-time the SSH Key was created. | [optional] 
**fingerprint** | **str** | The Key Fingerprint. The fingerprint can be used to identify and keep track of the key without exposing the actual credential.  | [optional] 
**last_login** | **datetime** | The date-time the SSH Key was last used to access ExaVault.  | [optional] 

## Example

```python
from openapi_client.models.ssh_key_attributes import SSHKeyAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of SSHKeyAttributes from a JSON string
ssh_key_attributes_instance = SSHKeyAttributes.from_json(json)
# print the JSON string representation of the object
print(SSHKeyAttributes.to_json())

# convert the object into a dict
ssh_key_attributes_dict = ssh_key_attributes_instance.to_dict()
# create an instance of SSHKeyAttributes from a dict
ssh_key_attributes_from_dict = SSHKeyAttributes.from_dict(ssh_key_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


