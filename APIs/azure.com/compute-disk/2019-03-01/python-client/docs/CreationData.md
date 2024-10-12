# CreationData

Data used when creating a disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_option** | **str** | This enumerates the possible sources of a disk&#39;s creation. | 
**image_reference** | [**ImageDiskReference**](ImageDiskReference.md) |  | [optional] 
**source_resource_id** | **str** | If createOption is Copy, this is the ARM id of the source snapshot or disk. | [optional] 
**source_unique_id** | **str** | If this field is set, this is the unique id identifying the source of this resource. | [optional] [readonly] 
**source_uri** | **str** | If createOption is Import, this is the URI of a blob to be imported into a managed disk. | [optional] 
**storage_account_id** | **str** | If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription | [optional] 
**upload_size_bytes** | **int** | If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). | [optional] 

## Example

```python
from openapi_client.models.creation_data import CreationData

# TODO update the JSON string below
json = "{}"
# create an instance of CreationData from a JSON string
creation_data_instance = CreationData.from_json(json)
# print the JSON string representation of the object
print(CreationData.to_json())

# convert the object into a dict
creation_data_dict = creation_data_instance.to_dict()
# create an instance of CreationData from a dict
creation_data_from_dict = CreationData.from_dict(creation_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


