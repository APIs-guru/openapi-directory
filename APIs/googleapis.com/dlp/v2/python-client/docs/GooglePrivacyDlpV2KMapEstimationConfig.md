# GooglePrivacyDlpV2KMapEstimationConfig

Reidentifiability metric. This corresponds to a risk model similar to what is called \"journalist risk\" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_tables** | [**List[GooglePrivacyDlpV2AuxiliaryTable]**](GooglePrivacyDlpV2AuxiliaryTable.md) | Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table. | [optional] 
**quasi_ids** | [**List[GooglePrivacyDlpV2TaggedField]**](GooglePrivacyDlpV2TaggedField.md) | Required. Fields considered to be quasi-identifiers. No two columns can have the same tag. | [optional] 
**region_code** | **str** | ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_map_estimation_config import GooglePrivacyDlpV2KMapEstimationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KMapEstimationConfig from a JSON string
google_privacy_dlp_v2_k_map_estimation_config_instance = GooglePrivacyDlpV2KMapEstimationConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KMapEstimationConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_map_estimation_config_dict = google_privacy_dlp_v2_k_map_estimation_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KMapEstimationConfig from a dict
google_privacy_dlp_v2_k_map_estimation_config_from_dict = GooglePrivacyDlpV2KMapEstimationConfig.from_dict(google_privacy_dlp_v2_k_map_estimation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


