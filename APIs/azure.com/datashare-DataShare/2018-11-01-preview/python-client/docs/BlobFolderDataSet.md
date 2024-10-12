# BlobFolderDataSet

An Azure storage blob folder data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlobFolderProperties**](BlobFolderProperties.md) |  | 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_folder_data_set import BlobFolderDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of BlobFolderDataSet from a JSON string
blob_folder_data_set_instance = BlobFolderDataSet.from_json(json)
# print the JSON string representation of the object
print(BlobFolderDataSet.to_json())

# convert the object into a dict
blob_folder_data_set_dict = blob_folder_data_set_instance.to_dict()
# create an instance of BlobFolderDataSet from a dict
blob_folder_data_set_from_dict = BlobFolderDataSet.from_dict(blob_folder_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


