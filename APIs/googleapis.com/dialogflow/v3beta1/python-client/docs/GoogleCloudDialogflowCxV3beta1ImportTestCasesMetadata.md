# GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata

Metadata returned for the TestCases.ImportTestCases long running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[GoogleCloudDialogflowCxV3beta1TestCaseError]**](GoogleCloudDialogflowCxV3beta1TestCaseError.md) | Errors for failed test cases. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_import_test_cases_metadata import GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata from a JSON string
google_cloud_dialogflow_cx_v3beta1_import_test_cases_metadata_instance = GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_import_test_cases_metadata_dict = google_cloud_dialogflow_cx_v3beta1_import_test_cases_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata from a dict
google_cloud_dialogflow_cx_v3beta1_import_test_cases_metadata_from_dict = GoogleCloudDialogflowCxV3beta1ImportTestCasesMetadata.from_dict(google_cloud_dialogflow_cx_v3beta1_import_test_cases_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


