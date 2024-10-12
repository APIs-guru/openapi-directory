# KEKDetails

The Key Encryption Key (KEK) is the encryption key for the Bitlocker Encryption Key (BEK).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_backup_data** | **str** | Key Backup Data refers to Key Encryption Key (KEK) data. | [optional] 
**key_url** | **str** | Key refers to the Key Encryption Key (KEK). The KEK is the Key to unlock the Secret. | [optional] 
**key_vault_id** | **str** | Key Vault ID identifies where the KEK is stored. | [optional] 

## Example

```python
from openapi_client.models.kek_details import KEKDetails

# TODO update the JSON string below
json = "{}"
# create an instance of KEKDetails from a JSON string
kek_details_instance = KEKDetails.from_json(json)
# print the JSON string representation of the object
print(KEKDetails.to_json())

# convert the object into a dict
kek_details_dict = kek_details_instance.to_dict()
# create an instance of KEKDetails from a dict
kek_details_from_dict = KEKDetails.from_dict(kek_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


