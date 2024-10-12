# GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata

The metadata of SavedQuery contains TextSentiment Annotations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentiment_max** | **int** | The maximum sentiment of sentiment Anntoation in this SavedQuery. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_text_sentiment_saved_query_metadata import GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata from a JSON string
google_cloud_aiplatform_v1_schema_text_sentiment_saved_query_metadata_instance = GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_text_sentiment_saved_query_metadata_dict = google_cloud_aiplatform_v1_schema_text_sentiment_saved_query_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata from a dict
google_cloud_aiplatform_v1_schema_text_sentiment_saved_query_metadata_from_dict = GoogleCloudAiplatformV1SchemaTextSentimentSavedQueryMetadata.from_dict(google_cloud_aiplatform_v1_schema_text_sentiment_saved_query_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


