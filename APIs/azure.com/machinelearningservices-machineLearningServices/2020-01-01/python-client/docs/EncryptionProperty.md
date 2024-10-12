# EncryptionProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_properties** | [**KeyVaultProperties**](KeyVaultProperties.md) |  | 
**status** | **str** | Indicates whether or not the encryption is enabled for the workspace. | 

## Example

```python
from openapi_client.models.encryption_property import EncryptionProperty

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionProperty from a JSON string
encryption_property_instance = EncryptionProperty.from_json(json)
# print the JSON string representation of the object
print(EncryptionProperty.to_json())

# convert the object into a dict
encryption_property_dict = encryption_property_instance.to_dict()
# create an instance of EncryptionProperty from a dict
encryption_property_from_dict = EncryptionProperty.from_dict(encryption_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


