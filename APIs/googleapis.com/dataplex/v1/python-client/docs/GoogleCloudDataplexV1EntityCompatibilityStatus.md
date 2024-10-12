# GoogleCloudDataplexV1EntityCompatibilityStatus

Provides compatibility information for various metadata stores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery** | [**GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility**](GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility.md) |  | [optional] 
**hive_metastore** | [**GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility**](GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_entity_compatibility_status import GoogleCloudDataplexV1EntityCompatibilityStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EntityCompatibilityStatus from a JSON string
google_cloud_dataplex_v1_entity_compatibility_status_instance = GoogleCloudDataplexV1EntityCompatibilityStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EntityCompatibilityStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_entity_compatibility_status_dict = google_cloud_dataplex_v1_entity_compatibility_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EntityCompatibilityStatus from a dict
google_cloud_dataplex_v1_entity_compatibility_status_from_dict = GoogleCloudDataplexV1EntityCompatibilityStatus.from_dict(google_cloud_dataplex_v1_entity_compatibility_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


