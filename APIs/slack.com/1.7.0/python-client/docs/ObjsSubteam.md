# ObjsSubteam


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_provision** | **bool** |  | 
**auto_type** | [**List[ObjsSubteamAutoTypeInner]**](ObjsSubteamAutoTypeInner.md) |  | 
**channel_count** | **int** |  | [optional] 
**created_by** | **str** |  | 
**date_create** | **int** |  | 
**date_delete** | **int** |  | 
**date_update** | **int** |  | 
**deleted_by** | [**List[ObjsSubteamDeletedByInner]**](ObjsSubteamDeletedByInner.md) |  | 
**description** | **str** |  | 
**enterprise_subteam_id** | **str** |  | 
**handle** | **str** |  | 
**id** | **str** |  | 
**is_external** | **bool** |  | 
**is_subteam** | **bool** |  | 
**is_usergroup** | **bool** |  | 
**name** | **str** |  | 
**prefs** | [**ObjsSubteamPrefs**](ObjsSubteamPrefs.md) |  | 
**team_id** | **str** |  | 
**updated_by** | **str** |  | 
**user_count** | **int** |  | [optional] 
**users** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.objs_subteam import ObjsSubteam

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsSubteam from a JSON string
objs_subteam_instance = ObjsSubteam.from_json(json)
# print the JSON string representation of the object
print(ObjsSubteam.to_json())

# convert the object into a dict
objs_subteam_dict = objs_subteam_instance.to_dict()
# create an instance of ObjsSubteam from a dict
objs_subteam_from_dict = ObjsSubteam.from_dict(objs_subteam_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


