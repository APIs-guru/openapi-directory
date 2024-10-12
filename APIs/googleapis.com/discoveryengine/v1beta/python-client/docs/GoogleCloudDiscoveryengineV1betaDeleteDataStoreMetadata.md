# GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata

Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_delete_data_store_metadata import GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata from a JSON string
google_cloud_discoveryengine_v1beta_delete_data_store_metadata_instance = GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_delete_data_store_metadata_dict = google_cloud_discoveryengine_v1beta_delete_data_store_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata from a dict
google_cloud_discoveryengine_v1beta_delete_data_store_metadata_from_dict = GoogleCloudDiscoveryengineV1betaDeleteDataStoreMetadata.from_dict(google_cloud_discoveryengine_v1beta_delete_data_store_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


