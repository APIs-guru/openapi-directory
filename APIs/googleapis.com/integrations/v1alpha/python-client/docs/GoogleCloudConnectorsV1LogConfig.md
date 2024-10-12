# GoogleCloudConnectorsV1LogConfig

Log configuration for the connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enabled represents whether logging is enabled or not for a connection. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_connectors_v1_log_config import GoogleCloudConnectorsV1LogConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudConnectorsV1LogConfig from a JSON string
google_cloud_connectors_v1_log_config_instance = GoogleCloudConnectorsV1LogConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudConnectorsV1LogConfig.to_json())

# convert the object into a dict
google_cloud_connectors_v1_log_config_dict = google_cloud_connectors_v1_log_config_instance.to_dict()
# create an instance of GoogleCloudConnectorsV1LogConfig from a dict
google_cloud_connectors_v1_log_config_from_dict = GoogleCloudConnectorsV1LogConfig.from_dict(google_cloud_connectors_v1_log_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


