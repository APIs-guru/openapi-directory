# GoogleCloudApigeeV1SecurityActionsConfig

SecurityActionsConfig reflects the current state of the SecurityActions feature. This is a singleton resource: https://google.aip.dev/156

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | The flag that controls whether this feature is enabled. This is &#x60;unset&#x60; by default. When this flag is &#x60;false&#x60;, even if individual rules are enabled, no SecurityActions will be enforced. | [optional] 
**name** | **str** | This is a singleton resource, the name will always be set by SecurityActions and any user input will be ignored. The name is always: &#x60;organizations/{org}/environments/{env}/security_actions_config&#x60; | [optional] 
**update_time** | **str** | Output only. The update time for configuration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_actions_config import GoogleCloudApigeeV1SecurityActionsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityActionsConfig from a JSON string
google_cloud_apigee_v1_security_actions_config_instance = GoogleCloudApigeeV1SecurityActionsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityActionsConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_actions_config_dict = google_cloud_apigee_v1_security_actions_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityActionsConfig from a dict
google_cloud_apigee_v1_security_actions_config_from_dict = GoogleCloudApigeeV1SecurityActionsConfig.from_dict(google_cloud_apigee_v1_security_actions_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


