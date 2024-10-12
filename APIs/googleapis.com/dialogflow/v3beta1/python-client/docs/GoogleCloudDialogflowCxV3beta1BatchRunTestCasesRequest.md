# GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest

The request message for TestCases.BatchRunTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **str** | Optional. If not set, draft environment is assumed. Format: &#x60;projects//locations//agents//environments/&#x60;. | [optional] 
**test_cases** | **List[str]** | Required. Format: &#x60;projects//locations//agents//testCases/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_batch_run_test_cases_request import GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_batch_run_test_cases_request_instance = GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_batch_run_test_cases_request_dict = google_cloud_dialogflow_cx_v3beta1_batch_run_test_cases_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest from a dict
google_cloud_dialogflow_cx_v3beta1_batch_run_test_cases_request_from_dict = GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_batch_run_test_cases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


