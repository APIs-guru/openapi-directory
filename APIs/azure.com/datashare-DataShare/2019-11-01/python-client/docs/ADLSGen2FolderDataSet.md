# ADLSGen2FolderDataSet

An ADLS Gen 2 folder data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ADLSGen2FolderProperties**](ADLSGen2FolderProperties.md) |  | 
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.adls_gen2_folder_data_set import ADLSGen2FolderDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of ADLSGen2FolderDataSet from a JSON string
adls_gen2_folder_data_set_instance = ADLSGen2FolderDataSet.from_json(json)
# print the JSON string representation of the object
print(ADLSGen2FolderDataSet.to_json())

# convert the object into a dict
adls_gen2_folder_data_set_dict = adls_gen2_folder_data_set_instance.to_dict()
# create an instance of ADLSGen2FolderDataSet from a dict
adls_gen2_folder_data_set_from_dict = ADLSGen2FolderDataSet.from_dict(adls_gen2_folder_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


