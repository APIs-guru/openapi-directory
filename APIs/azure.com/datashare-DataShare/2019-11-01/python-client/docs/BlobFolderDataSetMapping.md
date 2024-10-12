# BlobFolderDataSetMapping

A Blob folder data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobFolderMappingProperties**](BlobFolderMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_folder_data_set_mapping import BlobFolderDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of BlobFolderDataSetMapping from a JSON string
blob_folder_data_set_mapping_instance = BlobFolderDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(BlobFolderDataSetMapping.to_json())

# convert the object into a dict
blob_folder_data_set_mapping_dict = blob_folder_data_set_mapping_instance.to_dict()
# create an instance of BlobFolderDataSetMapping from a dict
blob_folder_data_set_mapping_from_dict = BlobFolderDataSetMapping.from_dict(blob_folder_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


