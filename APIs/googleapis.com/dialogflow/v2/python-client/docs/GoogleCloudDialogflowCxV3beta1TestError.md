# GoogleCloudDialogflowCxV3beta1TestError

Error info for running a test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**test_case** | **str** | The test case resource name. | [optional] 
**test_time** | **str** | The timestamp when the test was completed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_test_error import GoogleCloudDialogflowCxV3beta1TestError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1TestError from a JSON string
google_cloud_dialogflow_cx_v3beta1_test_error_instance = GoogleCloudDialogflowCxV3beta1TestError.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1TestError.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_test_error_dict = google_cloud_dialogflow_cx_v3beta1_test_error_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1TestError from a dict
google_cloud_dialogflow_cx_v3beta1_test_error_from_dict = GoogleCloudDialogflowCxV3beta1TestError.from_dict(google_cloud_dialogflow_cx_v3beta1_test_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


