# GoogleCloudDialogflowCxV3TestCaseError

Error info for importing a test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**test_case** | [**GoogleCloudDialogflowCxV3TestCase**](GoogleCloudDialogflowCxV3TestCase.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_test_case_error import GoogleCloudDialogflowCxV3TestCaseError

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TestCaseError from a JSON string
google_cloud_dialogflow_cx_v3_test_case_error_instance = GoogleCloudDialogflowCxV3TestCaseError.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TestCaseError.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_test_case_error_dict = google_cloud_dialogflow_cx_v3_test_case_error_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TestCaseError from a dict
google_cloud_dialogflow_cx_v3_test_case_error_from_dict = GoogleCloudDialogflowCxV3TestCaseError.from_dict(google_cloud_dialogflow_cx_v3_test_case_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


