# GoogleCloudContactcenterinsightsV1IntentMatchData

The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intent_unique_id** | **str** | The id of the matched intent. Can be used to retrieve the corresponding intent information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_intent_match_data import GoogleCloudContactcenterinsightsV1IntentMatchData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1IntentMatchData from a JSON string
google_cloud_contactcenterinsights_v1_intent_match_data_instance = GoogleCloudContactcenterinsightsV1IntentMatchData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1IntentMatchData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_intent_match_data_dict = google_cloud_contactcenterinsights_v1_intent_match_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1IntentMatchData from a dict
google_cloud_contactcenterinsights_v1_intent_match_data_from_dict = GoogleCloudContactcenterinsightsV1IntentMatchData.from_dict(google_cloud_contactcenterinsights_v1_intent_match_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


