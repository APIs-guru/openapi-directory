# EventsDependencyResult

A dependency result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependency** | [**EventsDependencyInfo**](EventsDependencyInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.events_dependency_result import EventsDependencyResult

# TODO update the JSON string below
json = "{}"
# create an instance of EventsDependencyResult from a JSON string
events_dependency_result_instance = EventsDependencyResult.from_json(json)
# print the JSON string representation of the object
print(EventsDependencyResult.to_json())

# convert the object into a dict
events_dependency_result_dict = events_dependency_result_instance.to_dict()
# create an instance of EventsDependencyResult from a dict
events_dependency_result_from_dict = EventsDependencyResult.from_dict(events_dependency_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


