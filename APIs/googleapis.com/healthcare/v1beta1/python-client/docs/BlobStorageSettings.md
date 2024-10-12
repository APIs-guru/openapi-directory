# BlobStorageSettings

Settings for data stored in Blob storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_class** | **str** | The Storage class in which the Blob data is stored. | [optional] 

## Example

```python
from openapi_client.models.blob_storage_settings import BlobStorageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BlobStorageSettings from a JSON string
blob_storage_settings_instance = BlobStorageSettings.from_json(json)
# print the JSON string representation of the object
print(BlobStorageSettings.to_json())

# convert the object into a dict
blob_storage_settings_dict = blob_storage_settings_instance.to_dict()
# create an instance of BlobStorageSettings from a dict
blob_storage_settings_from_dict = BlobStorageSettings.from_dict(blob_storage_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


