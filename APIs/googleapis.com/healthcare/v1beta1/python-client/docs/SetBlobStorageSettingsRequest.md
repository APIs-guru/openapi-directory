# SetBlobStorageSettingsRequest

Request message for `SetBlobStorageSettings` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_settings** | [**BlobStorageSettings**](BlobStorageSettings.md) |  | [optional] 
**filter_config** | [**DicomFilterConfig**](DicomFilterConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_blob_storage_settings_request import SetBlobStorageSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetBlobStorageSettingsRequest from a JSON string
set_blob_storage_settings_request_instance = SetBlobStorageSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(SetBlobStorageSettingsRequest.to_json())

# convert the object into a dict
set_blob_storage_settings_request_dict = set_blob_storage_settings_request_instance.to_dict()
# create an instance of SetBlobStorageSettingsRequest from a dict
set_blob_storage_settings_request_from_dict = SetBlobStorageSettingsRequest.from_dict(set_blob_storage_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


