# GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig

Configuration specific to LivePerson (https://www.liveperson.com).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Required. Account number of the LivePerson account to connect. This is the account number you input at the login page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_human_agent_handoff_config_live_person_config import GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig from a JSON string
google_cloud_dialogflow_v2_human_agent_handoff_config_live_person_config_instance = GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_human_agent_handoff_config_live_person_config_dict = google_cloud_dialogflow_v2_human_agent_handoff_config_live_person_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig from a dict
google_cloud_dialogflow_v2_human_agent_handoff_config_live_person_config_from_dict = GoogleCloudDialogflowV2HumanAgentHandoffConfigLivePersonConfig.from_dict(google_cloud_dialogflow_v2_human_agent_handoff_config_live_person_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


