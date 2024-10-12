# MediationGroupTargeting

Set of criteria targeted by this mediation group. For example, a mediation group can target specific ad unit IDs, platform, format and geo location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_unit_ids** | **List[str]** | Ad units targeted by this mediation group. Example: \&quot;ca-app-pub-1234/8790\&quot;. | [optional] 
**excluded_region_codes** | **List[str]** | The Unicode country/region code (CLDR) of a location, such as \&quot;US\&quot;. Unset if this mediation group does not exclude any region. | [optional] 
**format** | **str** | Ad format targeted by this mediation group. Examples: \&quot;banner\&quot;, \&quot;native\&quot;. | [optional] 
**idfa_targeting** | **str** | The parameter can be used to target ad requests based on the availability of the IDFA. If set to ALL, the mediation group applies to all ad requests (with or without IDFA). If set to AVAILABLE, the mediation group applies to ad requests with IDFA. If set to NOT_AVAILABLE, the mediation group applies to ad requests without IDFA. Doesn&#39;t need to be specified for an ANDROID device. | [optional] 
**platform** | **str** | Describes the platform of the app. Examples: \&quot;IOS\&quot;, \&quot;Android\&quot;. | [optional] 
**targeted_region_codes** | **List[str]** | The Unicode country/region code (CLDR) of a location, such as \&quot;US\&quot;. Unset if this mediation group targets all available regions. For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag. | [optional] 

## Example

```python
from openapi_client.models.mediation_group_targeting import MediationGroupTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of MediationGroupTargeting from a JSON string
mediation_group_targeting_instance = MediationGroupTargeting.from_json(json)
# print the JSON string representation of the object
print(MediationGroupTargeting.to_json())

# convert the object into a dict
mediation_group_targeting_dict = mediation_group_targeting_instance.to_dict()
# create an instance of MediationGroupTargeting from a dict
mediation_group_targeting_from_dict = MediationGroupTargeting.from_dict(mediation_group_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


