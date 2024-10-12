# EncryptionIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal identifier associated with the encryption. | [optional] [readonly] 
**tenant_id** | **str** | The tenant identifier associated with the encryption. | [optional] [readonly] 
**type** | **str** | The type of encryption being used. Currently the only supported type is &#39;SystemAssigned&#39;. | [optional] 

## Example

```python
from openapi_client.models.encryption_identity import EncryptionIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionIdentity from a JSON string
encryption_identity_instance = EncryptionIdentity.from_json(json)
# print the JSON string representation of the object
print(EncryptionIdentity.to_json())

# convert the object into a dict
encryption_identity_dict = encryption_identity_instance.to_dict()
# create an instance of EncryptionIdentity from a dict
encryption_identity_from_dict = EncryptionIdentity.from_dict(encryption_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


