# NonSdkApiUsageViolationReport

Contains a summary and examples of non-sdk API usage violations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_apis** | [**List[NonSdkApi]**](NonSdkApi.md) | Examples of the detected API usages. | [optional] 
**min_sdk_version** | **int** | Minimum API level required for the application to run. | [optional] 
**target_sdk_version** | **int** | Specifies the API Level on which the application is designed to run. | [optional] 
**unique_apis** | **int** | Total number of unique Non-SDK API&#39;s accessed. | [optional] 

## Example

```python
from openapi_client.models.non_sdk_api_usage_violation_report import NonSdkApiUsageViolationReport

# TODO update the JSON string below
json = "{}"
# create an instance of NonSdkApiUsageViolationReport from a JSON string
non_sdk_api_usage_violation_report_instance = NonSdkApiUsageViolationReport.from_json(json)
# print the JSON string representation of the object
print(NonSdkApiUsageViolationReport.to_json())

# convert the object into a dict
non_sdk_api_usage_violation_report_dict = non_sdk_api_usage_violation_report_instance.to_dict()
# create an instance of NonSdkApiUsageViolationReport from a dict
non_sdk_api_usage_violation_report_from_dict = NonSdkApiUsageViolationReport.from_dict(non_sdk_api_usage_violation_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


