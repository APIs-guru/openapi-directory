# GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData

The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human-readable name of the phrase matcher. | [optional] 
**phrase_matcher** | **str** | The unique identifier (the resource name) of the phrase matcher. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_phrase_match_data import GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData from a JSON string
google_cloud_contactcenterinsights_v1alpha1_phrase_match_data_instance = GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_phrase_match_data_dict = google_cloud_contactcenterinsights_v1alpha1_phrase_match_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData from a dict
google_cloud_contactcenterinsights_v1alpha1_phrase_match_data_from_dict = GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData.from_dict(google_cloud_contactcenterinsights_v1alpha1_phrase_match_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


