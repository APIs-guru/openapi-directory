# GoogleCloudMemcacheV1beta2LocationMetadata

Metadata for the given google.cloud.location.Location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_zones** | **Dict[str, object]** | Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in the &#x60;zones&#x60; field when creating a Memcached instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_memcache_v1beta2_location_metadata import GoogleCloudMemcacheV1beta2LocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMemcacheV1beta2LocationMetadata from a JSON string
google_cloud_memcache_v1beta2_location_metadata_instance = GoogleCloudMemcacheV1beta2LocationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMemcacheV1beta2LocationMetadata.to_json())

# convert the object into a dict
google_cloud_memcache_v1beta2_location_metadata_dict = google_cloud_memcache_v1beta2_location_metadata_instance.to_dict()
# create an instance of GoogleCloudMemcacheV1beta2LocationMetadata from a dict
google_cloud_memcache_v1beta2_location_metadata_from_dict = GoogleCloudMemcacheV1beta2LocationMetadata.from_dict(google_cloud_memcache_v1beta2_location_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


