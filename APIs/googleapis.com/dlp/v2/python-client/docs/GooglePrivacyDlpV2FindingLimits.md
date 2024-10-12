# GooglePrivacyDlpV2FindingLimits

Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_findings_per_info_type** | [**List[GooglePrivacyDlpV2InfoTypeLimit]**](GooglePrivacyDlpV2InfoTypeLimit.md) | Configuration of findings limit given for specified infoTypes. | [optional] 
**max_findings_per_item** | **int** | Max number of findings that are returned for each item scanned. When set within an InspectContentRequest, this field is ignored. This value isn&#39;t a hard limit. If the number of findings for an item reaches this limit, the inspection of that item ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns for the item can be multiple times higher than this value. | [optional] 
**max_findings_per_request** | **int** | Max number of findings that are returned per request or job. If you set this field in an InspectContentRequest, the resulting maximum value is the value that you set or 3,000, whichever is lower. This value isn&#39;t a hard limit. If an inspection reaches this limit, the inspection ends gradually, not abruptly. Therefore, the actual number of findings that Cloud DLP returns can be multiple times higher than this value. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_finding_limits import GooglePrivacyDlpV2FindingLimits

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2FindingLimits from a JSON string
google_privacy_dlp_v2_finding_limits_instance = GooglePrivacyDlpV2FindingLimits.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2FindingLimits.to_json())

# convert the object into a dict
google_privacy_dlp_v2_finding_limits_dict = google_privacy_dlp_v2_finding_limits_instance.to_dict()
# create an instance of GooglePrivacyDlpV2FindingLimits from a dict
google_privacy_dlp_v2_finding_limits_from_dict = GooglePrivacyDlpV2FindingLimits.from_dict(google_privacy_dlp_v2_finding_limits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


