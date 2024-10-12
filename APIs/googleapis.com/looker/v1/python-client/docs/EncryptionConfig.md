# EncryptionConfig

Encryption configuration (i.e. CMEK).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | Name of the CMEK key in KMS (input parameter). | [optional] 
**kms_key_name_version** | **str** | Output only. Full name and version of the CMEK key currently in use to encrypt Looker data. Format: &#x60;projects/{project}/locations/{location}/keyRings/{ring}/cryptoKeys/{key}/cryptoKeyVersions/{version}&#x60;. Empty if CMEK is not configured in this instance. | [optional] [readonly] 
**kms_key_state** | **str** | Output only. Status of the CMEK key. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_config import EncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionConfig from a JSON string
encryption_config_instance = EncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(EncryptionConfig.to_json())

# convert the object into a dict
encryption_config_dict = encryption_config_instance.to_dict()
# create an instance of EncryptionConfig from a dict
encryption_config_from_dict = EncryptionConfig.from_dict(encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


