# GoogleCloudDialogflowV2ArticleAnswer

Represents article answer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | The name of answer record, in the format of \&quot;projects//locations//answerRecords/\&quot; | [optional] 
**confidence** | **float** | Article match confidence. The system&#39;s confidence score that this article is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**metadata** | **Dict[str, str]** | A map that contains metadata about the answer and the document from which it originates. | [optional] 
**snippets** | **List[str]** | Article snippets. | [optional] 
**title** | **str** | The article title. | [optional] 
**uri** | **str** | The article URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_article_answer import GoogleCloudDialogflowV2ArticleAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ArticleAnswer from a JSON string
google_cloud_dialogflow_v2_article_answer_instance = GoogleCloudDialogflowV2ArticleAnswer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ArticleAnswer.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_article_answer_dict = google_cloud_dialogflow_v2_article_answer_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ArticleAnswer from a dict
google_cloud_dialogflow_v2_article_answer_from_dict = GoogleCloudDialogflowV2ArticleAnswer.from_dict(google_cloud_dialogflow_v2_article_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


