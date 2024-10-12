# GoogleCloudConnectorsV1ConnectionStatus

ConnectionStatus indicates the state of the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description. | [optional] 
**state** | **str** | State. | [optional] 
**status** | **str** | Status provides detailed information for the state. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_connection_status import GoogleCloudConnectorsV1ConnectionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1ConnectionStatus from a JSON string
google_cloud_connectors_v1_connection_status_instance = GoogleCloudConnectorsV1ConnectionStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1ConnectionStatus.to_json())

# convert the object into a dict
google_cloud_connectors_v1_connection_status_dict = google_cloud_connectors_v1_connection_status_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1ConnectionStatus from a dict
google_cloud_connectors_v1_connection_status_from_dict = GoogleCloudConnectorsV1ConnectionStatus.from_dict(google_cloud_connectors_v1_connection_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


