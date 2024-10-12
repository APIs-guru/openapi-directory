# ADLSGen2FolderDataSetMapping

An ADLS Gen2 folder data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ADLSGen2FolderDataSetMappingProperties**](ADLSGen2FolderDataSetMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.adls_gen2_folder_data_set_mapping import ADLSGen2FolderDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FolderDataSetMapping from a JSON string
adls_gen2_folder_data_set_mapping_instance = ADLSGen2FolderDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FolderDataSetMapping.to_json())

# convert the object into a dict
adls_gen2_folder_data_set_mapping_dict = adls_gen2_folder_data_set_mapping_instance.to_dict()
# create an instance of ADLSGen2FolderDataSetMapping from a dict
adls_gen2_folder_data_set_mapping_from_dict = ADLSGen2FolderDataSetMapping.from_dict(adls_gen2_folder_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


