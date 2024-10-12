# StorageInfo

StorageInfo encapsulates all the storage info of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_info** | [**BlobStorageInfo**](BlobStorageInfo.md) |  | [optional] 
**referenced_resource** | **str** | The resource whose storage info is returned. For example, to specify the resource path of a DICOM Instance: &#x60;projects/{projectid}/datasets/{datasetid}/dicomStores/{dicom_store_id}/dicomWeb/studi/{study_uid}/series/{series_uid}/instances/{instance_uid}&#x60; | [optional] 
**structured_storage_info** | [**StructuredStorageInfo**](StructuredStorageInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_info import StorageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StorageInfo from a JSON string
storage_info_instance = StorageInfo.from_json(json)
# print the JSON string representation of the object
print(StorageInfo.to_json())

# convert the object into a dict
storage_info_dict = storage_info_instance.to_dict()
# create an instance of StorageInfo from a dict
storage_info_from_dict = StorageInfo.from_dict(storage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


