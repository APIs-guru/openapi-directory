# GoogleCloudDialogflowV2beta1SuggestionFaqAnswer

Represents suggested answer from \"frequently asked questions\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | **str** | Output only. The piece of text from the &#x60;source&#x60; knowledge base document. | [optional] 
**answer_record** | **str** | Output only. The name of answer record, in the format of \&quot;projects//locations//answerRecords/\&quot; | [optional] 
**confidence** | **float** | The system&#39;s confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**metadata** | **Dict[str, str]** | Output only. A map that contains metadata about the answer and the document from which it originates. | [optional] 
**question** | **str** | Output only. The corresponding FAQ question. | [optional] 
**source** | **str** | Output only. Indicates which Knowledge Document this answer was extracted from. Format: &#x60;projects//locations//agent/knowledgeBases//documents/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggestion_faq_answer import GoogleCloudDialogflowV2beta1SuggestionFaqAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestionFaqAnswer from a JSON string
google_cloud_dialogflow_v2beta1_suggestion_faq_answer_instance = GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggestion_faq_answer_dict = google_cloud_dialogflow_v2beta1_suggestion_faq_answer_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestionFaqAnswer from a dict
google_cloud_dialogflow_v2beta1_suggestion_faq_answer_from_dict = GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.from_dict(google_cloud_dialogflow_v2beta1_suggestion_faq_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


