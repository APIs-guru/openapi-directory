# GoogleCloudIntegrationsV1alphaClientConfig

The configuration information for the Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_type** | **str** | Indicates the billing type of the client | [optional] 
**client_state** | **str** | Indicates the activity state the client | [optional] 
**cloud_kms_config** | [**GoogleCloudIntegrationsV1alphaCloudKmsConfig**](GoogleCloudIntegrationsV1alphaCloudKmsConfig.md) |  | [optional] 
**cloud_logging_config** | [**GoogleCloudIntegrationsV1alphaCloudLoggingConfig**](GoogleCloudIntegrationsV1alphaCloudLoggingConfig.md) |  | [optional] 
**create_time** | **str** | The timestamp when the client was first created. | [optional] 
**description** | **str** | Description of what the client is used for | [optional] 
**id** | **str** | Globally unique ID (project_id + region) | [optional] 
**p4_service_account** | **str** | The service agent associated with this client | [optional] 
**project_id** | **str** | The GCP project id of the client associated with | [optional] 
**region** | **str** | The region the client is linked to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_client_config import GoogleCloudIntegrationsV1alphaClientConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaClientConfig from a JSON string
google_cloud_integrations_v1alpha_client_config_instance = GoogleCloudIntegrationsV1alphaClientConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaClientConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_client_config_dict = google_cloud_integrations_v1alpha_client_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaClientConfig from a dict
google_cloud_integrations_v1alpha_client_config_from_dict = GoogleCloudIntegrationsV1alphaClientConfig.from_dict(google_cloud_integrations_v1alpha_client_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


