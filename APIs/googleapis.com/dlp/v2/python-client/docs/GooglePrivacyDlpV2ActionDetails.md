# GooglePrivacyDlpV2ActionDetails

The results of an Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_details** | [**GooglePrivacyDlpV2DeidentifyDataSourceDetails**](GooglePrivacyDlpV2DeidentifyDataSourceDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_action_details import GooglePrivacyDlpV2ActionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ActionDetails from a JSON string
google_privacy_dlp_v2_action_details_instance = GooglePrivacyDlpV2ActionDetails.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ActionDetails.to_json())

# convert the object into a dict
google_privacy_dlp_v2_action_details_dict = google_privacy_dlp_v2_action_details_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ActionDetails from a dict
google_privacy_dlp_v2_action_details_from_dict = GooglePrivacyDlpV2ActionDetails.from_dict(google_privacy_dlp_v2_action_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


