# DataStore

The data store details of the MT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **str** | The capacity of data store in GBs. | [optional] 
**free_space** | **str** | The free space of data store in GBs. | [optional] 
**symbolic_name** | **str** | The symbolic name of data store. | [optional] 
**type** | **str** | The type of data store. | [optional] 
**uuid** | **str** | The uuid of data store. | [optional] 

## Example

```python
from openapi_client.models.data_store import DataStore

# TODO update the JSON string below
json = "{}"
# create an instance of DataStore from a JSON string
data_store_instance = DataStore.from_json(json)
# print the JSON string representation of the object
print(DataStore.to_json())

# convert the object into a dict
data_store_dict = data_store_instance.to_dict()
# create an instance of DataStore from a dict
data_store_from_dict = DataStore.from_dict(data_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


