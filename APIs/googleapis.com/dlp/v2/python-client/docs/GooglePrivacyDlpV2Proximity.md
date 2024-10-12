# GooglePrivacyDlpV2Proximity

Message for specifying a window around a finding to apply a detection rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**window_after** | **int** | Number of characters after the finding to consider. | [optional] 
**window_before** | **int** | Number of characters before the finding to consider. For tabular data, if you want to modify the likelihood of an entire column of findngs, set this to 1. For more information, see [Hotword example: Set the match likelihood of a table column] (https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-likelihood#match-column-values). | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_proximity import GooglePrivacyDlpV2Proximity

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Proximity from a JSON string
google_privacy_dlp_v2_proximity_instance = GooglePrivacyDlpV2Proximity.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Proximity.to_json())

# convert the object into a dict
google_privacy_dlp_v2_proximity_dict = google_privacy_dlp_v2_proximity_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Proximity from a dict
google_privacy_dlp_v2_proximity_from_dict = GooglePrivacyDlpV2Proximity.from_dict(google_privacy_dlp_v2_proximity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


