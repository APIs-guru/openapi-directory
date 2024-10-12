# GoogleCloudDialogflowCxV3beta1ContinuousTestResult

Represents a result from running a test case in an agent environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name for the continuous test result. Format: &#x60;projects//locations//agents//environments//continuousTestResults/&#x60;. | [optional] 
**result** | **str** | The result of this continuous test run, i.e. whether all the tests in this continuous test run pass or not. | [optional] 
**run_time** | **str** | Time when the continuous testing run starts. | [optional] 
**test_case_results** | **List[str]** | A list of individual test case results names in this continuous test run. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_continuous_test_result import GoogleCloudDialogflowCxV3beta1ContinuousTestResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ContinuousTestResult from a JSON string
google_cloud_dialogflow_cx_v3beta1_continuous_test_result_instance = GoogleCloudDialogflowCxV3beta1ContinuousTestResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ContinuousTestResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_continuous_test_result_dict = google_cloud_dialogflow_cx_v3beta1_continuous_test_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ContinuousTestResult from a dict
google_cloud_dialogflow_cx_v3beta1_continuous_test_result_from_dict = GoogleCloudDialogflowCxV3beta1ContinuousTestResult.from_dict(google_cloud_dialogflow_cx_v3beta1_continuous_test_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


