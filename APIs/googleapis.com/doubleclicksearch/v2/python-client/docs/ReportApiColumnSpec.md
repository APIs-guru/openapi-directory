# ReportApiColumnSpec

A request object used to create a DoubleClick Search report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_name** | **str** | Name of a DoubleClick Search column to include in the report. | [optional] 
**custom_dimension_name** | **str** | Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.\\ If used in a conversion report, returns the value of the specified custom dimension for the given conversion, if set. This column does not segment the conversion report. | [optional] 
**custom_metric_name** | **str** | Name of a custom metric to include in the report. The report must be scoped to an advertiser or lower, and the custom metric must already be set up in DoubleClick Search. The custom metric name, which appears in DoubleClick Search, is case sensitive. | [optional] 
**end_date** | **str** | Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with &#x60;startDate&#x60;. | [optional] 
**group_by_column** | **bool** | Synchronous report only. Set to &#x60;true&#x60; to group by this column. Defaults to &#x60;false&#x60;. | [optional] 
**header_text** | **str** | Text used to identify this column in the report output; defaults to &#x60;columnName&#x60; or &#x60;savedColumnName&#x60; when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name. | [optional] 
**platform_source** | **str** | The platform that is used to provide data for the custom dimension. Acceptable values are \&quot;floodlight\&quot;. | [optional] 
**product_report_perspective** | **str** | Returns metrics only for a specific type of product activity. Accepted values are: - \&quot;&#x60;sold&#x60;\&quot;: returns metrics only for products that were sold - \&quot;&#x60;advertised&#x60;\&quot;: returns metrics only for products that were advertised in a Shopping campaign, and that might or might not have been sold  | [optional] 
**saved_column_name** | **str** | Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI. | [optional] 
**start_date** | **str** | Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with &#x60;endDate&#x60;. | [optional] 

## Example

```python
from openapi_client.models.report_api_column_spec import ReportApiColumnSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ReportApiColumnSpec from a JSON string
report_api_column_spec_instance = ReportApiColumnSpec.from_json(json)
# print the JSON string representation of the object
print(ReportApiColumnSpec.to_json())

# convert the object into a dict
report_api_column_spec_dict = report_api_column_spec_instance.to_dict()
# create an instance of ReportApiColumnSpec from a dict
report_api_column_spec_from_dict = ReportApiColumnSpec.from_dict(report_api_column_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


