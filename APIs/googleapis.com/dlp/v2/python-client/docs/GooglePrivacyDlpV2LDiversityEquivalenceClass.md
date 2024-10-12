# GooglePrivacyDlpV2LDiversityEquivalenceClass

The set of columns' values that share the same ldiversity value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equivalence_class_size** | **str** | Size of the k-anonymity equivalence class. | [optional] 
**num_distinct_sensitive_values** | **str** | Number of distinct sensitive values in this equivalence class. | [optional] 
**quasi_ids_values** | [**List[GooglePrivacyDlpV2Value]**](GooglePrivacyDlpV2Value.md) | Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request. | [optional] 
**top_sensitive_values** | [**List[GooglePrivacyDlpV2ValueFrequency]**](GooglePrivacyDlpV2ValueFrequency.md) | Estimated frequencies of top sensitive values. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_l_diversity_equivalence_class import GooglePrivacyDlpV2LDiversityEquivalenceClass

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2LDiversityEquivalenceClass from a JSON string
google_privacy_dlp_v2_l_diversity_equivalence_class_instance = GooglePrivacyDlpV2LDiversityEquivalenceClass.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2LDiversityEquivalenceClass.to_json())

# convert the object into a dict
google_privacy_dlp_v2_l_diversity_equivalence_class_dict = google_privacy_dlp_v2_l_diversity_equivalence_class_instance.to_dict()
# create an instance of GooglePrivacyDlpV2LDiversityEquivalenceClass from a dict
google_privacy_dlp_v2_l_diversity_equivalence_class_from_dict = GooglePrivacyDlpV2LDiversityEquivalenceClass.from_dict(google_privacy_dlp_v2_l_diversity_equivalence_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


