# ADLSGen2FileSystemDataSetMapping

An ADLS Gen2 file system data set mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ADLSGen2FileSystemDataSetMappingProperties**](ADLSGen2FileSystemDataSetMappingProperties.md) |  | 
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.adls_gen2_file_system_data_set_mapping import ADLSGen2FileSystemDataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FileSystemDataSetMapping from a JSON string
adls_gen2_file_system_data_set_mapping_instance = ADLSGen2FileSystemDataSetMapping.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FileSystemDataSetMapping.to_json())

# convert the object into a dict
adls_gen2_file_system_data_set_mapping_dict = adls_gen2_file_system_data_set_mapping_instance.to_dict()
# create an instance of ADLSGen2FileSystemDataSetMapping from a dict
adls_gen2_file_system_data_set_mapping_from_dict = ADLSGen2FileSystemDataSetMapping.from_dict(adls_gen2_file_system_data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


