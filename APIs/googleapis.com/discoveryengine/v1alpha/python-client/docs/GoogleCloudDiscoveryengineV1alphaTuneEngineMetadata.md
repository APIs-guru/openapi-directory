# GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata

Metadata associated with a tune operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | Required. The resource name of the engine that this tune applies to. Format: &#x60;projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_tune_engine_metadata import GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_tune_engine_metadata_instance = GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_tune_engine_metadata_dict = google_cloud_discoveryengine_v1alpha_tune_engine_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata from a dict
google_cloud_discoveryengine_v1alpha_tune_engine_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata.from_dict(google_cloud_discoveryengine_v1alpha_tune_engine_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


