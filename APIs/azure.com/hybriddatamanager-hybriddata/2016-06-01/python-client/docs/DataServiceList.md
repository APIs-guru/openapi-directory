# DataServiceList

Data Service Collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of data services. | [optional] 
**value** | [**List[DataService]**](DataService.md) | List of data services. | [optional] 

## Example

```python
from openapi_client.models.data_service_list import DataServiceList

# TODO update the JSON string below
json = "{}"
# create an instance of DataServiceList from a JSON string
data_service_list_instance = DataServiceList.from_json(json)
# print the JSON string representation of the object
print(DataServiceList.to_json())

# convert the object into a dict
data_service_list_dict = data_service_list_instance.to_dict()
# create an instance of DataServiceList from a dict
data_service_list_from_dict = DataServiceList.from_dict(data_service_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


