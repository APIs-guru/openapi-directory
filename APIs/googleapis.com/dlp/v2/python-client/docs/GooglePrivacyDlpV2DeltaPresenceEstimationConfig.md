# GooglePrivacyDlpV2DeltaPresenceEstimationConfig

δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_tables** | [**List[GooglePrivacyDlpV2StatisticalTable]**](GooglePrivacyDlpV2StatisticalTable.md) | Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table. | [optional] 
**quasi_ids** | [**List[GooglePrivacyDlpV2QuasiId]**](GooglePrivacyDlpV2QuasiId.md) | Required. Fields considered to be quasi-identifiers. No two fields can have the same tag. | [optional] 
**region_code** | **str** | ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_delta_presence_estimation_config import GooglePrivacyDlpV2DeltaPresenceEstimationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeltaPresenceEstimationConfig from a JSON string
google_privacy_dlp_v2_delta_presence_estimation_config_instance = GooglePrivacyDlpV2DeltaPresenceEstimationConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeltaPresenceEstimationConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_delta_presence_estimation_config_dict = google_privacy_dlp_v2_delta_presence_estimation_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeltaPresenceEstimationConfig from a dict
google_privacy_dlp_v2_delta_presence_estimation_config_from_dict = GooglePrivacyDlpV2DeltaPresenceEstimationConfig.from_dict(google_privacy_dlp_v2_delta_presence_estimation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


