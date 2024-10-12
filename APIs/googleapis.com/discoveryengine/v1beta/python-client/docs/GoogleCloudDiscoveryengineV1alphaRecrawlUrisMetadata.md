# GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata

Metadata related to the progress of the SiteSearchEngineService.RecrawlUris operation. This will be returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**invalid_uris** | **List[str]** | Unique URIs in the request that don&#39;t match any TargetSite in the DataStore, only match TargetSites that haven&#39;t been fully indexed, or match a TargetSite with type EXCLUDE. | [optional] 
**pending_count** | **int** | Total number of URIs that have yet to be crawled. | [optional] 
**quota_exceeded_count** | **int** | Total number of URIs that were rejected due to insufficient indexing resources. | [optional] 
**success_count** | **int** | Total number of URIs that have been crawled so far. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 
**valid_uris_count** | **int** | Total number of unique URIs in the request that are not in invalid_uris. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_recrawl_uris_metadata import GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_recrawl_uris_metadata_instance = GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_metadata_dict = google_cloud_discoveryengine_v1alpha_recrawl_uris_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata from a dict
google_cloud_discoveryengine_v1alpha_recrawl_uris_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata.from_dict(google_cloud_discoveryengine_v1alpha_recrawl_uris_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


