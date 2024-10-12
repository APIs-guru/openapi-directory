# GooglePrivacyDlpV2ExcludeInfoTypes

List of excluded infoTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_types** | [**List[GooglePrivacyDlpV2InfoType]**](GooglePrivacyDlpV2InfoType.md) | InfoType list in ExclusionRule rule drops a finding when it overlaps or contained within with a finding of an infoType from this list. For example, for &#x60;InspectionRuleSet.info_types&#x60; containing \&quot;PHONE_NUMBER\&quot;&#x60; and &#x60;exclusion_rule&#x60; containing &#x60;exclude_info_types.info_types&#x60; with \&quot;EMAIL_ADDRESS\&quot; the phone number findings are dropped if they overlap with EMAIL_ADDRESS finding. That leads to \&quot;555-222-2222@example.org\&quot; to generate only a single finding, namely email address. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_exclude_info_types import GooglePrivacyDlpV2ExcludeInfoTypes

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ExcludeInfoTypes from a JSON string
google_privacy_dlp_v2_exclude_info_types_instance = GooglePrivacyDlpV2ExcludeInfoTypes.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ExcludeInfoTypes.to_json())

# convert the object into a dict
google_privacy_dlp_v2_exclude_info_types_dict = google_privacy_dlp_v2_exclude_info_types_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ExcludeInfoTypes from a dict
google_privacy_dlp_v2_exclude_info_types_from_dict = GooglePrivacyDlpV2ExcludeInfoTypes.from_dict(google_privacy_dlp_v2_exclude_info_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


