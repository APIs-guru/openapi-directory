# ReportConfigGrouping

The group by expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the column to group. | 
**type** | [**ReportConfigColumnType**](ReportConfigColumnType.md) |  | 

## Example

```python
from openapi_client.models.report_config_grouping import ReportConfigGrouping

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigGrouping from a JSON string
report_config_grouping_instance = ReportConfigGrouping.from_json(json)
# print the JSON string representation of the object
print(ReportConfigGrouping.to_json())

# convert the object into a dict
report_config_grouping_dict = report_config_grouping_instance.to_dict()
# create an instance of ReportConfigGrouping from a dict
report_config_grouping_from_dict = ReportConfigGrouping.from_dict(report_config_grouping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


