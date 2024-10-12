# ReportConfigSorting

The order by expression to be used in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | Direction of sort. | [optional] 
**name** | **str** | The name of the column to sort. | 

## Example

```python
from openapi_client.models.report_config_sorting import ReportConfigSorting

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigSorting from a JSON string
report_config_sorting_instance = ReportConfigSorting.from_json(json)
# print the JSON string representation of the object
print(ReportConfigSorting.to_json())

# convert the object into a dict
report_config_sorting_dict = report_config_sorting_instance.to_dict()
# create an instance of ReportConfigSorting from a dict
report_config_sorting_from_dict = ReportConfigSorting.from_dict(report_config_sorting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


