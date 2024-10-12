# KeyVaultProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_client_id** | **str** | For future use - The client id of the identity which will be used to access key vault. | [optional] 
**key_identifier** | **str** | Key vault uri to access the encryption key. | 
**key_vault_arm_id** | **str** | The ArmId of the keyVault where the customer owned encryption key is present. | 

## Example

```python
from openapi_client.models.key_vault_properties import KeyVaultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultProperties from a JSON string
key_vault_properties_instance = KeyVaultProperties.from_json(json)
# print the JSON string representation of the object
print(KeyVaultProperties.to_json())

# convert the object into a dict
key_vault_properties_dict = key_vault_properties_instance.to_dict()
# create an instance of KeyVaultProperties from a dict
key_vault_properties_from_dict = KeyVaultProperties.from_dict(key_vault_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


