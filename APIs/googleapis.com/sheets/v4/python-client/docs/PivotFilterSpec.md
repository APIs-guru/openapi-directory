# PivotFilterSpec

The pivot table filter criteria associated with a specific source column offset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_offset_index** | **int** | The zero-based column offset of the source range. | [optional] 
**data_source_column_reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 
**filter_criteria** | [**PivotFilterCriteria**](PivotFilterCriteria.md) |  | [optional] 

## Example

```python
from openapi_client.models.pivot_filter_spec import PivotFilterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of PivotFilterSpec from a JSON string
pivot_filter_spec_instance = PivotFilterSpec.from_json(json)
# print the JSON string representation of the object
print(PivotFilterSpec.to_json())

# convert the object into a dict
pivot_filter_spec_dict = pivot_filter_spec_instance.to_dict()
# create an instance of PivotFilterSpec from a dict
pivot_filter_spec_from_dict = PivotFilterSpec.from_dict(pivot_filter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


