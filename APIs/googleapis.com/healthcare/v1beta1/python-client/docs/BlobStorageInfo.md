# BlobStorageInfo

BlobStorageInfo contains details about the data stored in Blob Storage for the referenced resource. Note: Storage class is only valid for DICOM and hence will only be populated for DICOM resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size_bytes** | **str** | Size in bytes of data stored in Blob Storage. | [optional] 
**storage_class** | **str** | The storage class in which the Blob data is stored. | [optional] 
**storage_class_update_time** | **str** | The time at which the storage class was updated. This is used to compute early deletion fees of the resource. | [optional] 

## Example

```python
from openapi_client.models.blob_storage_info import BlobStorageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BlobStorageInfo from a JSON string
blob_storage_info_instance = BlobStorageInfo.from_json(json)
# print the JSON string representation of the object
print(BlobStorageInfo.to_json())

# convert the object into a dict
blob_storage_info_dict = blob_storage_info_instance.to_dict()
# create an instance of BlobStorageInfo from a dict
blob_storage_info_from_dict = BlobStorageInfo.from_dict(blob_storage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


