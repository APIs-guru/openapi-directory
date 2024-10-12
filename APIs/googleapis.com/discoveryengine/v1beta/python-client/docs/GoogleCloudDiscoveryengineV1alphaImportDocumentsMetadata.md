# GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata

Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**failure_count** | **str** | Count of entries that encountered errors while processing. | [optional] 
**success_count** | **str** | Count of entries that were processed successfully. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_documents_metadata import GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_import_documents_metadata_instance = GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_documents_metadata_dict = google_cloud_discoveryengine_v1alpha_import_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata from a dict
google_cloud_discoveryengine_v1alpha_import_documents_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata.from_dict(google_cloud_discoveryengine_v1alpha_import_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


