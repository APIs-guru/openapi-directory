# GoogleCloudDialogflowCxV3ImportTestCasesRequest

The request message for TestCases.ImportTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Uncompressed raw byte content for test cases. | [optional] 
**gcs_uri** | **str** | The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to import test cases from. The format of this URI must be &#x60;gs:///&#x60;. Dialogflow performs a read operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have read permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_import_test_cases_request import GoogleCloudDialogflowCxV3ImportTestCasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ImportTestCasesRequest from a JSON string
google_cloud_dialogflow_cx_v3_import_test_cases_request_instance = GoogleCloudDialogflowCxV3ImportTestCasesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ImportTestCasesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_import_test_cases_request_dict = google_cloud_dialogflow_cx_v3_import_test_cases_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ImportTestCasesRequest from a dict
google_cloud_dialogflow_cx_v3_import_test_cases_request_from_dict = GoogleCloudDialogflowCxV3ImportTestCasesRequest.from_dict(google_cloud_dialogflow_cx_v3_import_test_cases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


