# GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig

AppConnectorInstanceConfig defines the instance config of a AppConnector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_config** | [**GoogleCloudBeyondcorpAppconnectorsV1ImageConfig**](GoogleCloudBeyondcorpAppconnectorsV1ImageConfig.md) |  | [optional] 
**instance_config** | **Dict[str, object]** | The SLM instance agent configuration. | [optional] 
**notification_config** | [**GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig**](GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig.md) |  | [optional] 
**sequence_number** | **str** | Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config import GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig from a JSON string
google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config_instance = GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config_dict = google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig from a dict
google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config_from_dict = GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig.from_dict(google_cloud_beyondcorp_appconnectors_v1_app_connector_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


