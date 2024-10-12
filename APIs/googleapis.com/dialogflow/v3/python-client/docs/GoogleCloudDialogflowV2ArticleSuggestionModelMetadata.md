# GoogleCloudDialogflowV2ArticleSuggestionModelMetadata

Metadata for article suggestion models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**training_model_type** | **str** | Optional. Type of the article suggestion model. If not provided, model_type is used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_article_suggestion_model_metadata import GoogleCloudDialogflowV2ArticleSuggestionModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ArticleSuggestionModelMetadata from a JSON string
google_cloud_dialogflow_v2_article_suggestion_model_metadata_instance = GoogleCloudDialogflowV2ArticleSuggestionModelMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ArticleSuggestionModelMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_article_suggestion_model_metadata_dict = google_cloud_dialogflow_v2_article_suggestion_model_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ArticleSuggestionModelMetadata from a dict
google_cloud_dialogflow_v2_article_suggestion_model_metadata_from_dict = GoogleCloudDialogflowV2ArticleSuggestionModelMetadata.from_dict(google_cloud_dialogflow_v2_article_suggestion_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


