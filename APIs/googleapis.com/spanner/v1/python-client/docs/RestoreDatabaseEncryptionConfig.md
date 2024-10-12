# RestoreDatabaseEncryptionConfig

Encryption configuration for the restored database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_type** | **str** | Required. The encryption type of the restored database. | [optional] 
**kms_key_name** | **str** | Optional. The Cloud KMS key that will be used to encrypt/decrypt the restored database. This field should be set only when encryption_type is &#x60;CUSTOMER_MANAGED_ENCRYPTION&#x60;. Values are of the form &#x60;projects//locations//keyRings//cryptoKeys/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.restore_database_encryption_config import RestoreDatabaseEncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreDatabaseEncryptionConfig from a JSON string
restore_database_encryption_config_instance = RestoreDatabaseEncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(RestoreDatabaseEncryptionConfig.to_json())

# convert the object into a dict
restore_database_encryption_config_dict = restore_database_encryption_config_instance.to_dict()
# create an instance of RestoreDatabaseEncryptionConfig from a dict
restore_database_encryption_config_from_dict = RestoreDatabaseEncryptionConfig.from_dict(restore_database_encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


