# PathFilter

Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_filters** | [**List[EventFilter]**](EventFilter.md) | Filter on an event to be applied to some part of the path. | [optional] 
**path_match_position** | **str** | The position of the path the filter should match to (first, last, or any event in path). | [optional] 

## Example

```python
from openapi_client.models.path_filter import PathFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PathFilter from a JSON string
path_filter_instance = PathFilter.from_json(json)
# print the JSON string representation of the object
print(PathFilter.to_json())

# convert the object into a dict
path_filter_dict = path_filter_instance.to_dict()
# create an instance of PathFilter from a dict
path_filter_from_dict = PathFilter.from_dict(path_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


