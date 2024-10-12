# DataStoreTypeList

Data Store Type Collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of data store types. | [optional] 
**value** | [**List[DataStoreType]**](DataStoreType.md) | List of DataStoreType. | [optional] 

## Example

```python
from openapi_client.models.data_store_type_list import DataStoreTypeList

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreTypeList from a JSON string
data_store_type_list_instance = DataStoreTypeList.from_json(json)
# print the JSON string representation of the object
print(DataStoreTypeList.to_json())

# convert the object into a dict
data_store_type_list_dict = data_store_type_list_instance.to_dict()
# create an instance of DataStoreTypeList from a dict
data_store_type_list_from_dict = DataStoreTypeList.from_dict(data_store_type_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


