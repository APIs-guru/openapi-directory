# GoogleCloudDialogflowV2beta1Environment

You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | Optional. The agent version loaded into this environment. Supported formats: - &#x60;projects//agent/versions/&#x60; - &#x60;projects//locations//agent/versions/&#x60; | [optional] 
**description** | **str** | Optional. The developer-provided description for this environment. The maximum length is 500 characters. If exceeded, the request is rejected. | [optional] 
**fulfillment** | [**GoogleCloudDialogflowV2beta1Fulfillment**](GoogleCloudDialogflowV2beta1Fulfillment.md) |  | [optional] 
**name** | **str** | Output only. The unique identifier of this agent environment. Supported formats: - &#x60;projects//agent/environments/&#x60; - &#x60;projects//locations//agent/environments/&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The state of this environment. This field is read-only, i.e., it cannot be set by create and update methods. | [optional] [readonly] 
**text_to_speech_settings** | [**GoogleCloudDialogflowV2beta1TextToSpeechSettings**](GoogleCloudDialogflowV2beta1TextToSpeechSettings.md) |  | [optional] 
**update_time** | **str** | Output only. The last update time of this environment. This field is read-only, i.e., it cannot be set by create and update methods. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_environment import GoogleCloudDialogflowV2beta1Environment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Environment from a JSON string
google_cloud_dialogflow_v2beta1_environment_instance = GoogleCloudDialogflowV2beta1Environment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Environment.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_environment_dict = google_cloud_dialogflow_v2beta1_environment_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Environment from a dict
google_cloud_dialogflow_v2beta1_environment_from_dict = GoogleCloudDialogflowV2beta1Environment.from_dict(google_cloud_dialogflow_v2beta1_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


