# ADLSGen1FolderProperties

Properties of the ADLS Gen1 folder data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The ADLS account name. | 
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**folder_path** | **str** | The folder path within the ADLS account. | 
**resource_group** | **str** | Resource group of ADLS account. | 
**subscription_id** | **str** | Subscription id of ADLS account. | 

## Example

```python
from openapi_client.models.adls_gen1_folder_properties import ADLSGen1FolderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen1FolderProperties from a JSON string
adls_gen1_folder_properties_instance = ADLSGen1FolderProperties.from_json(json)
# print the JSON string representation of the object
print(ADLSGen1FolderProperties.to_json())

# convert the object into a dict
adls_gen1_folder_properties_dict = adls_gen1_folder_properties_instance.to_dict()
# create an instance of ADLSGen1FolderProperties from a dict
adls_gen1_folder_properties_from_dict = ADLSGen1FolderProperties.from_dict(adls_gen1_folder_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


