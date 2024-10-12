# DataManagerList

DataManager resources Collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of data stores. | [optional] 
**value** | [**List[DataManager]**](DataManager.md) | List of data manager resources. | [optional] 

## Example

```python
from openapi_client.models.data_manager_list import DataManagerList

# TODO update the JSON string below
json = "{}"
# create an instance of DataManagerList from a JSON string
data_manager_list_instance = DataManagerList.from_json(json)
# print the JSON string representation of the object
print(DataManagerList.to_json())

# convert the object into a dict
data_manager_list_dict = data_manager_list_instance.to_dict()
# create an instance of DataManagerList from a dict
data_manager_list_from_dict = DataManagerList.from_dict(data_manager_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


