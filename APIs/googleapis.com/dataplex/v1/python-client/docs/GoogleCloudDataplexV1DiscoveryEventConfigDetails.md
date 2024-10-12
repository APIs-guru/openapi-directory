# GoogleCloudDataplexV1DiscoveryEventConfigDetails

Details about configuration events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | A list of discovery configuration parameters in effect. The keys are the field paths within DiscoverySpec. Eg. includePatterns, excludePatterns, csvOptions.disableTypeInference, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_discovery_event_config_details import GoogleCloudDataplexV1DiscoveryEventConfigDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DiscoveryEventConfigDetails from a JSON string
google_cloud_dataplex_v1_discovery_event_config_details_instance = GoogleCloudDataplexV1DiscoveryEventConfigDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DiscoveryEventConfigDetails.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_discovery_event_config_details_dict = google_cloud_dataplex_v1_discovery_event_config_details_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DiscoveryEventConfigDetails from a dict
google_cloud_dataplex_v1_discovery_event_config_details_from_dict = GoogleCloudDataplexV1DiscoveryEventConfigDetails.from_dict(google_cloud_dataplex_v1_discovery_event_config_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


