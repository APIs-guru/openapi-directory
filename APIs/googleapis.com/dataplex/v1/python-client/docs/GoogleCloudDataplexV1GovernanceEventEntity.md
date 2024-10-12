# GoogleCloudDataplexV1GovernanceEventEntity

Information about Entity resource that the log event is associated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | The Entity resource the log event is associated with. Format: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id} | [optional] 
**entity_type** | **str** | Type of entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_governance_event_entity import GoogleCloudDataplexV1GovernanceEventEntity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1GovernanceEventEntity from a JSON string
google_cloud_dataplex_v1_governance_event_entity_instance = GoogleCloudDataplexV1GovernanceEventEntity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1GovernanceEventEntity.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_governance_event_entity_dict = google_cloud_dataplex_v1_governance_event_entity_instance.to_dict()
# create an instance of GoogleCloudDataplexV1GovernanceEventEntity from a dict
google_cloud_dataplex_v1_governance_event_entity_from_dict = GoogleCloudDataplexV1GovernanceEventEntity.from_dict(google_cloud_dataplex_v1_governance_event_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


