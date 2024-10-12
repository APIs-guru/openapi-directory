# GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse

Response message associated with the ExportProcessorVersion operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | The Cloud Storage URI containing the output artifacts. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_export_processor_version_response import GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse from a JSON string
google_cloud_documentai_uiv1beta3_export_processor_version_response_instance = GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_export_processor_version_response_dict = google_cloud_documentai_uiv1beta3_export_processor_version_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse from a dict
google_cloud_documentai_uiv1beta3_export_processor_version_response_from_dict = GoogleCloudDocumentaiUiv1beta3ExportProcessorVersionResponse.from_dict(google_cloud_documentai_uiv1beta3_export_processor_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


