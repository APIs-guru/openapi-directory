# GoogleCloudDataplexV1DiscoveryEventPartitionDetails

Details about the partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | The name to the containing entity resource. The name is the fully-qualified resource name. | [optional] 
**partition** | **str** | The name to the partition resource. The name is the fully-qualified resource name. | [optional] 
**sampled_data_locations** | **List[str]** | The locations of the data items (e.g., a Cloud Storage objects) sampled for metadata inference. | [optional] 
**type** | **str** | The type of the containing entity resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_discovery_event_partition_details import GoogleCloudDataplexV1DiscoveryEventPartitionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DiscoveryEventPartitionDetails from a JSON string
google_cloud_dataplex_v1_discovery_event_partition_details_instance = GoogleCloudDataplexV1DiscoveryEventPartitionDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DiscoveryEventPartitionDetails.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_discovery_event_partition_details_dict = google_cloud_dataplex_v1_discovery_event_partition_details_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DiscoveryEventPartitionDetails from a dict
google_cloud_dataplex_v1_discovery_event_partition_details_from_dict = GoogleCloudDataplexV1DiscoveryEventPartitionDetails.from_dict(google_cloud_dataplex_v1_discovery_event_partition_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


