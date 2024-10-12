# CloudStorageFile

The export file in Cloud Storage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name. | [optional] 
**md5_hash** | **str** | The md5 hash of the file. | [optional] 
**object_name** | **str** | The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api). | [optional] 
**size** | **str** | The export file size. | [optional] 

## Example

```python
from openapi_client.models.cloud_storage_file import CloudStorageFile

# TODO update the JSON string below
json = "{}"
# create an instance of CloudStorageFile from a JSON string
cloud_storage_file_instance = CloudStorageFile.from_json(json)
# print the JSON string representation of the object
print(CloudStorageFile.to_json())

# convert the object into a dict
cloud_storage_file_dict = cloud_storage_file_instance.to_dict()
# create an instance of CloudStorageFile from a dict
cloud_storage_file_from_dict = CloudStorageFile.from_dict(cloud_storage_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


