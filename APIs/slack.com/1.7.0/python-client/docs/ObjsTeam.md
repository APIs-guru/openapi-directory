# ObjsTeam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] 
**avatar_base_url** | **str** |  | [optional] 
**created** | **int** |  | [optional] 
**date_create** | **int** |  | [optional] 
**deleted** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**discoverable** | [**List[ObjsTeamDiscoverableInner]**](ObjsTeamDiscoverableInner.md) |  | [optional] 
**domain** | **str** |  | 
**email_domain** | **str** |  | 
**enterprise_id** | **str** |  | [optional] 
**enterprise_name** | **str** |  | [optional] 
**external_org_migrations** | [**ObjsExternalOrgMigrations**](ObjsExternalOrgMigrations.md) |  | [optional] 
**has_compliance_export** | **bool** |  | [optional] 
**icon** | [**ObjsIcon**](ObjsIcon.md) |  | 
**id** | **str** |  | 
**is_assigned** | **bool** |  | [optional] 
**is_enterprise** | **int** |  | [optional] 
**is_over_storage_limit** | **bool** |  | [optional] 
**limit_ts** | **int** |  | [optional] 
**locale** | **str** |  | [optional] 
**messages_count** | **int** |  | [optional] 
**msg_edit_window_mins** | **int** |  | [optional] 
**name** | **str** |  | 
**over_integrations_limit** | **bool** |  | [optional] 
**over_storage_limit** | **bool** |  | [optional] 
**pay_prod_cur** | **str** |  | [optional] 
**plan** | **str** |  | [optional] 
**primary_owner** | [**ObjsPrimaryOwner**](ObjsPrimaryOwner.md) |  | [optional] 
**sso_provider** | [**ObjsTeamSsoProvider**](ObjsTeamSsoProvider.md) |  | [optional] 

## Example

```python
from openapi_client.models.objs_team import ObjsTeam

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsTeam from a JSON string
objs_team_instance = ObjsTeam.from_json(json)
# print the JSON string representation of the object
print(ObjsTeam.to_json())

# convert the object into a dict
objs_team_dict = objs_team_instance.to_dict()
# create an instance of ObjsTeam from a dict
objs_team_from_dict = ObjsTeam.from_dict(objs_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


