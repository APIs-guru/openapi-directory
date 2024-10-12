# DimensionProperties

Properties about a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_column_reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 
**developer_metadata** | [**List[DeveloperMetadata]**](DeveloperMetadata.md) | The developer metadata associated with a single row or column. | [optional] 
**hidden_by_filter** | **bool** | True if this dimension is being filtered. This field is read-only. | [optional] 
**hidden_by_user** | **bool** | True if this dimension is explicitly hidden. | [optional] 
**pixel_size** | **int** | The height (if a row) or width (if a column) of the dimension in pixels. | [optional] 

## Example

```python
from openapi_client.models.dimension_properties import DimensionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionProperties from a JSON string
dimension_properties_instance = DimensionProperties.from_json(json)
# print the JSON string representation of the object
print(DimensionProperties.to_json())

# convert the object into a dict
dimension_properties_dict = dimension_properties_instance.to_dict()
# create an instance of DimensionProperties from a dict
dimension_properties_from_dict = DimensionProperties.from_dict(dimension_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


