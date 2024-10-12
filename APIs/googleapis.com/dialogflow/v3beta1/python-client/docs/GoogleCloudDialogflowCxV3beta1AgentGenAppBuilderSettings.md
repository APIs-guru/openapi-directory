# GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings

Settings for Gen App Builder.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | Required. The full name of the Gen App Builder engine related to this agent if there is one. Format: &#x60;projects/{Project ID}/locations/{Location ID}/collections/{Collection ID}/engines/{Engine ID}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_agent_gen_app_builder_settings import GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_agent_gen_app_builder_settings_instance = GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_agent_gen_app_builder_settings_dict = google_cloud_dialogflow_cx_v3beta1_agent_gen_app_builder_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings from a dict
google_cloud_dialogflow_cx_v3beta1_agent_gen_app_builder_settings_from_dict = GoogleCloudDialogflowCxV3beta1AgentGenAppBuilderSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_agent_gen_app_builder_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


