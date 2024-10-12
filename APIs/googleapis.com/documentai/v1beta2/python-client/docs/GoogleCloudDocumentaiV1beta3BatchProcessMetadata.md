# GoogleCloudDocumentaiV1beta3BatchProcessMetadata

The long-running operation metadata for BatchProcessDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time of the operation. | [optional] 
**individual_process_statuses** | [**List[GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus]**](GoogleCloudDocumentaiV1beta3BatchProcessMetadataIndividualProcessStatus.md) | The list of response details of each document. | [optional] 
**state** | **str** | The state of the current batch processing. | [optional] 
**state_message** | **str** | A message providing more details about the current state of processing. For example, the error message if the operation is failed. | [optional] 
**update_time** | **str** | The last update time of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_process_metadata import GoogleCloudDocumentaiV1beta3BatchProcessMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessMetadata from a JSON string
google_cloud_documentai_v1beta3_batch_process_metadata_instance = GoogleCloudDocumentaiV1beta3BatchProcessMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchProcessMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_process_metadata_dict = google_cloud_documentai_v1beta3_batch_process_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchProcessMetadata from a dict
google_cloud_documentai_v1beta3_batch_process_metadata_from_dict = GoogleCloudDocumentaiV1beta3BatchProcessMetadata.from_dict(google_cloud_documentai_v1beta3_batch_process_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


