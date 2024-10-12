# GoogleCloudDialogflowCxV3ExportTestCasesRequest

The request message for TestCases.ExportTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_format** | **str** | The data format of the exported test cases. If not specified, &#x60;BLOB&#x60; is assumed. | [optional] 
**filter** | **str** | The filter expression used to filter exported test cases, see [API Filtering](https://aip.dev/160). The expression is case insensitive and supports the following syntax: name &#x3D; [OR name &#x3D; ] ... For example: * \&quot;name &#x3D; t1 OR name &#x3D; t2\&quot; matches the test case with the exact resource name \&quot;t1\&quot; or \&quot;t2\&quot;. | [optional] 
**gcs_uri** | **str** | The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the test cases to. The format of this URI must be &#x60;gs:///&#x60;. If unspecified, the serialized test cases is returned inline. Dialogflow performs a write operation for the Cloud Storage object on the caller&#39;s behalf, so your request authentication must have write permissions for the object. For more information, see [Dialogflow access control](https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_export_test_cases_request import GoogleCloudDialogflowCxV3ExportTestCasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExportTestCasesRequest from a JSON string
google_cloud_dialogflow_cx_v3_export_test_cases_request_instance = GoogleCloudDialogflowCxV3ExportTestCasesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExportTestCasesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_export_test_cases_request_dict = google_cloud_dialogflow_cx_v3_export_test_cases_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExportTestCasesRequest from a dict
google_cloud_dialogflow_cx_v3_export_test_cases_request_from_dict = GoogleCloudDialogflowCxV3ExportTestCasesRequest.from_dict(google_cloud_dialogflow_cx_v3_export_test_cases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


