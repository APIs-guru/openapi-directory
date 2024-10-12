# StorageEncryptedAssetDecryptionData

Data needed to decrypt asset files encrypted with legacy storage encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_file_encryption_metadata** | [**List[AssetFileEncryptionMetadata]**](AssetFileEncryptionMetadata.md) | Asset File encryption metadata. | [optional] 
**key** | **bytearray** | The Asset File storage encryption key. | [optional] 

## Example

```python
from openapi_client.models.storage_encrypted_asset_decryption_data import StorageEncryptedAssetDecryptionData

# TODO update the JSON string below
json = "{}"
# create an instance of StorageEncryptedAssetDecryptionData from a JSON string
storage_encrypted_asset_decryption_data_instance = StorageEncryptedAssetDecryptionData.from_json(json)
# print the JSON string representation of the object
print(StorageEncryptedAssetDecryptionData.to_json())

# convert the object into a dict
storage_encrypted_asset_decryption_data_dict = storage_encrypted_asset_decryption_data_instance.to_dict()
# create an instance of StorageEncryptedAssetDecryptionData from a dict
storage_encrypted_asset_decryption_data_from_dict = StorageEncryptedAssetDecryptionData.from_dict(storage_encrypted_asset_decryption_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


