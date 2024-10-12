# GooglePrivacyDlpV2KAnonymityEquivalenceClass

The set of columns' values that share the same ldiversity value

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equivalence_class_size** | **str** | Size of the equivalence class, for example number of rows with the above set of values. | [optional] 
**quasi_ids_values** | [**List[GooglePrivacyDlpV2Value]**](GooglePrivacyDlpV2Value.md) | Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_anonymity_equivalence_class import GooglePrivacyDlpV2KAnonymityEquivalenceClass

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KAnonymityEquivalenceClass from a JSON string
google_privacy_dlp_v2_k_anonymity_equivalence_class_instance = GooglePrivacyDlpV2KAnonymityEquivalenceClass.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KAnonymityEquivalenceClass.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_anonymity_equivalence_class_dict = google_privacy_dlp_v2_k_anonymity_equivalence_class_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KAnonymityEquivalenceClass from a dict
google_privacy_dlp_v2_k_anonymity_equivalence_class_from_dict = GooglePrivacyDlpV2KAnonymityEquivalenceClass.from_dict(google_privacy_dlp_v2_k_anonymity_equivalence_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


