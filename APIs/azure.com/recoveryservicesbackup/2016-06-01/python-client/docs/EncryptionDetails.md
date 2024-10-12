# EncryptionDetails

Details needed if the VM was encrypted at the time of backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_enabled** | **bool** | Identifies whether the backup copy represents an encrypted VM at the time of backup. | [optional] 
**kek_url** | **str** | URL of the Key Encryption Key (KEK). | [optional] 
**kek_vault_id** | **str** | The ID of Key Vault where the Key Encryption Key (KEK) is stored. | [optional] 
**secret_key_url** | **str** | URL of the Bitlocker Encryption Key (BEK). | [optional] 
**secret_key_vault_id** | **str** | The ID of Key Vault where the Bitlocker Encryption Key (BEK), or Secret, is stored. | [optional] 

## Example

```python
from openapi_client.models.encryption_details import EncryptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionDetails from a JSON string
encryption_details_instance = EncryptionDetails.from_json(json)
# print the JSON string representation of the object
print(EncryptionDetails.to_json())

# convert the object into a dict
encryption_details_dict = encryption_details_instance.to_dict()
# create an instance of EncryptionDetails from a dict
encryption_details_from_dict = EncryptionDetails.from_dict(encryption_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


