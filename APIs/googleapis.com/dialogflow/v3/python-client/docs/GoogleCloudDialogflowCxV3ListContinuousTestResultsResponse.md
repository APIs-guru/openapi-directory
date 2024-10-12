# GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse

The response message for Environments.ListTestCaseResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuous_test_results** | [**List[GoogleCloudDialogflowCxV3ContinuousTestResult]**](GoogleCloudDialogflowCxV3ContinuousTestResult.md) | The list of continuous test results. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_continuous_test_results_response import GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_continuous_test_results_response_instance = GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_continuous_test_results_response_dict = google_cloud_dialogflow_cx_v3_list_continuous_test_results_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse from a dict
google_cloud_dialogflow_cx_v3_list_continuous_test_results_response_from_dict = GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse.from_dict(google_cloud_dialogflow_cx_v3_list_continuous_test_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


