# ExportMetadataEncryptionKey

Encryption key details for the exported artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmek** | **str** | Name of the CMEK. | [optional] 
**version** | **str** | Version of the CMEK. | [optional] 

## Example

```python
from openapi_client.models.export_metadata_encryption_key import ExportMetadataEncryptionKey

# TODO update the JSON string below
json = "{}"
# create an instance of ExportMetadataEncryptionKey from a JSON string
export_metadata_encryption_key_instance = ExportMetadataEncryptionKey.from_json(json)
# print the JSON string representation of the object
print(ExportMetadataEncryptionKey.to_json())

# convert the object into a dict
export_metadata_encryption_key_dict = export_metadata_encryption_key_instance.to_dict()
# create an instance of ExportMetadataEncryptionKey from a dict
export_metadata_encryption_key_from_dict = ExportMetadataEncryptionKey.from_dict(export_metadata_encryption_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


