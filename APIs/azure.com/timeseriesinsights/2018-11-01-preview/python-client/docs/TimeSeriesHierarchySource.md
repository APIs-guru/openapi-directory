# TimeSeriesHierarchySource

Definition of how time series hierarchy tree levels are created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_field_names** | **List[str]** | List of instance field names that must be set in all time series instances that belong to this hierarchy. The order of the instance fields defines the levels in the hierarchy. | [optional] 

## Example

```python
from openapi_client.models.time_series_hierarchy_source import TimeSeriesHierarchySource

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesHierarchySource from a JSON string
time_series_hierarchy_source_instance = TimeSeriesHierarchySource.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesHierarchySource.to_json())

# convert the object into a dict
time_series_hierarchy_source_dict = time_series_hierarchy_source_instance.to_dict()
# create an instance of TimeSeriesHierarchySource from a dict
time_series_hierarchy_source_from_dict = TimeSeriesHierarchySource.from_dict(time_series_hierarchy_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


