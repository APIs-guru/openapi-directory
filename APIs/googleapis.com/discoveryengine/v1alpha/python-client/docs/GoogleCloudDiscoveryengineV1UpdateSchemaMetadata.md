# GoogleCloudDiscoveryengineV1UpdateSchemaMetadata

Metadata for UpdateSchema LRO.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_update_schema_metadata import GoogleCloudDiscoveryengineV1UpdateSchemaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1UpdateSchemaMetadata from a JSON string
google_cloud_discoveryengine_v1_update_schema_metadata_instance = GoogleCloudDiscoveryengineV1UpdateSchemaMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1UpdateSchemaMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_update_schema_metadata_dict = google_cloud_discoveryengine_v1_update_schema_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1UpdateSchemaMetadata from a dict
google_cloud_discoveryengine_v1_update_schema_metadata_from_dict = GoogleCloudDiscoveryengineV1UpdateSchemaMetadata.from_dict(google_cloud_discoveryengine_v1_update_schema_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


