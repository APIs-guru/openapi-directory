# EventsDependencyInfo

The dependency info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The data of the dependency | [optional] 
**duration** | **int** | The duration of the dependency | [optional] 
**id** | **str** | The ID of the dependency | [optional] 
**name** | **str** | The name of the dependency | [optional] 
**performance_bucket** | **str** | The performance bucket of the dependency | [optional] 
**result_code** | **str** | The result code of the dependency | [optional] 
**success** | **str** | Indicates if the dependency was successful | [optional] 
**target** | **str** | The target of the dependency | [optional] 
**type** | **str** | The type of the dependency | [optional] 

## Example

```python
from openapi_client.models.events_dependency_info import EventsDependencyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDependencyInfo from a JSON string
events_dependency_info_instance = EventsDependencyInfo.from_json(json)
# print the JSON string representation of the object
print(EventsDependencyInfo.to_json())

# convert the object into a dict
events_dependency_info_dict = events_dependency_info_instance.to_dict()
# create an instance of EventsDependencyInfo from a dict
events_dependency_info_from_dict = EventsDependencyInfo.from_dict(events_dependency_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


