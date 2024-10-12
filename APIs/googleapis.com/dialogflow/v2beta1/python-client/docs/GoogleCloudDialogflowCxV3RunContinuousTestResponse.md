# GoogleCloudDialogflowCxV3RunContinuousTestResponse

The response message for Environments.RunContinuousTest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuous_test_result** | [**GoogleCloudDialogflowCxV3ContinuousTestResult**](GoogleCloudDialogflowCxV3ContinuousTestResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_run_continuous_test_response import GoogleCloudDialogflowCxV3RunContinuousTestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3RunContinuousTestResponse from a JSON string
google_cloud_dialogflow_cx_v3_run_continuous_test_response_instance = GoogleCloudDialogflowCxV3RunContinuousTestResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3RunContinuousTestResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_run_continuous_test_response_dict = google_cloud_dialogflow_cx_v3_run_continuous_test_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3RunContinuousTestResponse from a dict
google_cloud_dialogflow_cx_v3_run_continuous_test_response_from_dict = GoogleCloudDialogflowCxV3RunContinuousTestResponse.from_dict(google_cloud_dialogflow_cx_v3_run_continuous_test_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


