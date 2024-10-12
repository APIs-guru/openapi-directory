# AutoResizeDimensionsRequest

Automatically resizes one or more dimensions based on the contents of the cells in that dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_sheet_dimensions** | [**DataSourceSheetDimensionRange**](DataSourceSheetDimensionRange.md) |  | [optional] 
**dimensions** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.auto_resize_dimensions_request import AutoResizeDimensionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AutoResizeDimensionsRequest from a JSON string
auto_resize_dimensions_request_instance = AutoResizeDimensionsRequest.from_json(json)
# print the JSON string representation of the object
print(AutoResizeDimensionsRequest.to_json())

# convert the object into a dict
auto_resize_dimensions_request_dict = auto_resize_dimensions_request_instance.to_dict()
# create an instance of AutoResizeDimensionsRequest from a dict
auto_resize_dimensions_request_from_dict = AutoResizeDimensionsRequest.from_dict(auto_resize_dimensions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


