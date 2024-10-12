# ADLSGen1FileProperties

Properties of the ADLS Gen1 file data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The ADLS account name. | 
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**file_name** | **str** | The file name in the ADLS account. | 
**folder_path** | **str** | The folder path within the ADLS account. | 
**resource_group** | **str** | Resource group of ADLS account. | 
**subscription_id** | **str** | Subscription id of ADLS account. | 

## Example

```python
from openapi_client.models.adls_gen1_file_properties import ADLSGen1FileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen1FileProperties from a JSON string
adls_gen1_file_properties_instance = ADLSGen1FileProperties.from_json(json)
# print the JSON string representation of the object
print(ADLSGen1FileProperties.to_json())

# convert the object into a dict
adls_gen1_file_properties_dict = adls_gen1_file_properties_instance.to_dict()
# create an instance of ADLSGen1FileProperties from a dict
adls_gen1_file_properties_from_dict = ADLSGen1FileProperties.from_dict(adls_gen1_file_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


