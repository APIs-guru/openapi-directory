# GoogleCloudDataplexV1DiscoveryEvent

The payload associated with Discovery data processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**GoogleCloudDataplexV1DiscoveryEventActionDetails**](GoogleCloudDataplexV1DiscoveryEventActionDetails.md) |  | [optional] 
**asset_id** | **str** | The id of the associated asset. | [optional] 
**config** | [**GoogleCloudDataplexV1DiscoveryEventConfigDetails**](GoogleCloudDataplexV1DiscoveryEventConfigDetails.md) |  | [optional] 
**data_location** | **str** | The data location associated with the event. | [optional] 
**entity** | [**GoogleCloudDataplexV1DiscoveryEventEntityDetails**](GoogleCloudDataplexV1DiscoveryEventEntityDetails.md) |  | [optional] 
**lake_id** | **str** | The id of the associated lake. | [optional] 
**message** | **str** | The log message. | [optional] 
**partition** | [**GoogleCloudDataplexV1DiscoveryEventPartitionDetails**](GoogleCloudDataplexV1DiscoveryEventPartitionDetails.md) |  | [optional] 
**type** | **str** | The type of the event being logged. | [optional] 
**zone_id** | **str** | The id of the associated zone. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_discovery_event import GoogleCloudDataplexV1DiscoveryEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DiscoveryEvent from a JSON string
google_cloud_dataplex_v1_discovery_event_instance = GoogleCloudDataplexV1DiscoveryEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DiscoveryEvent.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_discovery_event_dict = google_cloud_dataplex_v1_discovery_event_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DiscoveryEvent from a dict
google_cloud_dataplex_v1_discovery_event_from_dict = GoogleCloudDataplexV1DiscoveryEvent.from_dict(google_cloud_dataplex_v1_discovery_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


