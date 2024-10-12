# GoogleCloudDialogflowV2IntentFollowupIntentInfo

Represents a single followup intent in the chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**followup_intent_name** | **str** | The unique identifier of the followup intent. Format: &#x60;projects//agent/intents/&#x60;. | [optional] 
**parent_followup_intent_name** | **str** | The unique identifier of the followup intent&#39;s parent. Format: &#x60;projects//agent/intents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_intent_followup_intent_info import GoogleCloudDialogflowV2IntentFollowupIntentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2IntentFollowupIntentInfo from a JSON string
google_cloud_dialogflow_v2_intent_followup_intent_info_instance = GoogleCloudDialogflowV2IntentFollowupIntentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2IntentFollowupIntentInfo.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_intent_followup_intent_info_dict = google_cloud_dialogflow_v2_intent_followup_intent_info_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2IntentFollowupIntentInfo from a dict
google_cloud_dialogflow_v2_intent_followup_intent_info_from_dict = GoogleCloudDialogflowV2IntentFollowupIntentInfo.from_dict(google_cloud_dialogflow_v2_intent_followup_intent_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


