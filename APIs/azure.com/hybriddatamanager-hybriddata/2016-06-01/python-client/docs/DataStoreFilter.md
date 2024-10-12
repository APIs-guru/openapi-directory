# DataStoreFilter

Contains the information about the filters for the DataStore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_type_id** | **str** | The data store type id. | [optional] 

## Example

```python
from openapi_client.models.data_store_filter import DataStoreFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreFilter from a JSON string
data_store_filter_instance = DataStoreFilter.from_json(json)
# print the JSON string representation of the object
print(DataStoreFilter.to_json())

# convert the object into a dict
data_store_filter_dict = data_store_filter_instance.to_dict()
# create an instance of DataStoreFilter from a dict
data_store_filter_from_dict = DataStoreFilter.from_dict(data_store_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


