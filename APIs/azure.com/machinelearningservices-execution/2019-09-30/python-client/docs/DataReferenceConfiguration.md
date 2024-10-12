# DataReferenceConfiguration

A class for managing DataReferenceConfiguration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** | The name of the data store. | [optional] 
**mode** | **str** | Operation on the datastore, mount, download, upload. | [optional] 
**overwrite** | **bool** | Whether to overwrite the data if existing. | [optional] 
**path_on_compute** | **str** | The path on the compute target. | [optional] 
**path_on_data_store** | **str** | Relative path on the datastore. | [optional] 

## Example

```python
from openapi_client.models.data_reference_configuration import DataReferenceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DataReferenceConfiguration from a JSON string
data_reference_configuration_instance = DataReferenceConfiguration.from_json(json)
# print the JSON string representation of the object
print(DataReferenceConfiguration.to_json())

# convert the object into a dict
data_reference_configuration_dict = data_reference_configuration_instance.to_dict()
# create an instance of DataReferenceConfiguration from a dict
data_reference_configuration_from_dict = DataReferenceConfiguration.from_dict(data_reference_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


