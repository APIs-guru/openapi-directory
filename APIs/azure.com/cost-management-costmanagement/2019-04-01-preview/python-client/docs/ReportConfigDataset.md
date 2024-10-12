# ReportConfigDataset

The definition of data present in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Dict[str, ReportConfigAggregation]**](ReportConfigAggregation.md) | Dictionary of aggregation expression to use in the report. The key of each item in the dictionary is the alias for the aggregated column. Report can have up to 2 aggregation clauses. | [optional] 
**configuration** | [**ReportConfigDatasetConfiguration**](ReportConfigDatasetConfiguration.md) |  | [optional] 
**filter** | [**ReportConfigFilter**](ReportConfigFilter.md) |  | [optional] 
**granularity** | **str** | The granularity of rows in the report. | [optional] 
**grouping** | [**List[ReportConfigGrouping]**](ReportConfigGrouping.md) | Array of group by expression to use in the report. Report can have up to 2 group by clauses. | [optional] 
**sorting** | [**List[ReportConfigSorting]**](ReportConfigSorting.md) | Array of order by expression to use in the report. | [optional] 

## Example

```python
from openapi_client.models.report_config_dataset import ReportConfigDataset

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigDataset from a JSON string
report_config_dataset_instance = ReportConfigDataset.from_json(json)
# print the JSON string representation of the object
print(ReportConfigDataset.to_json())

# convert the object into a dict
report_config_dataset_dict = report_config_dataset_instance.to_dict()
# create an instance of ReportConfigDataset from a dict
report_config_dataset_from_dict = ReportConfigDataset.from_dict(report_config_dataset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


