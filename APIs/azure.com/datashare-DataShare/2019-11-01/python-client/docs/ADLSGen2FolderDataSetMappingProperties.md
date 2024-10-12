# ADLSGen2FolderDataSetMappingProperties

ADLS Gen 2 folder data set mapping property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**file_system** | **str** | File system to which the folder belongs. | 
**folder_path** | **str** | Folder path within the file system. | 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 
**resource_group** | **str** | Resource group of storage account. | 
**storage_account_name** | **str** | Storage account name of the source data set. | 
**subscription_id** | **str** | Subscription id of storage account. | 

## Example

```python
from openapi_client.models.adls_gen2_folder_data_set_mapping_properties import ADLSGen2FolderDataSetMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FolderDataSetMappingProperties from a JSON string
adls_gen2_folder_data_set_mapping_properties_instance = ADLSGen2FolderDataSetMappingProperties.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FolderDataSetMappingProperties.to_json())

# convert the object into a dict
adls_gen2_folder_data_set_mapping_properties_dict = adls_gen2_folder_data_set_mapping_properties_instance.to_dict()
# create an instance of ADLSGen2FolderDataSetMappingProperties from a dict
adls_gen2_folder_data_set_mapping_properties_from_dict = ADLSGen2FolderDataSetMappingProperties.from_dict(adls_gen2_folder_data_set_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


