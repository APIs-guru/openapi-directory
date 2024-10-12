# StorageSource

StorageSource describes the location of the source in an archive file in Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Google Cloud Storage bucket containing source (see [Bucket Name Requirements] (https://cloud.google.com/storage/docs/bucket-naming#requirements)). | [optional] 
**generation** | **str** | Google Cloud Storage generation for the object. | [optional] 
**object** | **str** | Google Cloud Storage object containing source. | [optional] 

## Example

```python
from openapi_client.models.storage_source import StorageSource

# TODO update the JSON string below
json = "{}"
# create an instance of StorageSource from a JSON string
storage_source_instance = StorageSource.from_json(json)
# print the JSON string representation of the object
print(StorageSource.to_json())

# convert the object into a dict
storage_source_dict = storage_source_instance.to_dict()
# create an instance of StorageSource from a dict
storage_source_from_dict = StorageSource.from_dict(storage_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


