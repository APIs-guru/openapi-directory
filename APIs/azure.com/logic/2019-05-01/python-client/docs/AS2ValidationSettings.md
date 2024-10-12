# AS2ValidationSettings

The AS2 agreement validation settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_certificate_revocation_list_on_receive** | **bool** | The value indicating whether to check for certificate revocation list on receive. | 
**check_certificate_revocation_list_on_send** | **bool** | The value indicating whether to check for certificate revocation list on send. | 
**check_duplicate_message** | **bool** | The value indicating whether to check for duplicate message. | 
**compress_message** | **bool** | The value indicating whether the message has to be compressed. | 
**encrypt_message** | **bool** | The value indicating whether the message has to be encrypted. | 
**encryption_algorithm** | [**EncryptionAlgorithm**](EncryptionAlgorithm.md) |  | 
**interchange_duplicates_validity_days** | **int** | The number of days to look back for duplicate interchange. | 
**override_message_properties** | **bool** | The value indicating whether to override incoming message properties with those in agreement. | 
**sign_message** | **bool** | The value indicating whether the message has to be signed. | 
**signing_algorithm** | [**SigningAlgorithm**](SigningAlgorithm.md) |  | [optional] 

## Example

```python
from openapi_client.models.as2_validation_settings import AS2ValidationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AS2ValidationSettings from a JSON string
as2_validation_settings_instance = AS2ValidationSettings.from_json(json)
# print the JSON string representation of the object
print(AS2ValidationSettings.to_json())

# convert the object into a dict
as2_validation_settings_dict = as2_validation_settings_instance.to_dict()
# create an instance of AS2ValidationSettings from a dict
as2_validation_settings_from_dict = AS2ValidationSettings.from_dict(as2_validation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


