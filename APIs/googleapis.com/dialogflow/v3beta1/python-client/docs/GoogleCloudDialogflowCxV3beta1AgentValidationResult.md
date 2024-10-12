# GoogleCloudDialogflowCxV3beta1AgentValidationResult

The response message for Agents.GetAgentValidationResult.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_validation_results** | [**List[GoogleCloudDialogflowCxV3beta1FlowValidationResult]**](GoogleCloudDialogflowCxV3beta1FlowValidationResult.md) | Contains all flow validation results. | [optional] 
**name** | **str** | The unique identifier of the agent validation result. Format: &#x60;projects//locations//agents//validationResult&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_agent_validation_result import GoogleCloudDialogflowCxV3beta1AgentValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1AgentValidationResult from a JSON string
google_cloud_dialogflow_cx_v3beta1_agent_validation_result_instance = GoogleCloudDialogflowCxV3beta1AgentValidationResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1AgentValidationResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_agent_validation_result_dict = google_cloud_dialogflow_cx_v3beta1_agent_validation_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1AgentValidationResult from a dict
google_cloud_dialogflow_cx_v3beta1_agent_validation_result_from_dict = GoogleCloudDialogflowCxV3beta1AgentValidationResult.from_dict(google_cloud_dialogflow_cx_v3beta1_agent_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


