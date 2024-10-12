# GoogleCloudDialogflowV2ExportOperationMetadata

Metadata related to the Export Data Operations (e.g. ExportDocument).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exported_gcs_destination** | [**GoogleCloudDialogflowV2GcsDestination**](GoogleCloudDialogflowV2GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_export_operation_metadata import GoogleCloudDialogflowV2ExportOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ExportOperationMetadata from a JSON string
google_cloud_dialogflow_v2_export_operation_metadata_instance = GoogleCloudDialogflowV2ExportOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ExportOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_export_operation_metadata_dict = google_cloud_dialogflow_v2_export_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ExportOperationMetadata from a dict
google_cloud_dialogflow_v2_export_operation_metadata_from_dict = GoogleCloudDialogflowV2ExportOperationMetadata.from_dict(google_cloud_dialogflow_v2_export_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


