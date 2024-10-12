# MediationGroup

Describes an AdMob mediation group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | User provided name for the mediation group. The maximum length allowed is 120 characters. | [optional] 
**mediation_ab_experiment_state** | **str** | Output only. The state of the mediation a/b experiment that belongs to this mediation group. | [optional] [readonly] 
**mediation_group_id** | **str** | The ID of the mediation group. Example: \&quot;0123456789\&quot;. This is a read only property. | [optional] 
**mediation_group_lines** | [**Dict[str, MediationGroupMediationGroupLine]**](MediationGroupMediationGroupLine.md) | The mediation lines used for serving for this mediation group. Key is the ID of the mediation group line. For creation, use distinct negative values as placeholder. | [optional] 
**name** | **str** | Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789 | [optional] 
**state** | **str** | The status of the mediation group. Only enabled mediation groups will be served. | [optional] 
**targeting** | [**MediationGroupTargeting**](MediationGroupTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.mediation_group import MediationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of MediationGroup from a JSON string
mediation_group_instance = MediationGroup.from_json(json)
# print the JSON string representation of the object
print(MediationGroup.to_json())

# convert the object into a dict
mediation_group_dict = mediation_group_instance.to_dict()
# create an instance of MediationGroup from a dict
mediation_group_from_dict = MediationGroup.from_dict(mediation_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


