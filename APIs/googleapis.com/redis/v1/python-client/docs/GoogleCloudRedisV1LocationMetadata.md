# GoogleCloudRedisV1LocationMetadata

This location metadata represents additional configuration options for a given location where a Redis instance may be created. All fields are output only. It is returned as content of the `google.cloud.location.Location.metadata` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_zones** | **Dict[str, object]** | Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in &#x60;location_id&#x60; or &#x60;alternative_location_id&#x60; fields when creating a Redis instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_redis_v1_location_metadata import GoogleCloudRedisV1LocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRedisV1LocationMetadata from a JSON string
google_cloud_redis_v1_location_metadata_instance = GoogleCloudRedisV1LocationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRedisV1LocationMetadata.to_json())

# convert the object into a dict
google_cloud_redis_v1_location_metadata_dict = google_cloud_redis_v1_location_metadata_instance.to_dict()
# create an instance of GoogleCloudRedisV1LocationMetadata from a dict
google_cloud_redis_v1_location_metadata_from_dict = GoogleCloudRedisV1LocationMetadata.from_dict(google_cloud_redis_v1_location_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


