# GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus

Resync status against inconsistency types on the dataset level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_inconsistency_type** | **str** | The type of the inconsistency of the dataset. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dataset_resync_status import GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus from a JSON string
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dataset_resync_status_instance = GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus.to_json())

# convert the object into a dict
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dataset_resync_status_dict = google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dataset_resync_status_instance.to_dict()
# create an instance of GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus from a dict
google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dataset_resync_status_from_dict = GoogleCloudDocumentaiUiv1beta3ResyncDatasetMetadataDatasetResyncStatus.from_dict(google_cloud_documentai_uiv1beta3_resync_dataset_metadata_dataset_resync_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


