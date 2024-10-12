# ReportConfigDatasetConfiguration

The configuration of dataset in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | Array of column names to be included in the report. Any valid report column name is allowed. If not provided, then report includes all columns. | [optional] 

## Example

```python
from openapi_client.models.report_config_dataset_configuration import ReportConfigDatasetConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigDatasetConfiguration from a JSON string
report_config_dataset_configuration_instance = ReportConfigDatasetConfiguration.from_json(json)
# print the JSON string representation of the object
print(ReportConfigDatasetConfiguration.to_json())

# convert the object into a dict
report_config_dataset_configuration_dict = report_config_dataset_configuration_instance.to_dict()
# create an instance of ReportConfigDatasetConfiguration from a dict
report_config_dataset_configuration_from_dict = ReportConfigDatasetConfiguration.from_dict(report_config_dataset_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


