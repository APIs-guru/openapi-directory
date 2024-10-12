# StorageSourceManifest

Location of the source manifest in Google Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Google Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). | [optional] 
**generation** | **str** | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. | [optional] 
**object** | **str** | Google Cloud Storage object containing the source manifest. This object must be a JSON file. | [optional] 

## Example

```python
from openapi_client.models.storage_source_manifest import StorageSourceManifest

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSourceManifest from a JSON string
storage_source_manifest_instance = StorageSourceManifest.from_json(json)
# print the JSON string representation of the object
print(StorageSourceManifest.to_json())

# convert the object into a dict
storage_source_manifest_dict = storage_source_manifest_instance.to_dict()
# create an instance of StorageSourceManifest from a dict
storage_source_manifest_from_dict = StorageSourceManifest.from_dict(storage_source_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


