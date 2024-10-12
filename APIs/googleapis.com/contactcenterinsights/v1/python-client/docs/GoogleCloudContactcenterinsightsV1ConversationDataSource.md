# GoogleCloudContactcenterinsightsV1ConversationDataSource

The conversation source, which is a combination of transcript and audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialogflow_source** | [**GoogleCloudContactcenterinsightsV1DialogflowSource**](GoogleCloudContactcenterinsightsV1DialogflowSource.md) |  | [optional] 
**gcs_source** | [**GoogleCloudContactcenterinsightsV1GcsSource**](GoogleCloudContactcenterinsightsV1GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_conversation_data_source import GoogleCloudContactcenterinsightsV1ConversationDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ConversationDataSource from a JSON string
google_cloud_contactcenterinsights_v1_conversation_data_source_instance = GoogleCloudContactcenterinsightsV1ConversationDataSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ConversationDataSource.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_conversation_data_source_dict = google_cloud_contactcenterinsights_v1_conversation_data_source_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ConversationDataSource from a dict
google_cloud_contactcenterinsights_v1_conversation_data_source_from_dict = GoogleCloudContactcenterinsightsV1ConversationDataSource.from_dict(google_cloud_contactcenterinsights_v1_conversation_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


