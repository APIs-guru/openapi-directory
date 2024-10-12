# GooglePrivacyDlpV2CustomInfoType

Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detection_rules** | [**List[GooglePrivacyDlpV2DetectionRule]**](GooglePrivacyDlpV2DetectionRule.md) | Set of detection rules to apply to all findings of this CustomInfoType. Rules are applied in order that they are specified. Not supported for the &#x60;surrogate_type&#x60; CustomInfoType. | [optional] 
**dictionary** | [**GooglePrivacyDlpV2Dictionary**](GooglePrivacyDlpV2Dictionary.md) |  | [optional] 
**exclusion_type** | **str** | If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**likelihood** | **str** | Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria specified by the rule. Defaults to &#x60;VERY_LIKELY&#x60; if not specified. | [optional] 
**regex** | [**GooglePrivacyDlpV2Regex**](GooglePrivacyDlpV2Regex.md) |  | [optional] 
**sensitivity_score** | [**GooglePrivacyDlpV2SensitivityScore**](GooglePrivacyDlpV2SensitivityScore.md) |  | [optional] 
**stored_type** | [**GooglePrivacyDlpV2StoredType**](GooglePrivacyDlpV2StoredType.md) |  | [optional] 
**surrogate_type** | **object** | Message for detecting output from deidentification transformations such as [&#x60;CryptoReplaceFfxFpeConfig&#x60;](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig). These types of transformations are those that perform pseudonymization, thereby producing a \&quot;surrogate\&quot; as output. This should be used in conjunction with a field on the transformation such as &#x60;surrogate_info_type&#x60;. This CustomInfoType does not support the use of &#x60;detection_rules&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_custom_info_type import GooglePrivacyDlpV2CustomInfoType

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CustomInfoType from a JSON string
google_privacy_dlp_v2_custom_info_type_instance = GooglePrivacyDlpV2CustomInfoType.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CustomInfoType.to_json())

# convert the object into a dict
google_privacy_dlp_v2_custom_info_type_dict = google_privacy_dlp_v2_custom_info_type_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CustomInfoType from a dict
google_privacy_dlp_v2_custom_info_type_from_dict = GooglePrivacyDlpV2CustomInfoType.from_dict(google_privacy_dlp_v2_custom_info_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


