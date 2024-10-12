# ADLSGen2FileSystemDataSetMappingProperties

ADLS Gen 2 file system data set mapping property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**file_system** | **str** | The file system name. | 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 
**resource_group** | **str** | Resource group of storage account. | 
**storage_account_name** | **str** | Storage account name of the source data set. | 
**subscription_id** | **str** | Subscription id of storage account. | 

## Example

```python
from openapi_client.models.adls_gen2_file_system_data_set_mapping_properties import ADLSGen2FileSystemDataSetMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FileSystemDataSetMappingProperties from a JSON string
adls_gen2_file_system_data_set_mapping_properties_instance = ADLSGen2FileSystemDataSetMappingProperties.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FileSystemDataSetMappingProperties.to_json())

# convert the object into a dict
adls_gen2_file_system_data_set_mapping_properties_dict = adls_gen2_file_system_data_set_mapping_properties_instance.to_dict()
# create an instance of ADLSGen2FileSystemDataSetMappingProperties from a dict
adls_gen2_file_system_data_set_mapping_properties_from_dict = ADLSGen2FileSystemDataSetMappingProperties.from_dict(adls_gen2_file_system_data_set_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


