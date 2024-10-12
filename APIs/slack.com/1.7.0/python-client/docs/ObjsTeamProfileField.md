# ObjsTeamProfileField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_name** | **str** |  | [optional] 
**hint** | **str** |  | 
**id** | **str** |  | 
**is_hidden** | **bool** |  | [optional] 
**label** | **str** |  | 
**options** | [**List[ObjsTeamProfileFieldOptionsInner]**](ObjsTeamProfileFieldOptionsInner.md) |  | [optional] 
**ordering** | **float** |  | 
**possible_values** | **List[str]** |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.objs_team_profile_field import ObjsTeamProfileField

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsTeamProfileField from a JSON string
objs_team_profile_field_instance = ObjsTeamProfileField.from_json(json)
# print the JSON string representation of the object
print(ObjsTeamProfileField.to_json())

# convert the object into a dict
objs_team_profile_field_dict = objs_team_profile_field_instance.to_dict()
# create an instance of ObjsTeamProfileField from a dict
objs_team_profile_field_from_dict = ObjsTeamProfileField.from_dict(objs_team_profile_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


