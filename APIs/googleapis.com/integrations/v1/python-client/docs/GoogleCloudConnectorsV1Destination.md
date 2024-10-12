# GoogleCloudConnectorsV1Destination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | For publicly routable host. | [optional] 
**port** | **int** | The port is the target port number that is accepted by the destination. | [optional] 
**service_attachment** | **str** | PSC service attachments. Format: projects/*/regions/*/serviceAttachments/* | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_destination import GoogleCloudConnectorsV1Destination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1Destination from a JSON string
google_cloud_connectors_v1_destination_instance = GoogleCloudConnectorsV1Destination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1Destination.to_json())

# convert the object into a dict
google_cloud_connectors_v1_destination_dict = google_cloud_connectors_v1_destination_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1Destination from a dict
google_cloud_connectors_v1_destination_from_dict = GoogleCloudConnectorsV1Destination.from_dict(google_cloud_connectors_v1_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


