# TimeSeriesHierarchy

Time series hierarchy organizes time series instances into a tree.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique hierarchy identifier that is a immutable GUID. Can be null while creating hierarchy objects and then server generates the id, not null on get and delete operations. | [optional] 
**name** | **str** | User-given unique name for the type. It is mutable and not null. | 
**source** | [**TimeSeriesHierarchySource**](TimeSeriesHierarchySource.md) |  | 

## Example

```python
from openapi_client.models.time_series_hierarchy import TimeSeriesHierarchy

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesHierarchy from a JSON string
time_series_hierarchy_instance = TimeSeriesHierarchy.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesHierarchy.to_json())

# convert the object into a dict
time_series_hierarchy_dict = time_series_hierarchy_instance.to_dict()
# create an instance of TimeSeriesHierarchy from a dict
time_series_hierarchy_from_dict = TimeSeriesHierarchy.from_dict(time_series_hierarchy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


