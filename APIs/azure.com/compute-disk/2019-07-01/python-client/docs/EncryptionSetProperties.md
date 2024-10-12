# EncryptionSetProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_key** | [**KeyVaultAndKeyReference**](KeyVaultAndKeyReference.md) |  | [optional] 
**previous_keys** | [**List[KeyVaultAndKeyReference]**](KeyVaultAndKeyReference.md) | A readonly collection of key vault keys previously used by this disk encryption set while a key rotation is in progress. It will be empty if there is no ongoing key rotation. | [optional] [readonly] 
**provisioning_state** | **str** | The disk encryption set provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_set_properties import EncryptionSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSetProperties from a JSON string
encryption_set_properties_instance = EncryptionSetProperties.from_json(json)
# print the JSON string representation of the object
print(EncryptionSetProperties.to_json())

# convert the object into a dict
encryption_set_properties_dict = encryption_set_properties_instance.to_dict()
# create an instance of EncryptionSetProperties from a dict
encryption_set_properties_from_dict = EncryptionSetProperties.from_dict(encryption_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


