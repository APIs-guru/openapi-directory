# GooglePrivacyDlpV2Trigger

What event needs to occur for a new job to be started.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manual** | **object** | Job trigger option for hybrid jobs. Jobs must be manually created and finished. | [optional] 
**schedule** | [**GooglePrivacyDlpV2Schedule**](GooglePrivacyDlpV2Schedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_trigger import GooglePrivacyDlpV2Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Trigger from a JSON string
google_privacy_dlp_v2_trigger_instance = GooglePrivacyDlpV2Trigger.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Trigger.to_json())

# convert the object into a dict
google_privacy_dlp_v2_trigger_dict = google_privacy_dlp_v2_trigger_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Trigger from a dict
google_privacy_dlp_v2_trigger_from_dict = GooglePrivacyDlpV2Trigger.from_dict(google_privacy_dlp_v2_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


