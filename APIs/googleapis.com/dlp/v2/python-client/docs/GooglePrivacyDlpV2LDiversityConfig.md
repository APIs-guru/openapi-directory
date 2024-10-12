# GooglePrivacyDlpV2LDiversityConfig

l-diversity metric, used for analysis of reidentification risk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quasi_ids** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key. | [optional] 
**sensitive_attribute** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_l_diversity_config import GooglePrivacyDlpV2LDiversityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2LDiversityConfig from a JSON string
google_privacy_dlp_v2_l_diversity_config_instance = GooglePrivacyDlpV2LDiversityConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2LDiversityConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_l_diversity_config_dict = google_privacy_dlp_v2_l_diversity_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2LDiversityConfig from a dict
google_privacy_dlp_v2_l_diversity_config_from_dict = GooglePrivacyDlpV2LDiversityConfig.from_dict(google_privacy_dlp_v2_l_diversity_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


