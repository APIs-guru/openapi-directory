# GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig

Configuration specific to Salesforce Live Agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**button_id** | **str** | Required. Live Agent chat button ID. | [optional] 
**deployment_id** | **str** | Required. Live Agent deployment ID. | [optional] 
**endpoint_domain** | **str** | Required. Domain of the Live Agent endpoint for this agent. You can find the endpoint URL in the &#x60;Live Agent settings&#x60; page. For example if URL has the form https://d.la4-c2-phx.salesforceliveagent.com/..., you should fill in d.la4-c2-phx.salesforceliveagent.com. | [optional] 
**organization_id** | **str** | Required. The organization ID of the Salesforce account. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_handoff_config_salesforce_live_agent_config import GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig from a JSON string
google_cloud_dialogflow_v2_human_agent_handoff_config_salesforce_live_agent_config_instance = GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_handoff_config_salesforce_live_agent_config_dict = google_cloud_dialogflow_v2_human_agent_handoff_config_salesforce_live_agent_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig from a dict
google_cloud_dialogflow_v2_human_agent_handoff_config_salesforce_live_agent_config_from_dict = GoogleCloudDialogflowV2HumanAgentHandoffConfigSalesforceLiveAgentConfig.from_dict(google_cloud_dialogflow_v2_human_agent_handoff_config_salesforce_live_agent_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


