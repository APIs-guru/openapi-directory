# TimeSeriesHierarchyOrError

Result of a batch operation on a particular time series hierarchy. Hierarchy is set when operation is successful and error object is set when operation is unsuccessful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TsiErrorBody**](TsiErrorBody.md) |  | [optional] 
**hierarchy** | [**TimeSeriesHierarchy**](TimeSeriesHierarchy.md) |  | [optional] 

## Example

```python
from openapi_client.models.time_series_hierarchy_or_error import TimeSeriesHierarchyOrError

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesHierarchyOrError from a JSON string
time_series_hierarchy_or_error_instance = TimeSeriesHierarchyOrError.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesHierarchyOrError.to_json())

# convert the object into a dict
time_series_hierarchy_or_error_dict = time_series_hierarchy_or_error_instance.to_dict()
# create an instance of TimeSeriesHierarchyOrError from a dict
time_series_hierarchy_or_error_from_dict = TimeSeriesHierarchyOrError.from_dict(time_series_hierarchy_or_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


