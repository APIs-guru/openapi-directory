# FilterSpec

The filter criteria associated with a specific column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_index** | **int** | The zero-based column index. | [optional] 
**data_source_column_reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 
**filter_criteria** | [**FilterCriteria**](FilterCriteria.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter_spec import FilterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of FilterSpec from a JSON string
filter_spec_instance = FilterSpec.from_json(json)
# print the JSON string representation of the object
print(FilterSpec.to_json())

# convert the object into a dict
filter_spec_dict = filter_spec_instance.to_dict()
# create an instance of FilterSpec from a dict
filter_spec_from_dict = FilterSpec.from_dict(filter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


