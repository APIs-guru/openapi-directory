# DataStoreList

Data Store Collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of data stores. | [optional] 
**value** | [**List[DataStore]**](DataStore.md) | List of data stores. | [optional] 

## Example

```python
from openapi_client.models.data_store_list import DataStoreList

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreList from a JSON string
data_store_list_instance = DataStoreList.from_json(json)
# print the JSON string representation of the object
print(DataStoreList.to_json())

# convert the object into a dict
data_store_list_dict = data_store_list_instance.to_dict()
# create an instance of DataStoreList from a dict
data_store_list_from_dict = DataStoreList.from_dict(data_store_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


