# ReportDataset

The definition of data present in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Dict[str, ReportAggregation]**](ReportAggregation.md) | Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses. | [optional] 
**configuration** | [**ReportDatasetConfiguration**](ReportDatasetConfiguration.md) |  | [optional] 
**filter** | [**ReportFilter**](ReportFilter.md) |  | [optional] 
**granularity** | **str** | The granularity of rows in the report. | [optional] 
**grouping** | [**List[ReportGrouping]**](ReportGrouping.md) | Array of group by expression to use in the report. Report can have up to 2 group by clauses. | [optional] 

## Example

```python
from openapi_client.models.report_dataset import ReportDataset

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDataset from a JSON string
report_dataset_instance = ReportDataset.from_json(json)
# print the JSON string representation of the object
print(ReportDataset.to_json())

# convert the object into a dict
report_dataset_dict = report_dataset_instance.to_dict()
# create an instance of ReportDataset from a dict
report_dataset_from_dict = ReportDataset.from_dict(report_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


