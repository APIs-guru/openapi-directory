# ADLSGen2FileProperties

Properties of the ADLS Gen2 file data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**file_path** | **str** | File path within the file system. | 
**file_system** | **str** | File system to which the file belongs. | 
**resource_group** | **str** | Resource group of storage account | 
**storage_account_name** | **str** | Storage account name of the source data set | 
**subscription_id** | **str** | Subscription id of storage account | 

## Example

```python
from openapi_client.models.adls_gen2_file_properties import ADLSGen2FileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FileProperties from a JSON string
adls_gen2_file_properties_instance = ADLSGen2FileProperties.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FileProperties.to_json())

# convert the object into a dict
adls_gen2_file_properties_dict = adls_gen2_file_properties_instance.to_dict()
# create an instance of ADLSGen2FileProperties from a dict
adls_gen2_file_properties_from_dict = ADLSGen2FileProperties.from_dict(adls_gen2_file_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


