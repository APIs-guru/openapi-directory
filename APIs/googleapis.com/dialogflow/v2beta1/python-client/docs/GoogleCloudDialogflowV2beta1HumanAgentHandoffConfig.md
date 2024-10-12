# GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig

Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**live_person_config** | [**GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig**](GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigLivePersonConfig.md) |  | [optional] 
**salesforce_live_agent_config** | [**GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig**](GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_human_agent_handoff_config import GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig from a JSON string
google_cloud_dialogflow_v2beta1_human_agent_handoff_config_instance = GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_human_agent_handoff_config_dict = google_cloud_dialogflow_v2beta1_human_agent_handoff_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig from a dict
google_cloud_dialogflow_v2beta1_human_agent_handoff_config_from_dict = GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig.from_dict(google_cloud_dialogflow_v2beta1_human_agent_handoff_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


