# GoogleCloudConnectorsV1NodeConfig

Node configuration for the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_node_count** | **int** | Maximum number of nodes in the runtime nodes. | [optional] 
**min_node_count** | **int** | Minimum number of nodes in the runtime nodes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_node_config import GoogleCloudConnectorsV1NodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1NodeConfig from a JSON string
google_cloud_connectors_v1_node_config_instance = GoogleCloudConnectorsV1NodeConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1NodeConfig.to_json())

# convert the object into a dict
google_cloud_connectors_v1_node_config_dict = google_cloud_connectors_v1_node_config_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1NodeConfig from a dict
google_cloud_connectors_v1_node_config_from_dict = GoogleCloudConnectorsV1NodeConfig.from_dict(google_cloud_connectors_v1_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


