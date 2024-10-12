# DataStore

Data store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataStoreProperties**](DataStoreProperties.md) |  | 
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

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


