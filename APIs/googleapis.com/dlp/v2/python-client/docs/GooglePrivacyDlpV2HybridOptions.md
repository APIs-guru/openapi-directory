# GooglePrivacyDlpV2HybridOptions

Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A short description of where the data is coming from. Will be stored once in the job. 256 max length. | [optional] 
**labels** | **Dict[str, str]** | To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60;. Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. No more than 10 labels can be associated with a given finding. Examples: * &#x60;\&quot;environment\&quot; : \&quot;production\&quot;&#x60; * &#x60;\&quot;pipeline\&quot; : \&quot;etl\&quot;&#x60; | [optional] 
**required_finding_label_keys** | **List[str]** | These are labels that each inspection request must include within their &#39;finding_labels&#39; map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60;. No more than 10 keys can be required. | [optional] 
**table_options** | [**GooglePrivacyDlpV2TableOptions**](GooglePrivacyDlpV2TableOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hybrid_options import GooglePrivacyDlpV2HybridOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HybridOptions from a JSON string
google_privacy_dlp_v2_hybrid_options_instance = GooglePrivacyDlpV2HybridOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HybridOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hybrid_options_dict = google_privacy_dlp_v2_hybrid_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HybridOptions from a dict
google_privacy_dlp_v2_hybrid_options_from_dict = GooglePrivacyDlpV2HybridOptions.from_dict(google_privacy_dlp_v2_hybrid_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


