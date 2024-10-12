# AssetStorageEncryptionKey

The Asset Storage encryption key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_encryption_key** | **str** | The Asset storage encryption key. | [optional] 

## Example

```python
from openapi_client.models.asset_storage_encryption_key import AssetStorageEncryptionKey

# TODO update the JSON string below
json = "{}"
# create an instance of AssetStorageEncryptionKey from a JSON string
asset_storage_encryption_key_instance = AssetStorageEncryptionKey.from_json(json)
# print the JSON string representation of the object
print(AssetStorageEncryptionKey.to_json())

# convert the object into a dict
asset_storage_encryption_key_dict = asset_storage_encryption_key_instance.to_dict()
# create an instance of AssetStorageEncryptionKey from a dict
asset_storage_encryption_key_from_dict = AssetStorageEncryptionKey.from_dict(asset_storage_encryption_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


