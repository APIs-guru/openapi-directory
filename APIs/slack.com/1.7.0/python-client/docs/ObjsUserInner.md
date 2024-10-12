# ObjsUserInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | refercing to bug: https://jira.tinyspeck.com/browse/EVALUE-1559 | [optional] 
**deleted** | **bool** |  | [optional] 
**enterprise_user** | [**ObjsEnterpriseUser**](ObjsEnterpriseUser.md) |  | [optional] 
**has_2fa** | **bool** |  | [optional] 
**id** | **str** |  | 
**is_admin** | **bool** |  | [optional] 
**is_app_user** | **bool** |  | 
**is_bot** | **bool** |  | 
**is_external** | **bool** |  | [optional] 
**is_forgotten** | **bool** |  | [optional] 
**is_invited_user** | **bool** |  | [optional] 
**is_owner** | **bool** |  | [optional] 
**is_primary_owner** | **bool** |  | [optional] 
**is_restricted** | **bool** |  | [optional] 
**is_stranger** | **bool** |  | [optional] 
**is_ultra_restricted** | **bool** |  | [optional] 
**locale** | **str** |  | [optional] 
**name** | **str** |  | 
**presence** | **str** |  | [optional] 
**profile** | [**ObjsUserProfile**](ObjsUserProfile.md) |  | 
**real_name** | **str** |  | [optional] 
**team** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 
**team_profile** | [**ObjsUserInnerAnyOfTeamProfile**](ObjsUserInnerAnyOfTeamProfile.md) |  | [optional] 
**two_factor_type** | **str** |  | [optional] 
**tz** | [**List[ObjsTeamDiscoverableInner]**](ObjsTeamDiscoverableInner.md) |  | [optional] 
**tz_label** | **str** |  | [optional] 
**tz_offset** | **float** |  | [optional] 
**updated** | **float** |  | 
**teams** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.objs_user_inner import ObjsUserInner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsUserInner from a JSON string
objs_user_inner_instance = ObjsUserInner.from_json(json)
# print the JSON string representation of the object
print(ObjsUserInner.to_json())

# convert the object into a dict
objs_user_inner_dict = objs_user_inner_instance.to_dict()
# create an instance of ObjsUserInner from a dict
objs_user_inner_from_dict = ObjsUserInner.from_dict(objs_user_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


