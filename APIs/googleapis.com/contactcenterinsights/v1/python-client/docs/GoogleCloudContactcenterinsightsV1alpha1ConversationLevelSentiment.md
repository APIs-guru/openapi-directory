# GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment

One channel of conversation-level sentiment data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_tag** | **int** | The channel of the audio that the data applies to. | [optional] 
**sentiment_data** | [**GoogleCloudContactcenterinsightsV1alpha1SentimentData**](GoogleCloudContactcenterinsightsV1alpha1SentimentData.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_conversation_level_sentiment import GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment from a JSON string
google_cloud_contactcenterinsights_v1alpha1_conversation_level_sentiment_instance = GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_level_sentiment_dict = google_cloud_contactcenterinsights_v1alpha1_conversation_level_sentiment_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment from a dict
google_cloud_contactcenterinsights_v1alpha1_conversation_level_sentiment_from_dict = GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment.from_dict(google_cloud_contactcenterinsights_v1alpha1_conversation_level_sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


