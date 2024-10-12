# CohortReportSettings

Optional settings of a cohort report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accumulate** | **bool** | If true, accumulates the result from first touch day to the end day. Not supported in &#x60;RunReportRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cohort_report_settings import CohortReportSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CohortReportSettings from a JSON string
cohort_report_settings_instance = CohortReportSettings.from_json(json)
# print the JSON string representation of the object
print(CohortReportSettings.to_json())

# convert the object into a dict
cohort_report_settings_dict = cohort_report_settings_instance.to_dict()
# create an instance of CohortReportSettings from a dict
cohort_report_settings_from_dict = CohortReportSettings.from_dict(cohort_report_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


