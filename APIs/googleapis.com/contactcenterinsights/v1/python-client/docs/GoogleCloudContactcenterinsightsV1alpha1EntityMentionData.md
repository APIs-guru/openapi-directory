# GoogleCloudContactcenterinsightsV1alpha1EntityMentionData

The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_unique_id** | **str** | The key of this entity in conversation entities. Can be used to retrieve the exact &#x60;Entity&#x60; this mention is attached to. | [optional] 
**sentiment** | [**GoogleCloudContactcenterinsightsV1alpha1SentimentData**](GoogleCloudContactcenterinsightsV1alpha1SentimentData.md) |  | [optional] 
**type** | **str** | The type of the entity mention. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_entity_mention_data import GoogleCloudContactcenterinsightsV1alpha1EntityMentionData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1EntityMentionData from a JSON string
google_cloud_contactcenterinsights_v1alpha1_entity_mention_data_instance = GoogleCloudContactcenterinsightsV1alpha1EntityMentionData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1EntityMentionData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_entity_mention_data_dict = google_cloud_contactcenterinsights_v1alpha1_entity_mention_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1EntityMentionData from a dict
google_cloud_contactcenterinsights_v1alpha1_entity_mention_data_from_dict = GoogleCloudContactcenterinsightsV1alpha1EntityMentionData.from_dict(google_cloud_contactcenterinsights_v1alpha1_entity_mention_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


