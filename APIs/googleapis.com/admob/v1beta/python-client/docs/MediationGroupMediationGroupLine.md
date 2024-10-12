# MediationGroupMediationGroupLine

Settings for an ad network used by a mediation group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_source_id** | **str** | The ID of the ad source this mediation line is associated with. | [optional] 
**ad_unit_mappings** | **Dict[str, str]** | References of the ad unit mappings for each ad unit associated with this mediation line. Key is the ad unit ID, value is resource name of the ad unit mapping. For mediation lines where the ad source id is the AdMob Network, ad unit mappings will be ignored. | [optional] 
**cpm_micros** | **str** | The CPM for this allocation line. $0.01 is the minimum allowed amount. For LIVE CPM modes, the default amount is $0.01. This value is ignored if &#x60;cpm_mode&#x60; is &#x60;LIVE&#x60;. **Warning:** \&quot;USD\&quot; is the only supported currency at the moment. The unit is in micros. | [optional] 
**cpm_mode** | **str** | Indicates how the CPM for this mediation line is provided. Note that &#x60;MANUAL&#x60; and &#x60;LIVE&#x60; are the only fully-supported mode at the moment. Please use the AdMob UI (https://admob.google.com) if you wish to create or update to other cpm modes. | [optional] 
**display_name** | **str** | User-provided label for this mediation line. The maximum length allowed is 255 characters. | [optional] 
**experiment_variant** | **str** | Output only. The Mediation A/B experiment variant to which the mediation group line belongs to. | [optional] [readonly] 
**id** | **str** | The 16 digit ID for this mediation line e.g. 0123456789012345. When creating a new mediation group line, use a distinct negative integer as the ID place holder. | [optional] 
**state** | **str** | The status of the mediation group line. Only enabled mediation group lines will be served. | [optional] 

## Example

```python
from openapi_client.models.mediation_group_mediation_group_line import MediationGroupMediationGroupLine

# TODO update the JSON string below
json = "{}"
# create an instance of MediationGroupMediationGroupLine from a JSON string
mediation_group_mediation_group_line_instance = MediationGroupMediationGroupLine.from_json(json)
# print the JSON string representation of the object
print(MediationGroupMediationGroupLine.to_json())

# convert the object into a dict
mediation_group_mediation_group_line_dict = mediation_group_mediation_group_line_instance.to_dict()
# create an instance of MediationGroupMediationGroupLine from a dict
mediation_group_mediation_group_line_from_dict = MediationGroupMediationGroupLine.from_dict(mediation_group_mediation_group_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


