# GoogleCloudDialogflowV2beta1ExportOperationMetadata

Metadata related to the Export Data Operations (e.g. ExportDocument).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exported_gcs_destination** | [**GoogleCloudDialogflowV2beta1GcsDestination**](GoogleCloudDialogflowV2beta1GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_export_operation_metadata import GoogleCloudDialogflowV2beta1ExportOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ExportOperationMetadata from a JSON string
google_cloud_dialogflow_v2beta1_export_operation_metadata_instance = GoogleCloudDialogflowV2beta1ExportOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ExportOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_export_operation_metadata_dict = google_cloud_dialogflow_v2beta1_export_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ExportOperationMetadata from a dict
google_cloud_dialogflow_v2beta1_export_operation_metadata_from_dict = GoogleCloudDialogflowV2beta1ExportOperationMetadata.from_dict(google_cloud_dialogflow_v2beta1_export_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


