# GooglePrivacyDlpV2KMapEstimationQuasiIdValues

A tuple of values for the quasi-identifier columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_anonymity** | **str** | The estimated anonymity for these quasi-identifier values. | [optional] 
**quasi_ids_values** | [**List[GooglePrivacyDlpV2Value]**](GooglePrivacyDlpV2Value.md) | The quasi-identifier values. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_map_estimation_quasi_id_values import GooglePrivacyDlpV2KMapEstimationQuasiIdValues

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KMapEstimationQuasiIdValues from a JSON string
google_privacy_dlp_v2_k_map_estimation_quasi_id_values_instance = GooglePrivacyDlpV2KMapEstimationQuasiIdValues.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KMapEstimationQuasiIdValues.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_map_estimation_quasi_id_values_dict = google_privacy_dlp_v2_k_map_estimation_quasi_id_values_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KMapEstimationQuasiIdValues from a dict
google_privacy_dlp_v2_k_map_estimation_quasi_id_values_from_dict = GooglePrivacyDlpV2KMapEstimationQuasiIdValues.from_dict(google_privacy_dlp_v2_k_map_estimation_quasi_id_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


