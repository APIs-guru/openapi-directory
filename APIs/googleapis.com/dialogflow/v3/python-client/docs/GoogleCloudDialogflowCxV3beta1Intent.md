# GoogleCloudDialogflowCxV3beta1Intent

An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. | [optional] 
**display_name** | **str** | Required. The human-readable name of the intent, unique within the agent. | [optional] 
**is_fallback** | **bool** | Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event. | [optional] 
**labels** | **Dict[str, str]** | The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols &#39;-&#39; and &#39;_&#39;. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix \&quot;sys-\&quot; is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. \&quot;sys-head\&quot; means the intent is a head intent. \&quot;sys-contextual\&quot; means the intent is a contextual intent. | [optional] 
**name** | **str** | The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: &#x60;projects//locations//agents//intents/&#x60;. | [optional] 
**parameters** | [**List[GoogleCloudDialogflowCxV3beta1IntentParameter]**](GoogleCloudDialogflowCxV3beta1IntentParameter.md) | The collection of parameters associated with the intent. | [optional] 
**priority** | **int** | The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the &#x60;Normal&#x60; priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests. | [optional] 
**training_phrases** | [**List[GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase]**](GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase.md) | The collection of training phrases the agent is trained on to identify the intent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_intent import GoogleCloudDialogflowCxV3beta1Intent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Intent from a JSON string
google_cloud_dialogflow_cx_v3beta1_intent_instance = GoogleCloudDialogflowCxV3beta1Intent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Intent.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_intent_dict = google_cloud_dialogflow_cx_v3beta1_intent_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Intent from a dict
google_cloud_dialogflow_cx_v3beta1_intent_from_dict = GoogleCloudDialogflowCxV3beta1Intent.from_dict(google_cloud_dialogflow_cx_v3beta1_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


