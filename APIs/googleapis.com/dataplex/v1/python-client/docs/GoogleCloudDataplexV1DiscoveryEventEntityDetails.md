# GoogleCloudDataplexV1DiscoveryEventEntityDetails

Details about the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | The name of the entity resource. The name is the fully-qualified resource name. | [optional] 
**type** | **str** | The type of the entity resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_discovery_event_entity_details import GoogleCloudDataplexV1DiscoveryEventEntityDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DiscoveryEventEntityDetails from a JSON string
google_cloud_dataplex_v1_discovery_event_entity_details_instance = GoogleCloudDataplexV1DiscoveryEventEntityDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DiscoveryEventEntityDetails.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_discovery_event_entity_details_dict = google_cloud_dataplex_v1_discovery_event_entity_details_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DiscoveryEventEntityDetails from a dict
google_cloud_dataplex_v1_discovery_event_entity_details_from_dict = GoogleCloudDataplexV1DiscoveryEventEntityDetails.from_dict(google_cloud_dataplex_v1_discovery_event_entity_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


