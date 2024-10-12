# GoogleCloudIntegrationsV1alphaCloudLoggingConfig

Config info for Cloud Logging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Cloud bucket name for the project. | [optional] 
**enable_cloud_logging** | **bool** | This field determines whether the logs should be sent to cloud logging api | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_cloud_logging_config import GoogleCloudIntegrationsV1alphaCloudLoggingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCloudLoggingConfig from a JSON string
google_cloud_integrations_v1alpha_cloud_logging_config_instance = GoogleCloudIntegrationsV1alphaCloudLoggingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCloudLoggingConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_cloud_logging_config_dict = google_cloud_integrations_v1alpha_cloud_logging_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCloudLoggingConfig from a dict
google_cloud_integrations_v1alpha_cloud_logging_config_from_dict = GoogleCloudIntegrationsV1alphaCloudLoggingConfig.from_dict(google_cloud_integrations_v1alpha_cloud_logging_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


