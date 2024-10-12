# GoogleCloudDialogflowV2beta1SubAgent

Contains basic configuration for a sub-agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **str** | Optional. The unique identifier (&#x60;environment name&#x60; in dialogflow console) of this sub-agent environment. Assumes draft environment if &#x60;environment&#x60; is not set. | [optional] 
**project** | **str** | Required. The project of this agent. Format: &#x60;projects/&#x60; or &#x60;projects//locations/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_sub_agent import GoogleCloudDialogflowV2beta1SubAgent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SubAgent from a JSON string
google_cloud_dialogflow_v2beta1_sub_agent_instance = GoogleCloudDialogflowV2beta1SubAgent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SubAgent.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_sub_agent_dict = google_cloud_dialogflow_v2beta1_sub_agent_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SubAgent from a dict
google_cloud_dialogflow_v2beta1_sub_agent_from_dict = GoogleCloudDialogflowV2beta1SubAgent.from_dict(google_cloud_dialogflow_v2beta1_sub_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


