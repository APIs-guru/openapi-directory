# ADLSGen2FileSystemDataSet

An ADLS Gen 2 file system data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ADLSGen2FileSystemProperties**](ADLSGen2FileSystemProperties.md) |  | 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.adls_gen2_file_system_data_set import ADLSGen2FileSystemDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FileSystemDataSet from a JSON string
adls_gen2_file_system_data_set_instance = ADLSGen2FileSystemDataSet.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FileSystemDataSet.to_json())

# convert the object into a dict
adls_gen2_file_system_data_set_dict = adls_gen2_file_system_data_set_instance.to_dict()
# create an instance of ADLSGen2FileSystemDataSet from a dict
adls_gen2_file_system_data_set_from_dict = ADLSGen2FileSystemDataSet.from_dict(adls_gen2_file_system_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


