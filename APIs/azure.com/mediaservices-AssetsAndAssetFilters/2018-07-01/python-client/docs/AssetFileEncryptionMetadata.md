# AssetFileEncryptionMetadata

The Asset File Storage encryption metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_file_id** | **str** | The Asset File Id. | 
**asset_file_name** | **str** | The Asset File name. | [optional] 
**initialization_vector** | **str** | The Asset File initialization vector. | [optional] 

## Example

```python
from openapi_client.models.asset_file_encryption_metadata import AssetFileEncryptionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AssetFileEncryptionMetadata from a JSON string
asset_file_encryption_metadata_instance = AssetFileEncryptionMetadata.from_json(json)
# print the JSON string representation of the object
print(AssetFileEncryptionMetadata.to_json())

# convert the object into a dict
asset_file_encryption_metadata_dict = asset_file_encryption_metadata_instance.to_dict()
# create an instance of AssetFileEncryptionMetadata from a dict
asset_file_encryption_metadata_from_dict = AssetFileEncryptionMetadata.from_dict(asset_file_encryption_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


