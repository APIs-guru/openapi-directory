# GoogleCloudDialogflowV2SmartReplyAnswer

Represents a smart reply answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | The name of answer record, in the format of \&quot;projects//locations//answerRecords/\&quot; | [optional] 
**confidence** | **float** | Smart reply confidence. The system&#39;s confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**reply** | **str** | The content of the reply. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_smart_reply_answer import GoogleCloudDialogflowV2SmartReplyAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SmartReplyAnswer from a JSON string
google_cloud_dialogflow_v2_smart_reply_answer_instance = GoogleCloudDialogflowV2SmartReplyAnswer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SmartReplyAnswer.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_smart_reply_answer_dict = google_cloud_dialogflow_v2_smart_reply_answer_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SmartReplyAnswer from a dict
google_cloud_dialogflow_v2_smart_reply_answer_from_dict = GoogleCloudDialogflowV2SmartReplyAnswer.from_dict(google_cloud_dialogflow_v2_smart_reply_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


