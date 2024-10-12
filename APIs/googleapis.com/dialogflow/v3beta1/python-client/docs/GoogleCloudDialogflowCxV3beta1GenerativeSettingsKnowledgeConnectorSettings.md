# GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings

Settings for knowledge connector. These parameters are used for LLM prompt like \"You are . You are a helpful and verbose at , . Your task is to help humans on \".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** | Name of the virtual agent. Used for LLM prompt. Can be left empty. | [optional] 
**agent_identity** | **str** | Identity of the agent, e.g. \&quot;virtual agent\&quot;, \&quot;AI assistant\&quot;. | [optional] 
**agent_scope** | **str** | Agent scope, e.g. \&quot;Example company website\&quot;, \&quot;internal Example company website for employees\&quot;, \&quot;manual of car owner\&quot;. | [optional] 
**business** | **str** | Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search. | [optional] 
**business_description** | **str** | Company description, used for LLM prompt, e.g. \&quot;a family company selling freshly roasted coffee beans\&quot;. | [optional] 
**disable_data_store_fallback** | **bool** | Whether to disable fallback to Data Store search results (in case the LLM couldn&#39;t pick a proper answer). Per default the feature is enabled. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_generative_settings_knowledge_connector_settings import GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings from a JSON string
google_cloud_dialogflow_cx_v3beta1_generative_settings_knowledge_connector_settings_instance = GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_generative_settings_knowledge_connector_settings_dict = google_cloud_dialogflow_cx_v3beta1_generative_settings_knowledge_connector_settings_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings from a dict
google_cloud_dialogflow_cx_v3beta1_generative_settings_knowledge_connector_settings_from_dict = GoogleCloudDialogflowCxV3beta1GenerativeSettingsKnowledgeConnectorSettings.from_dict(google_cloud_dialogflow_cx_v3beta1_generative_settings_knowledge_connector_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


