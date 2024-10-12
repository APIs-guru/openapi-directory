# ReportConfigListResult

Result of listing report configs. It contains a list of available report configurations in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReportConfig]**](ReportConfig.md) | The list of report configs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_config_list_result import ReportConfigListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigListResult from a JSON string
report_config_list_result_instance = ReportConfigListResult.from_json(json)
# print the JSON string representation of the object
print(ReportConfigListResult.to_json())

# convert the object into a dict
report_config_list_result_dict = report_config_list_result_instance.to_dict()
# create an instance of ReportConfigListResult from a dict
report_config_list_result_from_dict = ReportConfigListResult.from_dict(report_config_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


