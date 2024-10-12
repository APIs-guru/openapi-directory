# GooglePrivacyDlpV2CategoricalStatsConfig

Compute numerical stats over an individual column, including number of distinct values and value count distribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_categorical_stats_config import GooglePrivacyDlpV2CategoricalStatsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CategoricalStatsConfig from a JSON string
google_privacy_dlp_v2_categorical_stats_config_instance = GooglePrivacyDlpV2CategoricalStatsConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CategoricalStatsConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_categorical_stats_config_dict = google_privacy_dlp_v2_categorical_stats_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CategoricalStatsConfig from a dict
google_privacy_dlp_v2_categorical_stats_config_from_dict = GooglePrivacyDlpV2CategoricalStatsConfig.from_dict(google_privacy_dlp_v2_categorical_stats_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


