# ADLSGen2FileSystemProperties

Properties of the ADLS Gen2 file system data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**file_system** | **str** | The file system name. | 
**resource_group** | **str** | Resource group of storage account | 
**storage_account_name** | **str** | Storage account name of the source data set | 
**subscription_id** | **str** | Subscription id of storage account | 

## Example

```python
from openapi_client.models.adls_gen2_file_system_properties import ADLSGen2FileSystemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FileSystemProperties from a JSON string
adls_gen2_file_system_properties_instance = ADLSGen2FileSystemProperties.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FileSystemProperties.to_json())

# convert the object into a dict
adls_gen2_file_system_properties_dict = adls_gen2_file_system_properties_instance.to_dict()
# create an instance of ADLSGen2FileSystemProperties from a dict
adls_gen2_file_system_properties_from_dict = ADLSGen2FileSystemProperties.from_dict(adls_gen2_file_system_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


