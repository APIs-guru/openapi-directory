# GoogleCloudApigeeV1RuntimeAddonsConfig

RuntimeAddonsConfig defines the runtime configurations for add-ons in an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_config** | [**GoogleCloudApigeeV1RuntimeAnalyticsConfig**](GoogleCloudApigeeV1RuntimeAnalyticsConfig.md) |  | [optional] 
**api_security_config** | [**GoogleCloudApigeeV1RuntimeApiSecurityConfig**](GoogleCloudApigeeV1RuntimeApiSecurityConfig.md) |  | [optional] 
**name** | **str** | Name of the addons config in the format: &#x60;organizations/{org}/environments/{env}/addonsConfig&#x60; | [optional] 
**revision_id** | **str** | Revision number used by the runtime to detect config changes. | [optional] 
**uid** | **str** | UID is to detect if config is recreated after deletion. The add-on config will only be deleted when the environment itself gets deleted, thus it will always be the same as the UID of EnvironmentConfig. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_runtime_addons_config import GoogleCloudApigeeV1RuntimeAddonsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RuntimeAddonsConfig from a JSON string
google_cloud_apigee_v1_runtime_addons_config_instance = GoogleCloudApigeeV1RuntimeAddonsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RuntimeAddonsConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_runtime_addons_config_dict = google_cloud_apigee_v1_runtime_addons_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RuntimeAddonsConfig from a dict
google_cloud_apigee_v1_runtime_addons_config_from_dict = GoogleCloudApigeeV1RuntimeAddonsConfig.from_dict(google_cloud_apigee_v1_runtime_addons_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


