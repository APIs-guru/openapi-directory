# GoogleCloudApigeeV1AddonsConfig

Add-on configurations for the Apigee organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_api_ops_config** | [**GoogleCloudApigeeV1AdvancedApiOpsConfig**](GoogleCloudApigeeV1AdvancedApiOpsConfig.md) |  | [optional] 
**analytics_config** | [**GoogleCloudApigeeV1AnalyticsConfig**](GoogleCloudApigeeV1AnalyticsConfig.md) |  | [optional] 
**api_security_config** | [**GoogleCloudApigeeV1ApiSecurityConfig**](GoogleCloudApigeeV1ApiSecurityConfig.md) |  | [optional] 
**connectors_platform_config** | [**GoogleCloudApigeeV1ConnectorsPlatformConfig**](GoogleCloudApigeeV1ConnectorsPlatformConfig.md) |  | [optional] 
**integration_config** | [**GoogleCloudApigeeV1IntegrationConfig**](GoogleCloudApigeeV1IntegrationConfig.md) |  | [optional] 
**monetization_config** | [**GoogleCloudApigeeV1MonetizationConfig**](GoogleCloudApigeeV1MonetizationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_addons_config import GoogleCloudApigeeV1AddonsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AddonsConfig from a JSON string
google_cloud_apigee_v1_addons_config_instance = GoogleCloudApigeeV1AddonsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AddonsConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_addons_config_dict = google_cloud_apigee_v1_addons_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AddonsConfig from a dict
google_cloud_apigee_v1_addons_config_from_dict = GoogleCloudApigeeV1AddonsConfig.from_dict(google_cloud_apigee_v1_addons_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


