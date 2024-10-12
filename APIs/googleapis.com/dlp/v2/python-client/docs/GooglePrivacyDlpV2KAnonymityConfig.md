# GooglePrivacyDlpV2KAnonymityConfig

k-anonymity metric, used for analysis of reidentification risk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | [**GooglePrivacyDlpV2EntityId**](GooglePrivacyDlpV2EntityId.md) |  | [optional] 
**quasi_ids** | [**List[GooglePrivacyDlpV2FieldId]**](GooglePrivacyDlpV2FieldId.md) | Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_anonymity_config import GooglePrivacyDlpV2KAnonymityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KAnonymityConfig from a JSON string
google_privacy_dlp_v2_k_anonymity_config_instance = GooglePrivacyDlpV2KAnonymityConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KAnonymityConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_anonymity_config_dict = google_privacy_dlp_v2_k_anonymity_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KAnonymityConfig from a dict
google_privacy_dlp_v2_k_anonymity_config_from_dict = GooglePrivacyDlpV2KAnonymityConfig.from_dict(google_privacy_dlp_v2_k_anonymity_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


