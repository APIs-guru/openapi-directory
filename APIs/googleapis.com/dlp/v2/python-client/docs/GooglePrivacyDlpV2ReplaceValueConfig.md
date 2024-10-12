# GooglePrivacyDlpV2ReplaceValueConfig

Replace each input value with a given `Value`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_value** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_replace_value_config import GooglePrivacyDlpV2ReplaceValueConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ReplaceValueConfig from a JSON string
google_privacy_dlp_v2_replace_value_config_instance = GooglePrivacyDlpV2ReplaceValueConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ReplaceValueConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_replace_value_config_dict = google_privacy_dlp_v2_replace_value_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ReplaceValueConfig from a dict
google_privacy_dlp_v2_replace_value_config_from_dict = GooglePrivacyDlpV2ReplaceValueConfig.from_dict(google_privacy_dlp_v2_replace_value_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


