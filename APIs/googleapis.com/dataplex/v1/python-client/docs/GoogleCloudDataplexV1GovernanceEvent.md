# GoogleCloudDataplexV1GovernanceEvent

Payload associated with Governance related log events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**GoogleCloudDataplexV1GovernanceEventEntity**](GoogleCloudDataplexV1GovernanceEventEntity.md) |  | [optional] 
**event_type** | **str** | The type of the event. | [optional] 
**message** | **str** | The log message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_governance_event import GoogleCloudDataplexV1GovernanceEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1GovernanceEvent from a JSON string
google_cloud_dataplex_v1_governance_event_instance = GoogleCloudDataplexV1GovernanceEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1GovernanceEvent.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_governance_event_dict = google_cloud_dataplex_v1_governance_event_instance.to_dict()
# create an instance of GoogleCloudDataplexV1GovernanceEvent from a dict
google_cloud_dataplex_v1_governance_event_from_dict = GoogleCloudDataplexV1GovernanceEvent.from_dict(google_cloud_dataplex_v1_governance_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


