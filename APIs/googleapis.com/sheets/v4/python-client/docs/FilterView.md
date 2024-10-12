# FilterView

A filter view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**Dict[str, FilterCriteria]**](FilterCriteria.md) | The criteria for showing/hiding values per column. The map&#39;s key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. | [optional] 
**filter_specs** | [**List[FilterSpec]**](FilterSpec.md) | The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. | [optional] 
**filter_view_id** | **int** | The ID of the filter view. | [optional] 
**named_range_id** | **str** | The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**sort_specs** | [**List[SortSpec]**](SortSpec.md) | The sort order per column. Later specifications are used when values are equal in the earlier specifications. | [optional] 
**title** | **str** | The name of the filter view. | [optional] 

## Example

```python
from openapi_client.models.filter_view import FilterView

# TODO update the JSON string below
json = "{}"
# create an instance of FilterView from a JSON string
filter_view_instance = FilterView.from_json(json)
# print the JSON string representation of the object
print(FilterView.to_json())

# convert the object into a dict
filter_view_dict = filter_view_instance.to_dict()
# create an instance of FilterView from a dict
filter_view_from_dict = FilterView.from_dict(filter_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


