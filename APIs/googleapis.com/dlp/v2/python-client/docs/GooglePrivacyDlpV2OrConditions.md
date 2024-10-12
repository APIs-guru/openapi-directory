# GooglePrivacyDlpV2OrConditions

There is an OR relationship between these attributes. They are used to determine if a table should be scanned or not in Discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_age** | **str** | Minimum age a table must have before Cloud DLP can profile it. Value must be 1 hour or greater. | [optional] 
**min_row_count** | **int** | Minimum number of rows that should be present before Cloud DLP profiles a table | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_or_conditions import GooglePrivacyDlpV2OrConditions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2OrConditions from a JSON string
google_privacy_dlp_v2_or_conditions_instance = GooglePrivacyDlpV2OrConditions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2OrConditions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_or_conditions_dict = google_privacy_dlp_v2_or_conditions_instance.to_dict()
# create an instance of GooglePrivacyDlpV2OrConditions from a dict
google_privacy_dlp_v2_or_conditions_from_dict = GooglePrivacyDlpV2OrConditions.from_dict(google_privacy_dlp_v2_or_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


