# GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse

The response message for TestCases.ImportTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | The unique identifiers of the new test cases. Format: &#x60;projects//locations//agents//testCases/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_import_test_cases_response import GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_import_test_cases_response_instance = GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_import_test_cases_response_dict = google_cloud_dialogflow_cx_v3beta1_import_test_cases_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse from a dict
google_cloud_dialogflow_cx_v3beta1_import_test_cases_response_from_dict = GoogleCloudDialogflowCxV3beta1ImportTestCasesResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_import_test_cases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


