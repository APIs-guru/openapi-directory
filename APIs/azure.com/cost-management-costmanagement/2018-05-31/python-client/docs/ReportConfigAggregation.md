# ReportConfigAggregation

The aggregation expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function** | **str** | The name of the aggregation function to use. | 
**name** | **str** | The name of the column to aggregate. | 

## Example

```python
from openapi_client.models.report_config_aggregation import ReportConfigAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigAggregation from a JSON string
report_config_aggregation_instance = ReportConfigAggregation.from_json(json)
# print the JSON string representation of the object
print(ReportConfigAggregation.to_json())

# convert the object into a dict
report_config_aggregation_dict = report_config_aggregation_instance.to_dict()
# create an instance of ReportConfigAggregation from a dict
report_config_aggregation_from_dict = ReportConfigAggregation.from_dict(report_config_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


