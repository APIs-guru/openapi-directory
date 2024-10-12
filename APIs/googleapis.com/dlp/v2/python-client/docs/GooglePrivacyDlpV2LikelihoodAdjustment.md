# GooglePrivacyDlpV2LikelihoodAdjustment

Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_likelihood** | **str** | Set the likelihood of a finding to a fixed value. | [optional] 
**relative_likelihood** | **int** | Increase or decrease the likelihood by the specified number of levels. For example, if a finding would be &#x60;POSSIBLE&#x60; without the detection rule and &#x60;relative_likelihood&#x60; is 1, then it is upgraded to &#x60;LIKELY&#x60;, while a value of -1 would downgrade it to &#x60;UNLIKELY&#x60;. Likelihood may never drop below &#x60;VERY_UNLIKELY&#x60; or exceed &#x60;VERY_LIKELY&#x60;, so applying an adjustment of 1 followed by an adjustment of -1 when base likelihood is &#x60;VERY_LIKELY&#x60; will result in a final likelihood of &#x60;LIKELY&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_likelihood_adjustment import GooglePrivacyDlpV2LikelihoodAdjustment

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2LikelihoodAdjustment from a JSON string
google_privacy_dlp_v2_likelihood_adjustment_instance = GooglePrivacyDlpV2LikelihoodAdjustment.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2LikelihoodAdjustment.to_json())

# convert the object into a dict
google_privacy_dlp_v2_likelihood_adjustment_dict = google_privacy_dlp_v2_likelihood_adjustment_instance.to_dict()
# create an instance of GooglePrivacyDlpV2LikelihoodAdjustment from a dict
google_privacy_dlp_v2_likelihood_adjustment_from_dict = GooglePrivacyDlpV2LikelihoodAdjustment.from_dict(google_privacy_dlp_v2_likelihood_adjustment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


