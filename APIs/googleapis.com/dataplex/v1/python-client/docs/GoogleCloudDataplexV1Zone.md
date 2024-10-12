# GoogleCloudDataplexV1Zone

A zone represents a logical group of related assets within a lake. A zone can be used to map to organizational structure or represent stages of data readiness from raw to curated. It provides managing behavior that is shared or inherited by all contained assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_status** | [**GoogleCloudDataplexV1AssetStatus**](GoogleCloudDataplexV1AssetStatus.md) |  | [optional] 
**create_time** | **str** | Output only. The time when the zone was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the zone. | [optional] 
**discovery_spec** | [**GoogleCloudDataplexV1ZoneDiscoverySpec**](GoogleCloudDataplexV1ZoneDiscoverySpec.md) |  | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**labels** | **Dict[str, str]** | Optional. User defined labels for the zone. | [optional] 
**name** | **str** | Output only. The relative resource name of the zone, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}. | [optional] [readonly] 
**resource_spec** | [**GoogleCloudDataplexV1ZoneResourceSpec**](GoogleCloudDataplexV1ZoneResourceSpec.md) |  | [optional] 
**state** | **str** | Output only. Current state of the zone. | [optional] [readonly] 
**type** | **str** | Required. Immutable. The type of the zone. | [optional] 
**uid** | **str** | Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the zone was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_zone import GoogleCloudDataplexV1Zone

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Zone from a JSON string
google_cloud_dataplex_v1_zone_instance = GoogleCloudDataplexV1Zone.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Zone.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_zone_dict = google_cloud_dataplex_v1_zone_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Zone from a dict
google_cloud_dataplex_v1_zone_from_dict = GoogleCloudDataplexV1Zone.from_dict(google_cloud_dataplex_v1_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


