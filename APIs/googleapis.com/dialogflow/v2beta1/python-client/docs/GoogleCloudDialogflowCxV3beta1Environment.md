# GoogleCloudDialogflowCxV3beta1Environment

Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected. | [optional] 
**display_name** | **str** | Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters. | [optional] 
**name** | **str** | The name of the environment. Format: &#x60;projects//locations//agents//environments/&#x60;. | [optional] 
**test_cases_config** | [**GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig**](GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig.md) |  | [optional] 
**update_time** | **str** | Output only. Update time of this environment. | [optional] [readonly] 
**version_configs** | [**List[GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig]**](GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig.md) | A list of configurations for flow versions. You should include version configs for all flows that are reachable from &#x60;Start Flow&#x60; in the agent. Otherwise, an error will be returned. | [optional] 
**webhook_config** | [**GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig**](GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_environment import GoogleCloudDialogflowCxV3beta1Environment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Environment from a JSON string
google_cloud_dialogflow_cx_v3beta1_environment_instance = GoogleCloudDialogflowCxV3beta1Environment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Environment.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_environment_dict = google_cloud_dialogflow_cx_v3beta1_environment_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Environment from a dict
google_cloud_dialogflow_cx_v3beta1_environment_from_dict = GoogleCloudDialogflowCxV3beta1Environment.from_dict(google_cloud_dialogflow_cx_v3beta1_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


