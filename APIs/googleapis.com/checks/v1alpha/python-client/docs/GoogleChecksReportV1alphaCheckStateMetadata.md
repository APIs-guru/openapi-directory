# GoogleChecksReportV1alphaCheckStateMetadata

Additional information about the check state in relation to past reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | **List[str]** | Indicators related to the check state. | [optional] 
**first_failing_time** | **str** | The time when the check first started failing. | [optional] 
**last_failing_time** | **str** | The last time the check failed. | [optional] 

## Example

```python
from openapi_client.models.google_checks_report_v1alpha_check_state_metadata import GoogleChecksReportV1alphaCheckStateMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChecksReportV1alphaCheckStateMetadata from a JSON string
google_checks_report_v1alpha_check_state_metadata_instance = GoogleChecksReportV1alphaCheckStateMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleChecksReportV1alphaCheckStateMetadata.to_json())

# convert the object into a dict
google_checks_report_v1alpha_check_state_metadata_dict = google_checks_report_v1alpha_check_state_metadata_instance.to_dict()
# create an instance of GoogleChecksReportV1alphaCheckStateMetadata from a dict
google_checks_report_v1alpha_check_state_metadata_from_dict = GoogleChecksReportV1alphaCheckStateMetadata.from_dict(google_checks_report_v1alpha_check_state_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


