# GoogleCloudDialogflowCxV3ListTestCaseResultsResponse

The response message for TestCases.ListTestCaseResults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**test_case_results** | [**List[GoogleCloudDialogflowCxV3TestCaseResult]**](GoogleCloudDialogflowCxV3TestCaseResult.md) | The list of test case results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_test_case_results_response import GoogleCloudDialogflowCxV3ListTestCaseResultsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListTestCaseResultsResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_test_case_results_response_instance = GoogleCloudDialogflowCxV3ListTestCaseResultsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListTestCaseResultsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_test_case_results_response_dict = google_cloud_dialogflow_cx_v3_list_test_case_results_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListTestCaseResultsResponse from a dict
google_cloud_dialogflow_cx_v3_list_test_case_results_response_from_dict = GoogleCloudDialogflowCxV3ListTestCaseResultsResponse.from_dict(google_cloud_dialogflow_cx_v3_list_test_case_results_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


