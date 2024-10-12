# ReportGrouping

The group by expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the column to group. | 
**type** | [**ReportColumnType**](ReportColumnType.md) |  | 

## Example

```python
from openapi_client.models.report_grouping import ReportGrouping

# TODO update the JSON string below
json = "{}"
# create an instance of ReportGrouping from a JSON string
report_grouping_instance = ReportGrouping.from_json(json)
# print the JSON string representation of the object
print(ReportGrouping.to_json())

# convert the object into a dict
report_grouping_dict = report_grouping_instance.to_dict()
# create an instance of ReportGrouping from a dict
report_grouping_from_dict = ReportGrouping.from_dict(report_grouping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


