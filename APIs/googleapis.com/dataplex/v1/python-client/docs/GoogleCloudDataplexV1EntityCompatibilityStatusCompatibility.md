# GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility

Provides compatibility information for a specific metadata store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatible** | **bool** | Output only. Whether the entity is compatible and can be represented in the metadata store. | [optional] [readonly] 
**reason** | **str** | Output only. Provides additional detail if the entity is incompatible with the metadata store. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_entity_compatibility_status_compatibility import GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility from a JSON string
google_cloud_dataplex_v1_entity_compatibility_status_compatibility_instance = GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_entity_compatibility_status_compatibility_dict = google_cloud_dataplex_v1_entity_compatibility_status_compatibility_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility from a dict
google_cloud_dataplex_v1_entity_compatibility_status_compatibility_from_dict = GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility.from_dict(google_cloud_dataplex_v1_entity_compatibility_status_compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


