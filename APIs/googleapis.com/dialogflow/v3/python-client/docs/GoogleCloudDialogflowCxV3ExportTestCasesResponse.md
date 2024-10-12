# GoogleCloudDialogflowCxV3ExportTestCasesResponse

The response message for TestCases.ExportTestCases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Uncompressed raw byte content for test cases. | [optional] 
**gcs_uri** | **str** | The URI to a file containing the exported test cases. This field is populated only if &#x60;gcs_uri&#x60; is specified in ExportTestCasesRequest. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_export_test_cases_response import GoogleCloudDialogflowCxV3ExportTestCasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExportTestCasesResponse from a JSON string
google_cloud_dialogflow_cx_v3_export_test_cases_response_instance = GoogleCloudDialogflowCxV3ExportTestCasesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExportTestCasesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_export_test_cases_response_dict = google_cloud_dialogflow_cx_v3_export_test_cases_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExportTestCasesResponse from a dict
google_cloud_dialogflow_cx_v3_export_test_cases_response_from_dict = GoogleCloudDialogflowCxV3ExportTestCasesResponse.from_dict(google_cloud_dialogflow_cx_v3_export_test_cases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


