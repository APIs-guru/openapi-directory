# EncryptionDetails

Details needed if the VM was encrypted at the time of backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_enabled** | **bool** | Identifies whether this backup copy represents an encrypted VM at the time of backup. | [optional] 
**kek_url** | **str** | Key Url. | [optional] 
**kek_vault_id** | **str** | ID of Key Vault where KEK is stored. | [optional] 
**secret_key_url** | **str** | Secret Url. | [optional] 
**secret_key_vault_id** | **str** | ID of Key Vault where Secret is stored. | [optional] 

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


