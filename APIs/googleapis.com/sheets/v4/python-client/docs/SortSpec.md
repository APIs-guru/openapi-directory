# SortSpec

A sort order associated with a specific column or row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**Color**](Color.md) |  | [optional] 
**background_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**data_source_column_reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 
**dimension_index** | **int** | The dimension the sort should be applied to. | [optional] 
**foreground_color** | [**Color**](Color.md) |  | [optional] 
**foreground_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**sort_order** | **str** | The order data should be sorted. | [optional] 

## Example

```python
from openapi_client.models.sort_spec import SortSpec

# TODO update the JSON string below
json = "{}"
# create an instance of SortSpec from a JSON string
sort_spec_instance = SortSpec.from_json(json)
# print the JSON string representation of the object
print(SortSpec.to_json())

# convert the object into a dict
sort_spec_dict = sort_spec_instance.to_dict()
# create an instance of SortSpec from a dict
sort_spec_from_dict = SortSpec.from_dict(sort_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


