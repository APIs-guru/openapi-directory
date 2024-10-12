# ReportAggregation

The aggregation expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function** | **str** | The name of the aggregation function to use. | 
**name** | **str** | The name of the column to aggregate. | 

## Example

```python
from openapi_client.models.report_aggregation import ReportAggregation

# TODO update the JSON string below
json = "{}"
# create an instance of ReportAggregation from a JSON string
report_aggregation_instance = ReportAggregation.from_json(json)
# print the JSON string representation of the object
print(ReportAggregation.to_json())

# convert the object into a dict
report_aggregation_dict = report_aggregation_instance.to_dict()
# create an instance of ReportAggregation from a dict
report_aggregation_from_dict = ReportAggregation.from_dict(report_aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


