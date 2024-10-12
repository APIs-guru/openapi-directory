# ADLSGen1FolderDataSet

An ADLS Gen 1 folder data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ADLSGen1FolderProperties**](ADLSGen1FolderProperties.md) |  | 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.adls_gen1_folder_data_set import ADLSGen1FolderDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen1FolderDataSet from a JSON string
adls_gen1_folder_data_set_instance = ADLSGen1FolderDataSet.from_json(json)
# print the JSON string representation of the object
print(ADLSGen1FolderDataSet.to_json())

# convert the object into a dict
adls_gen1_folder_data_set_dict = adls_gen1_folder_data_set_instance.to_dict()
# create an instance of ADLSGen1FolderDataSet from a dict
adls_gen1_folder_data_set_from_dict = ADLSGen1FolderDataSet.from_dict(adls_gen1_folder_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


