# GoogleCloudDialogflowCxV3beta1RunTestCaseRequest

The request message for TestCases.RunTestCase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **str** | Optional. Environment name. If not set, draft environment is assumed. Format: &#x60;projects//locations//agents//environments/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_run_test_case_request import GoogleCloudDialogflowCxV3beta1RunTestCaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1RunTestCaseRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_run_test_case_request_instance = GoogleCloudDialogflowCxV3beta1RunTestCaseRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1RunTestCaseRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_run_test_case_request_dict = google_cloud_dialogflow_cx_v3beta1_run_test_case_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1RunTestCaseRequest from a dict
google_cloud_dialogflow_cx_v3beta1_run_test_case_request_from_dict = GoogleCloudDialogflowCxV3beta1RunTestCaseRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_run_test_case_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


