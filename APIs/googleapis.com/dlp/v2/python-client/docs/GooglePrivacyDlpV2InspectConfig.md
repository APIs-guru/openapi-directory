# GooglePrivacyDlpV2InspectConfig

Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_options** | **List[str]** | Deprecated and unused. | [optional] 
**custom_info_types** | [**List[GooglePrivacyDlpV2CustomInfoType]**](GooglePrivacyDlpV2CustomInfoType.md) | CustomInfoTypes provided by the user. See https://cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes to learn more. | [optional] 
**exclude_info_types** | **bool** | When true, excludes type information of the findings. This is not used for data profiling. | [optional] 
**include_quote** | **bool** | When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling. | [optional] 
**info_types** | [**List[GooglePrivacyDlpV2InfoType]**](GooglePrivacyDlpV2InfoType.md) | Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose a default list of detectors to run, which may change over time. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time. | [optional] 
**limits** | [**GooglePrivacyDlpV2FindingLimits**](GooglePrivacyDlpV2FindingLimits.md) |  | [optional] 
**min_likelihood** | **str** | Only returns findings equal to or above this threshold. The default is POSSIBLE. In general, the highest likelihood setting yields the fewest findings in results and the lowest chance of a false positive. For more information, see [Match likelihood](https://cloud.google.com/sensitive-data-protection/docs/likelihood). | [optional] 
**min_likelihood_per_info_type** | [**List[GooglePrivacyDlpV2InfoTypeLikelihood]**](GooglePrivacyDlpV2InfoTypeLikelihood.md) | Minimum likelihood per infotype. For each infotype, a user can specify a minimum likelihood. The system only returns a finding if its likelihood is above this threshold. If this field is not set, the system uses the InspectConfig min_likelihood. | [optional] 
**rule_set** | [**List[GooglePrivacyDlpV2InspectionRuleSet]**](GooglePrivacyDlpV2InspectionRuleSet.md) | Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspect_config import GooglePrivacyDlpV2InspectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectConfig from a JSON string
google_privacy_dlp_v2_inspect_config_instance = GooglePrivacyDlpV2InspectConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspect_config_dict = google_privacy_dlp_v2_inspect_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectConfig from a dict
google_privacy_dlp_v2_inspect_config_from_dict = GooglePrivacyDlpV2InspectConfig.from_dict(google_privacy_dlp_v2_inspect_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


