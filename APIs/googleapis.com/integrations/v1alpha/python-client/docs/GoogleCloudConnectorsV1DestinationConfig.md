# GoogleCloudConnectorsV1DestinationConfig

Define the Connectors target endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[GoogleCloudConnectorsV1Destination]**](GoogleCloudConnectorsV1Destination.md) | The destinations for the key. | [optional] 
**key** | **str** | The key is the destination identifier that is supported by the Connector. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_destination_config import GoogleCloudConnectorsV1DestinationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1DestinationConfig from a JSON string
google_cloud_connectors_v1_destination_config_instance = GoogleCloudConnectorsV1DestinationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1DestinationConfig.to_json())

# convert the object into a dict
google_cloud_connectors_v1_destination_config_dict = google_cloud_connectors_v1_destination_config_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1DestinationConfig from a dict
google_cloud_connectors_v1_destination_config_from_dict = GoogleCloudConnectorsV1DestinationConfig.from_dict(google_cloud_connectors_v1_destination_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


