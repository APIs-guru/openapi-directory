# Response

A single response from an update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_banding** | [**AddBandingResponse**](AddBandingResponse.md) |  | [optional] 
**add_chart** | [**AddChartResponse**](AddChartResponse.md) |  | [optional] 
**add_data_source** | [**AddDataSourceResponse**](AddDataSourceResponse.md) |  | [optional] 
**add_dimension_group** | [**AddDimensionGroupResponse**](AddDimensionGroupResponse.md) |  | [optional] 
**add_filter_view** | [**AddFilterViewResponse**](AddFilterViewResponse.md) |  | [optional] 
**add_named_range** | [**AddNamedRangeResponse**](AddNamedRangeResponse.md) |  | [optional] 
**add_protected_range** | [**AddProtectedRangeResponse**](AddProtectedRangeResponse.md) |  | [optional] 
**add_sheet** | [**AddSheetResponse**](AddSheetResponse.md) |  | [optional] 
**add_slicer** | [**AddSlicerResponse**](AddSlicerResponse.md) |  | [optional] 
**create_developer_metadata** | [**CreateDeveloperMetadataResponse**](CreateDeveloperMetadataResponse.md) |  | [optional] 
**delete_conditional_format_rule** | [**DeleteConditionalFormatRuleResponse**](DeleteConditionalFormatRuleResponse.md) |  | [optional] 
**delete_developer_metadata** | [**DeleteDeveloperMetadataResponse**](DeleteDeveloperMetadataResponse.md) |  | [optional] 
**delete_dimension_group** | [**DeleteDimensionGroupResponse**](DeleteDimensionGroupResponse.md) |  | [optional] 
**delete_duplicates** | [**DeleteDuplicatesResponse**](DeleteDuplicatesResponse.md) |  | [optional] 
**duplicate_filter_view** | [**DuplicateFilterViewResponse**](DuplicateFilterViewResponse.md) |  | [optional] 
**duplicate_sheet** | [**DuplicateSheetResponse**](DuplicateSheetResponse.md) |  | [optional] 
**find_replace** | [**FindReplaceResponse**](FindReplaceResponse.md) |  | [optional] 
**refresh_data_source** | [**RefreshDataSourceResponse**](RefreshDataSourceResponse.md) |  | [optional] 
**trim_whitespace** | [**TrimWhitespaceResponse**](TrimWhitespaceResponse.md) |  | [optional] 
**update_conditional_format_rule** | [**UpdateConditionalFormatRuleResponse**](UpdateConditionalFormatRuleResponse.md) |  | [optional] 
**update_data_source** | [**UpdateDataSourceResponse**](UpdateDataSourceResponse.md) |  | [optional] 
**update_developer_metadata** | [**UpdateDeveloperMetadataResponse**](UpdateDeveloperMetadataResponse.md) |  | [optional] 
**update_embedded_object_position** | [**UpdateEmbeddedObjectPositionResponse**](UpdateEmbeddedObjectPositionResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.response import Response

# TODO update the JSON string below
json = "{}"
# create an instance of Response from a JSON string
response_instance = Response.from_json(json)
# print the JSON string representation of the object
print(Response.to_json())

# convert the object into a dict
response_dict = response_instance.to_dict()
# create an instance of Response from a dict
response_from_dict = Response.from_dict(response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


