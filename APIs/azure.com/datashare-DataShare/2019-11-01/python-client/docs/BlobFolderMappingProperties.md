# BlobFolderMappingProperties

Azure storage Blob folder data set mapping property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Container that has the file path. | 
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**prefix** | **str** | Prefix for blob folder | 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 
**resource_group** | **str** | Resource group of storage account. | 
**storage_account_name** | **str** | Storage account name of the source data set. | 
**subscription_id** | **str** | Subscription id of storage account. | 

## Example

```python
from openapi_client.models.blob_folder_mapping_properties import BlobFolderMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobFolderMappingProperties from a JSON string
blob_folder_mapping_properties_instance = BlobFolderMappingProperties.from_json(json)
# print the JSON string representation of the object
print(BlobFolderMappingProperties.to_json())

# convert the object into a dict
blob_folder_mapping_properties_dict = blob_folder_mapping_properties_instance.to_dict()
# create an instance of BlobFolderMappingProperties from a dict
blob_folder_mapping_properties_from_dict = BlobFolderMappingProperties.from_dict(blob_folder_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


