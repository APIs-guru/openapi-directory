# GooglePrivacyDlpV2NumericalStatsResult

Result of the numerical stats computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_value** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 
**min_value** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 
**quantile_values** | [**List[GooglePrivacyDlpV2Value]**](GooglePrivacyDlpV2Value.md) | List of 99 values that partition the set of field values into 100 equal sized buckets. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_numerical_stats_result import GooglePrivacyDlpV2NumericalStatsResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2NumericalStatsResult from a JSON string
google_privacy_dlp_v2_numerical_stats_result_instance = GooglePrivacyDlpV2NumericalStatsResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2NumericalStatsResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_numerical_stats_result_dict = google_privacy_dlp_v2_numerical_stats_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2NumericalStatsResult from a dict
google_privacy_dlp_v2_numerical_stats_result_from_dict = GooglePrivacyDlpV2NumericalStatsResult.from_dict(google_privacy_dlp_v2_numerical_stats_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


